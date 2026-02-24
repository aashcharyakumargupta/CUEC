const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    event_name: {
        type: String,
        required: true,
        default: 'Underground Garage'
    },
    student_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
}, {
    timestamps: { createdAt: 'timestamp', updatedAt: false }
});

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);
