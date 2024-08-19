import React, { useState } from 'react';
import '../css/Login.css';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { username, password } = formData;
    
        if (!username || !password) {
            console.error('Username and password are required');
            return;
        }
    
        try {
            const data = {
                username,
                password
            };
    
            console.log('Sending data:', data); // Debug log
    
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log('Login result:', result); // Debug log
    
            if (result.success) {
                alert('Login successful!');
                if (onLogin) onLogin(result.user);
            } else {
                alert(`Login failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-buttonn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;