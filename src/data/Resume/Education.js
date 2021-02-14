import React, { Component } from "react";

import "../../utilities.css"

import mitLogo from "../../img/logo/institutes/MIT-logo-red-gray-72x38.svg";
import imperialLogo from "../../img/logo/institutes/IMP_ML_1CS_4CP.png";
import logosLogo from "../../img/logo/institutes/logosAcademy.jpg";

const EducationList = [
    {
        key: "MIT",
        image: mitLogo,
        title: "Massachusetts Institute of Technology",
        titledes: "Exchange Student (Junior/Third Year)",
        titleright: "September 2020 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Concentration: Chemical Engineering (Course X), Biological Engineering (Course VII), Health Sciences and Technology</li>
                <li> Fall and IAP Results: GPA 5.0/5.0 </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: imperialLogo,
        title: "Imperial College London",
        titledes: "MEng Chemical Engineeirng with a Year Abroad",
        titleright: "October 2018 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Freshman/First Year Results: Top of the Year, First honor and Dean's List </li>
                <li> Sophomore/Second Year Results: Top of the Year, First honor and Dean's List </li>
            </ul>
            </>),
        remark: ""
    },
]

export {mitLogo, imperialLogo, logosLogo, EducationList}