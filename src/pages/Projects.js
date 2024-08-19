// src/pages/Project.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Project.css'; // Ensure the path is correct

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/projects/${id}`);
                if (!response.ok) throw new Error('Project fetch failed');
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="project">
            <h1>{project.title}</h1>
            <div className="project-details">
                <p>{project.description}</p>
                {/* Add more project details here */}
            </div>
        </div>
    );
};

export default Project;