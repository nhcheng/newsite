import React, { Component } from "react";

import "../../utilities.css";
import "./Teaching.css";
import TeachingBackground from "../../img/TeachingBanner.png";
import TopBanner from "../modules/TopBanner.js";
import MyAlert from "../modules/MyAlert.js"
import FallInfo from '../../data/Teaching/FallInfo.pdf';
import SpringInfo from '../../data/Teaching/SpringInfo.pdf';

class Teaching extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
    <div className="App-container">
      <TopBanner 
          background={TeachingBackground}
          title={<span className="teaching-highlight"> TEACHING </span>}
          content={<> This page contains all the materials for my teaching 
          activities. </>}
          des="Clore Lecture Theatre -- the main lecture theatre 
          for Department of Mathematics at Imperial College London."
        />  
      <div className="u-block">
        <MyAlert 
          alerttype="green"
          content="I will host a drop in session on 10/12 in Microsoft Teams. 
          Come and join us!"
        />
        <MyAlert 
          alerttype="red"
          content="The 15/02 session for spring term tutorial will need to be rescheduled
          due to conflict with midterm tests."
        />
      </div>
      <div className="u-block">
        <h2> Current Teaching </h2>
      </div>
      <div className="u-block">
            <h3 className="u-nomargin"> Imperial: Spring Peer Tutorial (Group 21) </h3>
            <p> <b>Term</b> 2021 Spring | <b>Time:</b> Monday 10:30-11:30 (GMT) | <b>Venue:</b> Virtual (Microsoft Teams) | <b>Role:</b> Tutor | <b> Syllabus:</b> <a href={SpringInfo} target="_blank">here</a>. </p>
            <p> <i>Student discusses special topics related to lecture materials. </i> </p>
            <p className="u-nomargin"> Tentative Schedule: (Participants are more than welcomed to
            suggest their topics.) </p>
            <ul className="u-nomargin">
            <li> (22/01)* Linear Algebra: Introduction to linear algebra using Numpy. </li>
            <li> (25/01) Linear Algebra: QR Factorisation I </li>
            <li> (01/02) Linear Algebra: QR Factorisation II </li>
            <li> (08/02) Analysis: Monotone Functions </li>
            <li> (15/02)* Midterm Preparation </li>
            <li> (22/02) Statistics: Least Square Estimation </li>
            <li> (01/03) Analysis: Fixed Point Theorems </li>
            <li> (08/03) Calculus: Bifurcation in practice </li>
            <li> (15/03) Group Theory: Special Groups </li>
            <li> (22/03) Sendoff </li>
            </ul>
      </div>
      <div className="u-block">
        <h2> Past Teaching </h2>
      </div>
      <div className="u-block">
            <h3 className="u-nomargin"> Imperial: Fall Peer Tutorial (Group 47) </h3>
            <p> <b>Term</b> 2020 Fall | <b>Time:</b> Thursday 11:00-12:00 (GMT) | <b>Venue:</b> Virtual (Microsoft Teams) | <b>Role:</b> Tutor | <b> Syllabus:</b> <a href={FallInfo} target="_blank">here</a>.  </p>
            <p> <i>Student discusses special topics related to lecture materials. </i> </p>
            <p className="u-nomargin"> Schedule: </p>
            <ul className="u-nomargin">
            <li> (05/11) Analysis: Countability </li>
            <li> (12/01) Analysis: Supremum and Infinmum </li>
            <li> (19/11) Midterm Preparation </li>
            <li> (26/11) Linear Algebra: Introduction to linear algebra using Numpy. </li>
            <li> (03/12) Calculus: Fourier Series </li>
            <li> (10/12) Probability: Transformation of Variables </li>
            <li> (16/12)* Sendoff </li>
            </ul>
      </div>
    </div>  
    );
  }
}

export default Teaching;
