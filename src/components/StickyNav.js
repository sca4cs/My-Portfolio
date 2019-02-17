import React from "react";
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg';
import { ReactComponent as GMail } from '../assets/gmail.svg';

const StickyNav = () => {
    return (
        <div className="sticky-nav">
          <a href="https://github.com/sca4cs" target="_blank"><Github/></a>
          <a href="https://www.linkedin.com/in/shannon-atkinson-825aba179/" target="_blank"><LinkedIn/></a>
          <a href="mailto:shannon.atkinson.ca@gmail.com"><GMail/></a>
        </div>
    );
};

export default StickyNav;