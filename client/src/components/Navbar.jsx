import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar fade-in-down">
            <Link to="/" className="navbar-brand">
                <Zap strokeWidth={2.5} size={28} color="var(--cuec-white)" />
                <span className="text-gradient">CUEC</span>
            </Link>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/events/underground-garage" className="nav-link" style={{ color: 'var(--cuec-red)' }}>Underground Garage</Link>
                <Link to="/about" className="nav-link">About Us</Link>

                <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
                    {token ? (
                        <>
                            <Link to="/dashboard" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Dashboard</Link>
                            <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Login</Link>
                            <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
