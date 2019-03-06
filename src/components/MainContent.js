import React, { Component } from "react";
import Landing from "./Landing";
import About from "./About";
import Projects from "./Projects";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import './main.css';

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    scrollToMyRef = () => {
        window.scrollTo({
            top: this.myRef.current.offsetTop - 100,
            behavior: 'smooth',
          })
    }

    render() {
        return (
            <div className="main-content">
                <Landing scrollToMyRef={this.scrollToMyRef}/>
                <div ref={this.myRef}>
                <Paper className="paper">
                    <About/>
                    <Divider />
                    <Projects/>
                </Paper>
                </div>
            </div>
        )
    }
}

export default MainContent;