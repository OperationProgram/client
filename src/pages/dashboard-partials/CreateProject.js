import React, { useState } from 'react';
import '../../css/CreateProject.css'; // Import the SCSS for styling

const CreateProject = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        category: '',
        skills: '',
        duration: '',
        visibility: 'public',
        externalLinks: '',
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

        try {
            const response = await fetch('http://localhost:5000/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Project created successfully!');
                // Reset form data after successful submission
                setFormData({
                    projectName: '',
                    description: '',
                    category: '',
                    skills: '',
                    duration: '',
                    visibility: 'public',
                    externalLinks: '',
                });
            } else {
                alert('Failed to create project. Please try again.');
            }
        } catch (error) {
            console.error('Error creating project:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="create-project">
            <h1>Create a New Project</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="projectName">Project Name</label>
                <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>

                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                </select>

                <label htmlFor="skills">Required Skills</label>
                <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, React, CSS"
                    required
                />

                <label htmlFor="duration">Project Duration</label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="e.g., 3 months"
                    required
                />

                <label htmlFor="visibility">Project Visibility</label>
                <select
                    id="visibility"
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleChange}
                >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>

                <label htmlFor="externalLinks">External Links</label>
                <input
                    type="text"
                    id="externalLinks"
                    name="externalLinks"
                    value={formData.externalLinks}
                    onChange={handleChange}
                    placeholder="e.g., GitHub, Google Docs"
                />

                <button type="submit" className="submit-button">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProject;
