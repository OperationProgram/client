import React, { useState, useEffect } from 'react';
import '../css/Profile.css';

const Profile = ({ userId }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Fetch user profile data from backend
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${userId}`);
                if (!response.ok) throw new Error('Profile fetch failed');
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="profile">
            <div className="profile-header">
                <img src={profile.profile_picture} alt="Profile" className="profile-picture" />
                <h1>{profile.username}</h1>
                <p>{profile.bio}</p>
            </div>
            <div className="profile-details">
                <h2>Skills & Interests</h2>
                <p>{profile.skills}</p>
                <h2>Projects</h2>
                <ul>
                    {profile.projects.map(project => (
                        <li key={project.id}>
                            <a href={`/projects/${project.id}`}>{project.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
