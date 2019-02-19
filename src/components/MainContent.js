import React, { Component } from "react";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import './main.css';

class MainContent extends Component {

    render() {
        return (
            <div className="main-content">
                <Landing/>
                <Paper className="paper">
                    <About/>
                    <Divider />
                    <Projects/>
                </Paper>
            </div>
        )
    }
}

export default MainContent;