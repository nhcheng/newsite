import React, { Component } from "react";

import "../../utilities.css";
import "./Teaching.css";
import Image from "../modules/Image.js";
import TeachingBackground from "../../img/ACEX.jpg";
import TopBanner from "../modules/TopBanner.js";
import MyAlert from "../modules/MyAlert.js"
import FallInfo from '../../data/Teaching/FallInfo.pdf';
import SpringInfo from '../../data/Teaching/SpringInfo.pdf';
import wiki from "../../img/wiki.png";
import wiki2 from "../../img/wiki2.png";
import "./Home.css";
import ChemEngWiki from "../../img/ChemEngWiki.png";
import survey from "../../img/survey.png";

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
          title={<span className="teaching-highlight"> Teaching </span>}
          content={<> This page contains all the materials for my teaching 
          and pedagogical activities. </>}
          // des="Clore Lecture Theatre -- the main lecture theatre 
          // for Department of Mathematics at Imperial College London."
        />  
      <div className="u-block">
        {/* <MyAlert 
          alerttype="green"
          content="I will host a drop in session on 10/12 in Microsoft Teams. 
          Come and join us!"
        />
        <MyAlert 
          alerttype="red"
          content="The 15/02 session for spring term tutorial will need to be rescheduled
          due to conflict with midterm tests."
        /> */}
      </div>
      <div className="u-block">
        <h1> Chemical Engineering Wiki </h1>
        <h3>Student-led effort supported by Department of Chemical Engineering</h3>
      </div>
      <div className="u-block">
        <div className="u-flex">
          <div className="home-flexleft">
            <p className="u-nomargin"> Links (Imperial log-in required) </p>
            <br></br>
            <ul className="u-nomargin">
            <li> <a href="https://wiki.imperial.ac.uk/display/CEW/Chemical+Engineering+-+Wiki+Home">Chemical Engineering - Wiki Home</a> </li>
            <li> <a href="https://wiki.imperial.ac.uk/display/CEFYD/Chemical+Engineering+-+First+Year+Depository+Home">Chemical Engineering - First Year Depository Home</a> </li>
            <li> <a href="https://wiki.imperial.ac.uk/display/CESYD/Chemical+Engineering+-+Second+Year+Depository+Home">Chemical Engineering - Second Year Depository Home</a> </li>
            <li> <a href="https://wiki.imperial.ac.uk/display/CETYD/Chemical+Engineering+-+Third+Year+Depository+Home">Chemical Engineering - Third Year Depository Home</a> </li>
            <li> <a href="https://wiki.imperial.ac.uk/display/CEFYD2/Chemical+Engineering+-+Fourth+Year+Depository+Home">Chemical Engineering - Fourth Year Depository Home</a> </li>
            </ul>
      <br></br>
      <p>The wiki provides student-made content:</p>
        <ul className="u-nomargin">
          <li>Student-led: Students work together to develop the wiki and learn from each other</li>
          <li>Self-sustaining: Students sustain the wiki</li>
          <li>High degree of freedom: Students decide what to include and how to present it</li>
          <li>Departmental support for wiki growth</li>
        </ul>
        <br></br>
        </div>
          <div className="home-flexright">
            <Image src={ChemEngWiki} style="width:30px;height:30px;"
            des="ChemEng Wiki" />
          </div>
        </div>
        <p>In January 2020, a Student-Led Chem Eng Wiki was trialled and rolled out for second-year students to review, reflect and discuss the material 
            taught in lectures within a virtual space. The Wiki was first developed by Pierre Walker and <b>Thomas Nok Cheng</b> with progressive 
            support from staff.  It was aimed at consolidating course content into a single location to make it easier for students to retrieve information and to 
            better understand how modules are aligned to achieve overall learning outcomes. </p>
          <p>One primary goal of the Wiki is to increase cohort-building within the student community and facilitate a larger proportion of students who can meet virtually to share resources within a common space; this can transcend the boundaries of peer and academic groups.  
            This can help meet several challenges brought about by Imperial’s move to multi-mode teaching in the upcoming academic year by offering increased support to our students who may be geographically distributed across several time zones.  
            The aim here would be to minimise isolated student experiences by promoting collaborative learning through virtual peer interactions, which can further enhance student engagement and learning experiences.</p>
          <p> With overwhelming support from the trial-run last academic year, we are currently expanding the Wiki to other years, with more student-created content. The second iteration of the wiki, released in October 2020,
            contained over 4500 pages of notes covering over 30 modules thanks to the effort from a development team of 13 students.
          </p>
          <br></br>
          <br></br>
          <h3>Student feedback </h3>
          <p>”Because the wiki is student-led, I think it is a good stand-alone resource as the student representation of the courses and learn from others how to take in the material better. Also, I think because of how concise it is, it is better than googling a particular topic and end up finding a bunch of irrelevant information. In a way, it is very Imperial-like.”</p>
          <p>”I found it was much easier to search through particular topics on ChemEng Wiki than having to go back to normal usual lecture notes. It was easier to navigate through and because of how well put together it is, I think it is good as a supplement when revising, to supplement your notes.”  </p>
            <Image src= {survey}
            des="Recent survey on the usage of ChemEng Wiki; *: Survey results from 83 students from first-, second- and third-year cohort
            "/>
        <br></br>
        <br></br>
        <h3>Screenshots</h3>
        
      <div className="u-block">
        <div className="u-flex">
        <div className="home-flexleft">
            <Image src={wiki2}
            des="Notes of Process Dynamics and Control" />
        </div>
        <div className="home-flexright">
          <Image src={wiki}
          des="Summary of fluidized bed reactor section from the Reaction Engineering II module" />
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
      <h3>More information</h3>
      <a href="https://www.imperial.ac.uk/chemical-engineering/courses/undergraduate/remote-learning-and-teaching/technology-enhanced-remote-teaching/">
        Technology enhanced remote teaching - Department of Chemical Engineering, Imperial College London</a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1>Imperial CREATE Labs</h1>
      <p align="center"><iframe id="player" type="text/html" width="640" height="390"
      src="https://www.youtube.com/embed/51TflyqBSM8"
      frameborder="0"></iframe></p>
      <h4 >CREATE Lab, which stands for Chemeng Remote Experience Augmented through TEchnology Lab, is part of our work to convert traditional teaching lab facilities to a novel modular lab approach, where students will be able to perform the majority of lab-based projects remotely without compromising on key learning outcomes. 
        The CREATE Lab project is being led by students, for students, and encourages feedback and interaction from students that will influence its development in real-time.</h4>
      <p>More details</p> 
      <p><a href="https://www.imperial.ac.uk/chemical-engineering/courses/undergraduate/remote-learning-and-teaching/remote-labs/">
        CREATE Lab page</a></p>
      <p><a href="https://www.instagram.com/icchemengcreatelab/">
      CREATE Lab Instagram page</a></p>
      <p><a href="https://www.imperial.ac.uk/news/202013/labbased-teaching-reimagined-using-augmented-reality/">
      Article about the project</a></p>
      </div>
      </div>




    );
  }
}

export default Teaching;
