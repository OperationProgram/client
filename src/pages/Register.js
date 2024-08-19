import React, { useState } from 'react';
import '../css/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [errorMessages, setErrorMessages] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: false,
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const messages = {};
        let hasErrors = false;

        ['first_name', 'last_name', 'username', 'email', 'password', 'confirmPassword'].forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = true;
                messages[field] = 'This field is required';
                hasErrors = true;
            }
        });

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = true;
            messages.confirmPassword = 'Passwords do not match';
            hasErrors = true;
        }

        setErrors(newErrors);
        setErrorMessages(messages);
        return !hasErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                alert('Registration successful!');
                setFormData({
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                alert(`Registration failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="register">
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={errors.first_name ? 'error' : ''}
                    required
                />
                {errors.first_name && <p className="error-message">{errorMessages.first_name}</p>}

                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={errors.last_name ? 'error' : ''}
                    required
                />
                {errors.last_name && <p className="error-message">{errorMessages.last_name}</p>}

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? 'error' : ''}
                    required
                />
                {errors.username && <p className="error-message">{errorMessages.username}</p>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    required
                />
                {errors.email && <p className="error-message">{errorMessages.email}</p>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    required
                />
                {errors.password && <p className="error-message">{errorMessages.password}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    required
                />
                {errors.confirmPassword && <p className="error-message">{errorMessages.confirmPassword}</p>}

                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
};

export default Register;