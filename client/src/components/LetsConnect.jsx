import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const LetsConnect = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '3rem 2rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                margin: '2rem 0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,0,51,0.5), transparent)' }}></div>

            <h3 style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.5rem', margin: 0 }}>Let's Connect</h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '500px', marginBottom: '0.5rem', marginTop: '-0.5rem' }}>
                Join our community and stay updated with the latest events and opportunities.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                    href="https://instagram.com/cu.ecell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-glow-red"
                    style={{
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        padding: '1rem 2rem',
                        background: 'rgba(255,0,51,0.05)',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,0,51,0.2)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,0,51,0.15)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,0,51,0.05)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                >
                    <Instagram size={24} color="var(--cuec-red)" />
                    <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>cu.ecell</span>
                </a>

                <a
                    href="mailto:cuec@culko.in"
                    className="hover-glow-red"
                    style={{
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        padding: '1rem 2rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '30px',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                >
                    <Mail size={24} color="var(--cuec-white)" />
                    <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>cuec@culko.in</span>
                </a>
            </div>
        </motion.div>
    );
};

export default LetsConnect;
