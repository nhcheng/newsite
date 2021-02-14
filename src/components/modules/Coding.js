import React, { Component } from "react";

import "../../utilities.css";
import "./Coding.css";

import aspen from "../../img/logo/skills/Aspen.png";
import gproms from "../../img/logo/skills/gproms.png";
import julia from "../../img/logo/skills/julia.png";
import matlab from "../../img/logo/skills/matlab.png";
import GAMS from "../../img/logo/skills/GAMS.png";
import python from "../../img/logo/skills/python.png";
import rlang from "../../img/logo/skills/R.png";
import pymol from "../../img/logo/skills/Pymol.png";
import gromacs from "../../img/logo/skills/gromacs.png";

const sciComp = [
    {lang: "MATLAB", src: matlab},
    {lang: "Python", src: python},
    {lang: "R", src: rlang},
    {lang: "Julia", src: julia},
]

const webDev = [
    {lang: "GROMACS", src: gromacs},
    {lang: "PyMOL", src: pymol},
    {lang: "ASPEN", src: aspen},
    {lang: "gPROMS", src: gproms},
    {lang: "GAMS", src: GAMS},
]

class CodingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
        return (
            <div className="coding-card">
                <img src={this.props.langObj.src} className="coding-fig" />
                <div className="coding-des"> {this.props.langObj.lang} </div>
            </div>
        )
    }
}

class Coding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
      <div className="coding-block">
        <div className="coding-title"> <h3 className="u-nomargin"> Scientific Computing </h3> </div>
        <div className="u-flex coding-container"> 
            {sciComp.map( (item,i) => { return (
                <CodingCard key={i} langObj={item} />
            )})}
        </div>
        </div>
      <div className="coding-block">
        <div className="coding-title"> <h3 className="u-nomargin"> Research Software </h3> </div>
        <div className="u-flex coding-container"> 
        {webDev.map( (item,i) => { return (
                <CodingCard key={i} langObj={item} />
            )})}
        </div>
        </div>
      </>
    );
  }
}

export default Coding;