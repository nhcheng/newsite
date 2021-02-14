import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Research.css";
import TopBanner from "../modules/TopBanner.js";
import Image from "../modules/Image.js";
import tracyWidom from "../../img/tracywidom.png";
import Predictive from "../../img/PredictiveNew.png";
import Diffusion from "../../img/Diffusion_Comparison.png";
import mathBackground from "../../img/ACEX.jpg";

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
          title={<><span 
          className="math-banner-highlight"> Research </span> </>}
          content="In Progress"
          des={<></>}
        />
      </div>
    );
  }
}

export default Research;
