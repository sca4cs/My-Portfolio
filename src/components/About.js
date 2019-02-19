import React from "react";
import portfolioPic from "../assets/Cypress-photo-3.png";

const About = () => {
    return (
        <div className="about">
            <img src={portfolioPic} className="portfolio-pic" alt="Shannon Atkinson"/>
            <h3>About Shannon</h3>
            <p>
            Shannon has always been fascinated with finding out how things work, whether the topic be organic systems, mechanical systems, or virtual ones. Having taken taking biology and engineering courses in undergrad, she loves getting to the root of a problem. She believes that the best way to understand something is to break it down into its component parts, and believes that if she can’t explain something in simple terms, then she doesn’t really understand it. As a recent graduate of Lambda School’s Full-Stack Web Development program, she looks forward to building performant, impactful applications.
            </p>
        </div>
    );
};

export default About;