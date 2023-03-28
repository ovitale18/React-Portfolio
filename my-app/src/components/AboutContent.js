import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a full stack developer curerently enrolled in a Georgia Tech MERN Stack Bootcamp based out of Athens, GA.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

    </div>
  )
}

export default AboutContent