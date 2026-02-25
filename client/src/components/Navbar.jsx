import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        setIsMobileMenuOpen(false);
    };

    const toggleEventsDropdown = () => {
        setIsEventsDropdownOpen(!isEventsDropdownOpen);
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

                <div style={{ position: 'relative' }}>
                    <button
                        className="nav-link"
                        style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
                        onClick={toggleEventsDropdown}
                    >
                        Events <ChevronDown size={16} style={{ transform: isEventsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                    </button>

                    {isEventsDropdownOpen && (
                        <div
                            style={{
                                position: isMobileMenuOpen ? 'static' : 'absolute',
                                top: '100%',
                                left: isMobileMenuOpen ? '1rem' : '0',
                                marginTop: '0.5rem',
                                background: 'rgba(20, 20, 20, 0.95)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                padding: '0.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem',
                                minWidth: '200px',
                                zIndex: 50
                            }}
                        >
                            <Link
                                to="/events/redbull-basement"
                                className="nav-link"
                                style={{
                                    padding: '0.5rem 1rem',
                                    margin: 0,
                                    color: 'var(--cuec-red)',
                                    borderRadius: '4px',
                                    transition: 'all 0.2s ease',
                                    fontSize: '0.9rem'
                                }}
                                onClick={() => { closeMenu(); setIsEventsDropdownOpen(false); }}
                                onMouseEnter={(e) => { e.target.style.background = 'rgba(255, 0, 51, 0.15)'; e.target.style.color = '#ff4466'; e.target.style.paddingLeft = '1.2rem'; }}
                                onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--cuec-red)'; e.target.style.paddingLeft = '1rem'; }}
                            >
                                Red Bull Basement
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/about" className="nav-link" style={{ whiteSpace: 'nowrap' }} onClick={closeMenu}>About Us</Link>

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
        </nav >
    );
};

export default Navbar;
