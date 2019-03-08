import React from "react";
import Socials from "./Contact";
import ParticleComponent from "./Particle.js";

const Landing = (props) => {
    return (
        <div className="landing">
            <ParticleComponent />
            <Socials/>
            <div className="intro">
            <h1 className="title">Shannon Atkinson</h1>
            <h2 className="subtitle">Full Stack Web Developer<br/>&amp;<br/>Software Engineer</h2>
            <i onClick={props.scrollToMyRef} className="fas fa-arrow-circle-down fa-lg"></i>
            </div>
        </div>
    );
};

export default Landing;