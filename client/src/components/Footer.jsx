import React from 'react';

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
            <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', margin: 0, marginTop: '1rem' }}>
                &copy; {new Date().getFullYear()} Chandigarh University Entrepreneurship Cell, Uttar Pradesh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
