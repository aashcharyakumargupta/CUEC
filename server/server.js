const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load env vars
dotenv.config();

// Models
const User = require('./models/User');
const EventRegistration = require('./models/EventRegistration');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/')
    .then(() => console.log('MongoDB Connected to CUEC Database'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// ==========================================
// Basic Routes
// ==========================================
app.get('/', (req, res) => {
    res.send('CUEC Backend API is running!');
});

// ==========================================
// ==========================================

// Register
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password, university_id } = req.body;

        // Check if user exists
        let user = await User.findOne({ $or: [{ email }, { university_id }] });
        if (user) {
            return res.status(400).json({ message: 'User with this email or university ID already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Create user
        user = new User({
            username,
            email,
            password_hash,
            university_id
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        // Return JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: 360000 }, // 100 hours for dev
            (err, token) => {
                if (err) throw err;
                res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// ==========================================
// Event Routes (Underground Garage)
// ==========================================

// Middleware to verify JWT
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

app.post('/api/events/register', auth, async (req, res) => {
    try {
        const { student_name, phone, department } = req.body;

        // Check if user already registered for this event
        const existingReg = await EventRegistration.findOne({
            user_id: req.user.id,
            event_name: 'Underground Garage'
        });

        if (existingReg) {
            return res.status(400).json({ message: 'You have already registered for this event!' });
        }

        const newReg = new EventRegistration({
            user_id: req.user.id,
            event_name: 'Underground Garage',
            student_name,
            phone,
            department
        });

        await newReg.save();
        res.status(201).json({ message: 'Successfully registered for Underground Garage!', registration: newReg });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/api/events/my-registrations', auth, async (req, res) => {
    try {
        const registrations = await EventRegistration.find({ user_id: req.user.id });
        res.json(registrations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

module.exports = app;
