import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Clock, Trophy, ShieldAlert, PlayCircle, MapPin } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const RedBullBasement = () => {
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
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', minHeight: 'calc(100vh - 76px)', display: 'flex', flexDirection: 'column', position: 'relative' }}>

            {/* Background elements for extra pop */}
            <div style={{ position: 'absolute', top: '0%', left: '0%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(230,0,0,0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start', position: 'relative', zIndex: 10 }}>

                {/* Left Column: Info & Video */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    <div>
                        <motion.div variants={fadeInUp} style={{ padding: '0.4rem 1.2rem', background: 'rgba(230,0,0,0.1)', border: '1px solid rgba(230,0,0,0.3)', borderRadius: '30px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', width: 'fit-content' }}>
                            <ShieldAlert size={16} color="#ff3333" />
                            <span style={{ color: '#ff3333', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', margin: 0 }}>
                                Official Event
                            </span>
                        </motion.div>

                        {/* Prominent Video Player Replacing Title */}
                        <motion.div
                            variants={fadeInUp}
                            style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', background: '#000', width: '100%', maxWidth: '600px', aspectRatio: '16/9', marginBottom: '1.5rem' }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    pointerEvents: 'none'
                                }}
                            >
                                <source src="/assets/redbull.webm" type="video/webm" />
                            </video>
                        </motion.div>

                        <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '550px', lineHeight: 1.6 }}>
                            Innovate, build, and disrupt. Join the ultimate sprint to bring your boldest entrepreneurial ideas to the global stage from Chandigarh University, Uttar Pradesh.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeInUp} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1, minWidth: '150px' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                                <Clock size={28} color="#fff" />
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.2rem' }}>27.02.2026</span>
                                <span style={{ color: 'var(--cuec-white)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block' }}>Friday</span>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} className="divider-hide-mobile"></div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1, minWidth: '150px' }}>
                            <div style={{ backgroundColor: 'rgba(230,0,0,0.1)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(230,0,0,0.2)' }}>
                                <Trophy size={28} color="#ff3333" />
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: '#ff3333', lineHeight: 1.2, textShadow: '0 0 10px rgba(230,0,0,0.3)', marginBottom: '0.2rem' }}>Free Red Bull</span>
                                <span style={{ color: '#ff3333', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block' }}>On Registration</span>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.1)' }} className="divider-hide-mobile"></div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1.2, minWidth: '180px' }}>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px' }}>
                                <MapPin size={28} color="#fff" />
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '0.2rem' }}>Library</span>
                                <span style={{ color: 'var(--cuec-white)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', display: 'block' }}>Chandigarh University<br />Uttar Pradesh</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Registration Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="glass-card"
                    style={{ padding: '3rem', background: 'rgba(15,15,15,0.8)', backdropFilter: 'blur(20px)', borderColor: 'rgba(230,0,0,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(230,0,0,0.05)' }}
                >


                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '2rem' }}>Secure Spot</h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', margin: 0 }}>Authentication required via University ID.</p>
                    </div>

                    {message && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '1rem', backgroundColor: message.includes('success') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: message.includes('success') ? '#34d399' : '#f87171', borderRadius: '8px', marginBottom: '2rem', border: `1px solid ${message.includes('success') ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                            {message}
                        </motion.div>
                    )}

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label style={{ color: '#e2e8f0' }}>Operative Name</label>
                            <input
                                type="text"
                                name="student_name"
                                value={formData.student_name}
                                onChange={handleChange}
                                required
                                placeholder="Enter full name"
                                style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)', padding: '1rem', fontSize: '1rem' }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#e2e8f0' }}>Comms (Phone)</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="+91 XXXXX XXXXX"
                                style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)', padding: '1rem', fontSize: '1rem' }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: '#e2e8f0' }}>Sector (Department)</label>
                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Computer Science Vanguard"
                                style={{ backgroundColor: 'rgba(3,7,18,0.6)', borderColor: 'rgba(255,255,255,0.1)', padding: '1rem', fontSize: '1rem' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1.2rem', fontSize: '1.1rem', background: 'linear-gradient(135deg, #e60000 0%, #ff4d4d 100%)', boxShadow: '0 4px 20px rgba(230,0,0,0.5)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                            Initialize Registration
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default RedBullBasement;
