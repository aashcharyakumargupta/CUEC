import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: 'auto',
            background: 'rgba(10, 10, 10, 0.5)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 10
        }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                &copy; {new Date().getFullYear()} Chandigarh University Entrepreneurship Cell, Uttar Pradesh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
