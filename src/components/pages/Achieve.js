import React, { Component } from "react";

import "../../utilities.css";
import "./Achieve.css";

import TopBanner from "../modules/TopBanner.js";
import ImageFlex from "../modules/ImageFlex.js";

import ResumeBackground from "../../img/ACEX.jpg";
import {EducationList} from "../../data/Resume/Education.js";
import {ResearchList} from "../../data/Resume/Research.js";
import {TeachingList} from "../../data/Resume/Teaching.js";
import ResumePDF from "../../data/Resume/CV_2021_Feb.pdf";
import Coding from "../modules/Coding.js";
import CourseList from "../modules/CourseList.js";

class Achieve extends Component {
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
          background={ResumeBackground}
          title={<> <span className="achieve-highlight">Curriculum Vitae</span> and Achievements </>}
          content={<> This page contains my general background and skills.</>}
          // des="Taken in 2018 during final presentation of Year 1 Research Project.
          // The project aims to predict tumor growth by bayesian computations. A high
          // score of 98% is achieved in this project."
        />

        <div className="u-block">
        <h3>My Curriculum Vitae in PDF can be accessed <a href={ResumePDF}>here</a>. (Last updated: Feb 2021)</h3>
        <br></br>
          <h2> <b>Personal </b></h2>
        <h4>Name: Thomas Nok Hin Cheng</h4>
        <h4>Email:  <a href="mailto:nok.cheng18@imperial.edu">nok.cheng18@imperial.edu</a> (Imperial), <a href="mailto:nhcheng@mit.edu">nhcheng@mit.edu</a> (MIT)</h4>
        <h4>Phone: +44 (0) 79 4055 6145 (UK)</h4>
        <h4>Pronoun: he/him/his</h4>
          <br></br>
        <h2> <b>Research Interests </b></h2>
            <li>Organoid</li>
            <li>Systems Biology</li>
            <li>Microbiome</li>
            <li>Immunology</li>
            <li>Drug Delivery</li>
            <li>Statistical Physics</li>
            <li>Biophysics</li>
            <li>Nanomedicine</li>
          <br></br>
          <br></br>
          <h2> <b>Education </b></h2>
          {EducationList.map((item) => { return (
              <ImageFlex key={item.key} imageandDes={item}/>)
            })}
                    <br></br>
          <h2> <b>Research Experience </b> </h2>
          {ResearchList.map((item) => { return (
              <ImageFlex key={item.key} imageandDes={item}/>)
            })}
                    <br></br>
          <h2> <b>Teaching and Pedagogical Experience </b> </h2>
          {TeachingList.map((item) => { return (
              <ImageFlex key={item.key} imageandDes={item}/>)
            })}
        </div>
        <br></br>
        <div className="u-block">
          <h2> <b>Publications </b></h2>
          <h3> <b>Introducing students to research codes: A short course on solving partial differential equations in Python</b> </h3>
            <h3> Pavan Inguva, Vijesh J. Bhute, <b>Thomas N.H.Cheng</b>, Pierre J. Walker</h3>
            <p> <a href="https://www.sciencedirect.com/science/article/pii/S1749772821000117">Education for Chemical Engineers</a>, 2021</p>
            <br></br>
          <h3> <b>Protein purification with nanoparticle-enhanced crystallisation</b> </h3>
            <h3> Wenqian Chen, <b>Thomas NH Cheng</b>, Liang Fa Khaw, Xiaoyu Li, Huaiyu Yang, Jinbo Ouyang, Jerry YY Heng </h3>
            <p> <a href="https://www.sciencedirect.com/science/article/pii/S138358662031858X">Separation and Purification Technology</a>, 2021</p>
            <br></br>
          <h3> <b>Surface hydrophobicity: effect of alkyl chain length and network homogeneity </b></h3>
                      <h3> Wenqian Chen, Vikram Karde, <b>Thomas NH Cheng</b>, Siti S Ramli, Jerry YY Heng </h3>
          <p> <a href="https://link.springer.com/article/10.1007/s11705-020-2003-0">Frontiers of Chemical Science and Engineering</a>, 2020</p>
          <br></br>
          <h3> <b>Computational Analysis of the Solid‐State and Solvation Properties of Carbamazepine in Relation to its Polymorphism</b> </h3>
            <h3> Ian Rosbottom, <b>Thomas NH Cheng</b>, Jerry YY Heng </h3>
            <p> <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ceat.202000056">Chemical Engineering & Technology</a>, 2020</p>
        </div>
        <br></br>
        <div className="u-block">
          <h2> <b>Conferences </b></h2>
          <h3> <b>The use and value of a student-led Wiki towards facilitating peer collaboration in Chemical Engineering</b> </h3>
            <h3> Pierre J. Walker*, <b>Thomas N.H.Cheng*</b>, Masha Maraj</h3>
            <p> Advanced HE 2021 STEM Conference, 2021</p>
        </div>
        <br></br>
        <div className="u-block">
          <h2> <b>Awards </b></h2>
          <h3> <b>Procter and Gamble Prize</b> </h3>
            <h3> 2020</h3>
            <p> Awarded to the top student of the year in 2nd Year Chemical Engineering</p>
            <br></br>
          <h3> <b>Second Year Dean’s List</b> </h3>
            <h3> 2020 </h3>
            <p> Ranking in the top 10 % in the year for 2nd Year Chemical Engineering</p>
            <br></br>
          <h3> <b>Institution of Chemical Engineers Books Prize </b></h3>
            <h3> 2019 </h3>
          <p> Awarded to the top student of the year in 1st Year Chemical Engineering </p>
          <br></br>
          <h3> <b>First Year Dean’s List</b> </h3>
            <h3> 2019 </h3>
            <p>  Ranking in the top 10 % in the year for 1st Year Chemical Engineering </p>
        </div>
        <br></br>

        <div className="u-block">
          <h2><b>Skills and Interests</b></h2>

          <h3> <b>Laboratory </b></h3>
            <li>Confocal Microscopy</li>
            <li>Flow Cytometry</li>
            <li>Cell Culture</li>
            <li>Protein Crystallization</li>
            <li>Spectroscopy (UV-Vis)</li>
            <br></br>
            <h3> <b>Languages </b></h3>
            <p>  <b> Native Proficiency: </b> Cantonese, Mandarin  </p>
            <p> <b> Full Professional Proficiency: </b> English </p>
            <p> <b> Professional Working Proficiency: </b> Japanese </p>
            <br></br>
          <h3> <b>Coding Skills </b></h3>
          <div> <Coding /> </div>
        </div>
        <br></br>
        <div className="u-block">
          <h2> <b>Courses Taken </b></h2>
        </div>
        <CourseList />
        <div className="u-block">
        <h4> * Curriculum consisted of compulsory courses only </h4>
        </div>
      </div>
    );
  }
}

export default Achieve;
