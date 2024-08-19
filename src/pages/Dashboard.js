import React from 'react';
import '../css/Dashboard.css'; // Import updated SCSS

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="top-bar">
                <div className="user-menu">
                    <span>Notifications</span>
                    <span>Profile</span>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="sidebar">
                    <a href="/create-project" className="sidebar-link">Create New Project</a>
                    <a href="/profile" className="sidebar-link">Profile Settings</a>
                    <a href="/settings" className="sidebar-link">Account Settings</a>
                </div>
                <div className="main-content">
                    <div className="card">
                        <h2>Your Projects</h2>
                        <p>Manage and view all your projects here.</p>
                        <a href="/projects" className="dashboard-link">View Projects</a>
                    </div>
                    <div className="card">
                        <h2>Your Profile</h2>
                        <p>Update your profile information and settings.</p>
                        <a href="/profile" className="dashboard-link">Edit Profile</a>
                    </div>
                    <div className="card">
                        <h2>Account Settings</h2>
                        <p>Manage your account settings and preferences.</p>
                        <a href="/settings" className="dashboard-link">Settings</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;