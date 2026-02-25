import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [registrations, setRegistrations] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (!token) {
            navigate('/login');
            return;
        }

        if (userData) {
            setUser(JSON.parse(userData));
        }

        const fetchRegistrations = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '');
                const res = await axios.get(`${apiUrl}/api/events/my-registrations`, {
                    headers: { 'x-auth-token': token }
                });
                setRegistrations(res.data);
            } catch (err) {
                console.error('Error fetching registrations');
            }
        };

        fetchRegistrations();
    }, [navigate]);

    if (!user) return <div className="container" style={{ paddingTop: '4rem' }}>Loading...</div>;

    return (
        <div className="container" style={{ paddingTop: '6rem', minHeight: 'calc(100vh - 76px)' }}>
            <div className="fade-in-up" style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--card-border)' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    Welcome back, <span className="text-gradient">{user.username}</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', letterSpacing: '1px' }}>{user.email}</p>
            </div>

            <h3 className="fade-in-up stagger-1" style={{ marginBottom: '2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>Your Ventures</h3>

            {registrations.length === 0 ? (
                <div className="glass-card fade-in-up stagger-2" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}>🚀</div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>No active ventures or events detected.</p>
                    <button onClick={() => navigate('/events/redbull-basement')} className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                        Join Red Bull Basement
                    </button>
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                    {registrations.map((reg, idx) => (
                        <div key={reg._id} className={`glass-card fade-in-up stagger-${Math.min(idx + 2, 5)} hover-glow-red`} style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                            {/* Decorative line */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--cuec-red), var(--cuec-white))' }}></div>

                            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                                {reg.event_name}
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ opacity: 0.7 }}>Innovator:</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{reg.student_name}</span>
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ opacity: 0.7 }}>Department:</span>
                                    <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{reg.department}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
