import React, { Component } from "react";

import "../../utilities.css"

import mitLogo from "../../img/logo/institutes/MIT-logo-red-gray-72x38.svg";
import imperialLogo from "../../img/logo/institutes/IMP_ML_1CS_4CP.png";
import logosLogo from "../../img/logo/institutes/logosAcademy.jpg";

const ResearchList = [
    {
        key: "MIT",
        image: mitLogo,
        title: "Shalek Lab - Institute for Medical Engineering & Science (IMES)",
        titledes: "Undergraduate Research and Innovation Scholar",
        titleright: "September 2020 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Led the effort to develop compressed drug screening technologies on biological ligands and the modelling of ligand pools.</li>
                <li> Project description: <a href="https://superurop.mit.edu/scholars/thomas-cheng/">https://superurop.mit.edu/scholars/thomas-cheng/</a> </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: imperialLogo,
        title: "Chen's Group - Centre for Advanced Therapeutics",
        titledes: "Undergraduate Research Assistant",
        titleright: "November 2019 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Studied, prepared and characterized drug encapsulation with erythrocytes derived vesicles </li>
                <li> Initiated and directed computational studies on pH responsive bio-polymer PLP-NDA resulting in a manuscript in preparation </li>
                <li> Co-supervised five Chemical Engineering undergraduates on the interactions between cell membrane and variants of PLP-NDA </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: imperialLogo,
        title: "Heng's Group - Institute for Molecular Science and Engineering (IMSE)",
        titledes: "Undergraduate Research Assistant",
        titleright: "June 2019 - June 2020",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Computationally verified and investigated solvent-dependent polymorphism of anti-epileptic drug Carbamazepine </li>
                <li> Investigated the effect of nanoparticles in inducing Lysozyme crystallization for bio-separation using UV-Vis spectroscopy </li>
            </ul>
            </>),
        remark: ""
    },
]

export {mitLogo, imperialLogo, logosLogo, ResearchList}