import React from "react";
import Divider from '@material-ui/core/Divider';

const Projects = () => {
    return (
        <div className="projects">
            <h3>Shannon's Projects</h3>
            <h4>V-Beloved</h4>
            <p>V-Beloved is an all-inclusive wedding planning site where you can create custom invitations, upload guest lists, and keep track of RSVPs.</p>
            <a href="https://www.vbeloved.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
            <span>&#160;&#8226;&#160;</span>
            <a href="https://github.com/Lambda-School-Labs/labs9-wedding-site" target="_blank" rel="noopener noreferrer">Project Repository</a>
            <Divider />
            <h4>Conway's Life</h4>
            <p>A demonstration of John Conway's cellular automata.</p>
            <a href="https://sca4cs.github.io/Conways-Life/" target="_blank" rel="noopener noreferrer">Visit Site</a>
            <span>&#160;&#8226;&#160;</span>
            <a href="https://github.com/sca4cs/Conways_Life" target="_blank" rel="noopener noreferrer">Project Repository</a>
            <Divider />
            <h4>Lambda MUD</h4>
            <p>A text-based dungeon crawler implemented with Django and React.</p>
            <a href="https://sharp-thompson-8fccb7.netlify.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
            <span>&#160;&#8226;&#160;</span>
            <a href="https://github.com/sca4cs/LambdaMUD_Client" target="_blank" rel="noopener noreferrer">Project Repository</a>
            <Divider />
        </div>
    );
};

export default Projects;