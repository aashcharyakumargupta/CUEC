import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UndergroundGarage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        student_name: '',
        phone: '',
        department: ''
    });
    const [message, setMessage] = useState('');

    // Enable Night Mode by attaching class to body
    useEffect(() => {
        document.body.classList.add('theme-underground');
        return () => document.body.classList.remove('theme-underground');
    }, []);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.submitter && e.preventDefault(); // allow form submit button to prevent default
        if (e.type === 'submit') e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            return;
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            };

            const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '');
            const res = await axios.post(`${apiUrl}/api/events/register`, formData, config);
            setMessage(res.data.message);
            setFormData({ student_name: '', phone: '', department: '' });
        } catch (err) {
            setMessage(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="ug-hero">
            <div style={{ flex: 1, paddingRight: '4rem', paddingLeft: '2rem', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(230,0,0,0.1)', border: '1px solid rgba(230,0,0,0.3)', borderRadius: '30px', marginBottom: '1.5rem' }}>
                    <p style={{ color: '#ff3333', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', margin: 0 }}>
                        CUEC × Red Bull Partnership
                    </p>
                </div>

                <h1 className="ug-title fade-in-up">Underground<br />Garage</h1>

                <p className="fade-in-up stagger-1" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', maxWidth: '550px', lineHeight: 1.6 }}>
                    Fuel your startup engine. Pitch your boldest ideas in the most intense, high-energy environment on campus. The grid is waiting.
                </p>

                <div className="glass-card fade-in-up stagger-2" style={{ gap: '3rem', padding: '2rem', display: 'inline-flex', background: 'rgba(10,10,10,0.4)', borderColor: 'rgba(255,255,255,0.2)' }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>24</span>
                        <span style={{ color: 'var(--cuec-white)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Teams</span>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>12</span>
                        <span style={{ color: 'var(--cuec-white)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Hours</span>
                    </div>
                    <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                    <div>
                        <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: '#ff3333', textShadow: '0 0 15px rgba(230,0,0,0.5)' }}>₹1L</span>
                        <span style={{ color: '#ff3333', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>Prize Pool</span>
                    </div>
                </div>
            </div>

            <div className="ug-form-card glass-card fade-in-up stagger-3" style={{ marginRight: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '2rem' }}>Secure Spot</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Authentication required via University ID.</p>

                {message && (
                    <div style={{ padding: '1rem', backgroundColor: message.includes('success') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: message.includes('success') ? '#34d399' : '#f87171', borderRadius: '8px', marginBottom: '2rem', border: `1px solid ${message.includes('success') ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                        {message}
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label style={{ color: '#94a3b8' }}>Operative Name</label>
                        <input
                            type="text"
                            name="student_name"
                            value={formData.student_name}
                            onChange={handleChange}
                            required
                            placeholder="Enter full name"
                            style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#94a3b8' }}>Comms (Phone)</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ color: '#94a3b8' }}>Sector (Department)</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Computer Science Vanguard"
                            style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1.2rem', fontSize: '1.1rem', background: 'linear-gradient(135deg, #e60000 0%, #ff4d4d 100%)', boxShadow: '0 4px 20px rgba(230,0,0,0.4)' }}>
                        INITIALIZE REGISTRATION
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UndergroundGarage;
