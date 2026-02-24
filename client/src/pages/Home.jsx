import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem', minHeight: 'calc(100vh - 76px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Empowering <br />
                    <span className="text-gradient">Next-Gen Builders</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Chandigarh University Entrepreneurship Cell is the epicenter of innovation, disruptive startups, and visionary leadership.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        Join The Movement
                    </Link>
                    <Link to="/events/underground-garage" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
                        Underground Garage
                    </Link>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', position: 'relative', zIndex: 10 }}>
                <div className="glass-card fade-in-up stagger-1 hover-glow-red" style={{ padding: '2.5rem', textAlign: 'left' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 51, 102, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255, 51, 102, 0.2)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🔥</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Incubation</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Transform your raw ideas into funded startups with our elite incubation and intensive mentorship programs.</p>
                </div>

                <div className="glass-card fade-in-up stagger-2 hover-glow-red" style={{ padding: '2.5rem', textAlign: 'left' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        <span style={{ fontSize: '1.5rem' }}>⚡</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Workshops</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Learn from industry titans in dedicated masterclasses focusing on product engineering, marketing, and scaling.</p>
                </div>

                <div className="glass-card fade-in-up stagger-3 hover-glow-red" style={{ padding: '2.5rem', textAlign: 'left' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(226, 232, 240, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(226, 232, 240, 0.2)' }}>
                        <span style={{ fontSize: '1.5rem' }}>🌐</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Networking</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Connect directly with an exclusive network of successful alumni, angel investors, and rogue builders.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
