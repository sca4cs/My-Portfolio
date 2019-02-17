import React from "react";
import Divider from '@material-ui/core/Divider';

const Projects = () => {
    return (
        <div className="projects">
            <h3>Shannon's Projects</h3>
            <h4>V-BELOVED</h4>
            <p>A one-stop-shop for all things wedding planning</p>
            <a href="https://www.vbeloved.com/" target="_blank">Visit Site</a>
            <span>&#160;&#8226;&#160;</span>
            <a href="https://github.com/Lambda-School-Labs/labs9-wedding-site" target="_blank">Project Repository</a>
            <Divider />
            <h4>CONWAY'S LIFE</h4>
            <p>A demonstration of John Conway's cellular automata</p>
            <a href="https://sca4cs.github.io/Conways-Life/" target="_blank">Visit Site</a>
            <span>&#160;&#8226;&#160;</span>
            <a href="https://github.com/sca4cs/Conways_Life" target="_blank">Project Repository</a>
            <Divider />
            <h4>LAMBDA-MUD</h4>
            <p>An text based multi-player dungeon crawler</p>
        </div>
    );
};

export default Projects;