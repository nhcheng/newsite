import React, { Component } from "react";
import { Link } from "@reach/router";
import Institutes from "./Institutes.js";

import "../../utilities.css";
import "./BottomBanner.css";
import githubIcon from "../../img/icon/githubicon.png";
import linkedinIcon from "../../img/icon/linkedinicon.png";
import emailIcon from "../../img/icon/emailicon.png";
import googlescholarIcon from "../../img/icon/google-scholar--v2.png";
import twitterIcon from "../../img/icon/43-twitter-512.png";


class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact-item">
        <div className="contact-itemleft"> 
        <img src={this.props.src}/>
        </div>
        <div> {this.props.detail} </div>
      </div>
    )
  }
}



class BottomBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="bottombanner-container">
        <div className="bottombanner-left"> 
          <div className="bottombanner-leftmain">
            <div className="bottombanner-logo">
                {/* <div className="bottombanner-imperial"> </div>
                <div className="bottombanner-mit"> </div> */}
                <Institutes />
            </div>
            <div className="bottombanner-link">
                <Link to="/privacy">Privacy</Link> | <a href="https://accessibility.mit.edu/">Accessibility</a>
            </div>
          </div>
          <div className="bottombanner-description">
                The webpage is developed with the skeleton code provided by 
                the <a href="https://weblab.mit.edu/">MIT web.lab team</a>, and templates 
                by <a href="https://lochungtin.github.io/site/">Timothy Lo</a> and <a href="https://samuel-chlam.github.io/">Samuel Lam</a>. 
                The source code for this webpage is available in my GitHub.
          </div>
        </div>
        <div className="bottombanner-right"> 
            {/* Email:
            <ul>
                <li> Imperial: chun.lam18@imperial.ac.uk </li>
                <li> MIT: chunhei@mit.edu </li>
                <li> Others: sammuelchlam@gmail.com </li>
            </ul> */}
            <div> 
              <ContactItem src={googlescholarIcon} 
                detail={(<> <a href="https://scholar.google.com/citations?user=UqiLPw4AAAAJ&hl=en&authuser=1">Google Scholar</a> </>)}/>
              <ContactItem src={linkedinIcon} 
                detail={(<> <a href="https://www.linkedin.com/in/thomas-nok-cheng/">Linkedin</a> </>)}/>
              <ContactItem src={githubIcon} 
                detail={(<a href="https://twitter.com/nhcheng985">Twitter: @nhcheng985</a>)}/>
              <ContactItem src={twitterIcon} 
                detail={(<a href="https://github.com/nhcheng">Github: nhcheng</a>)}/>
              <ContactItem src={emailIcon} 
              detail={<>
                <div> <a href="mailto:nok.cheng18@imperial.edu">nok.cheng18@imperial.edu</a> (Imperial) </div>
                <div> <a href="mailto:nhcheng@mit.edu">nhcheng@mit.edu</a> (MIT) </div>
              </>}/>
            </div>
        </div>
      </div>
    );
  }
}

export default BottomBanner;