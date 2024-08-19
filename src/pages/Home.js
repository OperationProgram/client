import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to the Crowdsourced Creative Projects Platform</h1>
                    <p>Collaborate on creative projects, share ideas, and contribute to artistic endeavors.</p>
                    <a href="/projects" className="cta-button">Explore Projects</a>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Join the Community</h3>
                        <p>Sign up to become a part of our creative community.</p>
                    </div>
                    <div className="step">
                        <h3>2. Explore Projects</h3>
                        <p>Browse through various creative projects and find what interests you.</p>
                    </div>
                    <div className="step">
                        <h3>3. Contribute</h3>
                        <p>Share your ideas, provide feedback, and contribute to ongoing projects.</p>
                    </div>
                </div>
            </section>

            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <div className="projects-list">
                    <div className="project">
                        <h3>Project Title 1</h3>
                        <p>Brief description of the project.</p>
                    </div>
                    <div className="project">
                        <h3>Project Title 2</h3>
                        <p>Brief description of the project.</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Ready to Get Started?</h2>
                <a href="/signup" className="cta-button">Join Now</a>
            </section>
        </div>
    );
};

export default Home;