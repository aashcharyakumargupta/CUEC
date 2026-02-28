import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '3rem 2rem 2rem 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto',
            background: 'rgba(10, 10, 10, 0.5)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
        }}>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', letterSpacing: '2px', margin: 0 }}>DREAM DARE DEVELOP</h3>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ color: 'var(--text-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Let's Connect</span>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="https://instagram.com/cu.ecell" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cuec-red)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}>
                        <Instagram size={20} />
                        <span>cu.ecell</span>
                    </a>
                    <a href="mailto:cuec@culko.in" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cuec-red)' }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}>
                        <Mail size={20} />
                        <span>cuec@culko.in</span>
                    </a>
                </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', margin: 0, marginTop: '1rem' }}>
                &copy; {new Date().getFullYear()} Chandigarh University Entrepreneurship Cell, Uttar Pradesh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
