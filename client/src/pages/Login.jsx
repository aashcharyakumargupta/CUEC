import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '');
            const res = await axios.post(`${apiUrl}/api/auth/login`, formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/dashboard');
            window.location.reload(); // Quick way to update navbar state
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card glass-card fade-in-up">
                <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '2rem', textAlign: 'center', color: 'var(--text-primary)' }}>
                    Student <span className="text-gradient">Login</span>
                </h2>
                {error && <p style={{ color: 'var(--cuec-red)', marginBottom: '1.5rem', textAlign: 'center', background: 'rgba(255, 51, 102, 0.1)', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,51,102,0.3)' }}>{error}</p>}

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>University Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="user@cuchd.in" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.1rem' }}>Login to portal</button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
                    Don't have an account? <Link to="/register" style={{ color: 'var(--cuec-white)', fontWeight: '600', textDecoration: 'none' }}>Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
