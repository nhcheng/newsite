import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Research.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js";
import polymer_blend from "../../img/polymer_blend.jpg";
import nanoparticle from "../../img/nanoparticle.jpg";
import contact_angle from "../../img/contact_angle.png";
import mathBackground from "../../img/ACEX.jpg";
import solvation from "../../img/solvation.jpg";

class Research extends Component {
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
          background={mathBackground}
          title={<> <span 
          className="highlight"> Publications </span> </>}
          content="“To get to know, to discover, to publish - this is the destiny of a scientist.” - Francois Arago"
          // des={<> Samples from brownian bridge. The <i>Empirical Central Limit 
          //   Theorem</i> reveals that empirical process converges weakly to brownian 
          //   bridge as size of sample increases. Taken from 18.675 final paper with Shawn Im. </>}
        />
      <div className="u-block">
          <h3> Please visit <a href="https://scholar.google.com/citations?user=UqiLPw4AAAAJ&hl=en&authuser=1">this</a> page for my google scholar profile. </h3> 
      </div>
      <div className="u-block">
        <div className="research-grid">
          <div className="research-first-left">
            <Image src={polymer_blend}
            des="Polymer blend demixing modelled with Cahn-Hilliard equation" />
          </div>
          <div className="research-first-right">
            <h3> <b>Introducing students to research codes: A short course on solving partial differential equations in Python</b> </h3>
            <h3> Pavan Inguva, Vijesh J. Bhute, <b>Thomas N.H. Cheng</b>, Pierre J. Walker</h3>
            <p> <a href="https://www.sciencedirect.com/science/article/pii/S1749772821000117">Education for Chemical Engineers</a>, 2021</p>
          </div>
          <div className="research-second-left">
            <h3> <b>Protein purification with nanoparticle-enhanced crystallisation</b> </h3>
            <h3> Wenqian Chen, <b>Thomas NH Cheng</b>, Liang Fa Khaw, Xiaoyu Li, Huaiyu Yang, Jinbo Ouyang, Jerry YY Heng </h3>
            <p> <a href="https://www.sciencedirect.com/science/article/pii/S138358662031858X">Separation and Purification Technology</a>, 2021</p>
          </div>
          <div className="research-second-right">
            <Image src={nanoparticle}
            des="SEM images of silica nanoparticle" />
          </div>
          <div className="research-third-left">
            <Image src={contact_angle}
            des="Water contact angle for pristine and modified nanoparticles" />
          </div>
          <div className="research-third-right">
            <h3> <b>Surface hydrophobicity: effect of alkyl chain length and network homogeneity </b></h3>
                        <h3> Wenqian Chen, Vikram Karde, <b>Thomas NH Cheng</b>, Siti S Ramli, Jerry YY Heng </h3>
            <p> <a href="https://link.springer.com/article/10.1007/s11705-020-2003-0">Frontiers of Chemical Science and Engineering</a>, 2020</p>
          </div>
          <div className="research-fourth-left">
            <h3> <b>Computational Analysis of the Solid‐State and Solvation Properties of Carbamazepine in Relation to its Polymorphism</b> </h3>
            <h3> Ian Rosbottom, <b>Thomas NH Cheng</b>, Jerry YY Heng </h3>
            <p> <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ceat.202000056">Chemical Engineering & Technology</a>, 2020</p>
          </div>
          <div className="research-fourth-right">
            <Image src={solvation}
            des="Solvation of anti-epilepsy drug Carbamazepine in different solvent clusters" />
          </div>
        </div>
        
        {/* <div>
            <h3> Dynamical Systems and Stochastic Analysis </h3>
            <p> I have always been astonished by the relationship between deterministic differential equations and Stochastic Differential Equations (SDE). 
            The classical formulae of Dynkin and Feynman-Kac had helped us to study the quantitative behaviors of solutions to differential equations. 
            Recent studies revealed that chaotic systems like the Lorenz system behave like random walks. This motivates me to study how one can construct 
            dynamical systems that have similar behavior as solutions of SDE, and how could we exploit this relation in proving estimates for dynamical systems. 
            I am also drawn to understanding the behavior of return maps of chaotic systems.
            </p>
          </div> */}
          {/* <div>
            <Image src={Diffusion}
              des="(Left) Numerical solutions of pure diffusion and advection-diffusion by finite difference scheme.
              (Right) Comparison of L2 energy of solutions of pure diffusion and advection-diffusion. The L2 energy
              decay at a faster rate under the inflence of advection flow. My second year UROP studies how rate of
              decay varies with the nature of flow." />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Research;
