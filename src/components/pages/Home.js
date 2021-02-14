import React, { Component } from "react";

import "../../utilities.css";
import "./Home.css";
import { Link } from "@reach/router";
import TopBanner from "../modules/TopBanner.js";
import HomeBackground from "../../img/ACEX.jpg";
import MyAlert from "../modules/MyAlert.js"
import ChemEngWiki from "../../img/ChemEngWiki.png";
import Image from "../modules/Image.js";
import TNFa from "../../img/TNFa.png"

class Home extends Component {
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
          background={HomeBackground}
          // title="CHUN HEI SAMUEL LAM"
          title={(<b> <span className="home-banner-highlight"> Thomas </span> Nok Hin Cheng </b>)}
          content="I am a Third-year MEng undergraduate at
          Imperial College London (ICL) majoring in Chemical Engineering, with an exchange year at Massachusetts Institute
          of Technology (MIT)."
          // des="Taken in 2018 at the main entrance of Imperial College London.
          // Credit to Daniel Lo."
        />
        <div className="u-block"> 
        <MyAlert 
            alerttype="red"
            content="This webpage is currently in development."
          />
        </div>
        <div className="u-block">
            <h2> My goal...</h2>
            <p style={{margin: 0}}>
            My main goal is to develop new technologies to understand disease pathogenesis, and in particular those associated with inflammatory bowel disease (IBD), 
            and to translate these discoveries to targeted, accessible and affordable therapies.
            </p>
          </div>
        <br></br>
        <br></br>
        <div className="u-block">
        <div className="u-flex">
          <div className="home-flexleft">
            <h2> My research interest...</h2>
            <p style={{margin: 0}}>
            <h4> My primary research interest lies at the interface of biomedical science and chemical engineering. As an undergraduate researcher, I worked in the Heng’s Group to explore novel protein purification techniques and worked in the Chen’s Group to 
            develop new drug delivery methods using pH-responsive biopolymer. Currently, I am an Undergraduate Research and Innovation Scholar at the Shalek Lab 
            researching in high throughput drug screening and pheotype modelling in organoids.</h4>
            <h4>I am mainly interested in understanding these areas of biomedical science by applying principles in chemical engineering:</h4>
            </p>
            <ul>
              <li> <b> Mucosal Immunity </b> 
              </li>
              <li> <b> Human Microbioime </b> 
              </li> 
              <li> <b> Gut Biology </b> 
              </li> 
            </ul>
            <p> <Link to="/research"> Click here for more details about my research experiences. </Link> </p>
          </div>
          
          <div className="home-flexright">
            <Image src={TNFa} 
            des="The strcture of an inflammatory cytokine TNF-α. (Strcuture obtained from Protein Data Bank, rendered in PyMOL)" />
          </div>
        </div>
        </div>
        <br></br>
        <br></br>
        <div className="u-block">
        <div className="u-flex">
          <div className="home-flexleft">
            <h2> Outside academia...</h2>
            <p style={{margin: 0}}>
            <h4> I am also interested in how innovative pedagogical approaches can improve learning experience and outcome. 
          Elected as the academic representative of my year group, I introduced student-led pedagogical initiatives such as Chemical Engineering Wiki 
          and tutoring schemes in the hope of enhancing peer learning within the cohort. I am also part of the transformation of experiential learning 
          at the Department of Chemical Engineering using learning technologies such as HoloLens for Technologies-Enhanced Learning.</h4>
            <p> <Link to="/teaching"> Click here for more details about my teaching experiences. </Link> </p>
            <br></br>
            <>In my free time, I enjoy music (mainly playing piano), cycling and board games!</>
            </p>
          </div>

          
          <div className="home-flexright">
            <Image src={ChemEngWiki}
            des="ChemEng Wiki" />
          </div>
        </div>
        </div>


        </div>




        
    );
  }
}

export default Home;
