import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        setIsMobileMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="navbar fade-in-down">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" className="navbar-brand" onClick={closeMenu}>
                    <Zap strokeWidth={2.5} size={28} color="var(--cuec-white)" />
                    <span className="text-gradient">CUEC</span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <X size={28} color="var(--text-primary)" /> : <Menu size={28} color="var(--text-primary)" />}
                </button>
            </div>

            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                <Link to="/events/underground-garage" className="nav-link" style={{ color: 'var(--cuec-red)' }} onClick={closeMenu}>Underground Garage</Link>
                <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>

                <div className="nav-buttons-container">
                    {token ? (
                        <>
                            <Link to="/dashboard" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }} onClick={closeMenu}>Dashboard</Link>
                            <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} onClick={closeMenu}>Login</Link>
                            <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} onClick={closeMenu}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
