import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
    return (
        <header>
            <Link to="/" className="logo">Crowdsourced Creative Projects</Link>
            <nav className="nav">
                <Link to="/projects">Projects</Link>
                <Link to="/profiles">Profiles</Link>
            </nav>
            <div className="button-group">
                {isAuthenticated ? (
                    <button className="logout-button" onClick={onLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="login-button">Login</Link>
                        <Link to="/register" className="register-button">Register</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;