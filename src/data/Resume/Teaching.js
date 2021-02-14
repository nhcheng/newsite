import React, { Component } from "react";

import "../../utilities.css"

import mitLogo from "../../img/logo/institutes/MIT-logo-red-gray-72x38.svg";
import imperialLogo from "../../img/logo/institutes/IMP_ML_1CS_4CP.png";
import logosLogo from "../../img/logo/institutes/logosAcademy.jpg";
import chemeng from "../../img/chemeng.jpg";
import icu from "../../img/icu.png";

const TeachingList = [
    {
        key: "Imperial",
        image: chemeng,
        title: "Chemical Engineering Wiki - Department of Chemical Engineering, Imperial College London",
        titledes: "Co-founder/Student Partner",
        titleright: "January 2020 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Co-initiated and maintained a student-led wiki to help Chemical Engineering undergraduates with student-created notes </li>
                <li> For more information, please visit this page </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "MIT",
        image: mitLogo,
        title: "Social Determinants of Health and Systemic Racism in Healthcare - MIT Splash 2020",
        titledes: "Teacher",
        titleright: "November 2020",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Co-taught a class to over 30 motivated high school students to raise awareness on global health equity</li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: chemeng,
        title: "Undergraduate Teaching Laboratory - Department of Chemical Engineering, Imperial College London",
        titledes: "Undergraduate Teaching Assistant",
        titleright: "June 2020 - August 2020",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Developed teaching materials for remote teaching during the COVID-19 pandemic, including a partial differential equations course
                        and laboratory modules enabled with augmented reality </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: icu,
        title: "Imperial College Union - Imperial College London",
        titledes: "Chemical Engineering Year Two Academic Representative",
        titleright: "June 2019 - June 2020",
        content: (<> 
            <ul className="u-nomargin"> 
                <li>  Introduced academic-focused initiatives including a question forum for cohort and answered over 1,000+ questions and held tutoring
                    sessions for peers in academic need, during semester and the COVID-19 pandemic </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: imperialLogo,
        title: "Pimlico Connection - Imperial College London",
        titledes: "Tutor",
        titleright: "October 2019 - March 2020",
        content: (<> 
            <ul className="u-nomargin"> 
                <li>  Taught STEM subjects at local secondary school weekly to improve the academic knowledge, 
                    confidence and interest of underprivileged pupils, whilst giving them an insight into university life </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: chemeng,
        title: "Student Shaper - Imperial College London",
        titledes: "Student Partner",
        titleright: "January 2019 - April 2019",
        content: (<> 
            <ul className="u-nomargin"> 
                <li>  In partnership with lecturer to implement new learning technologies </li>
            </ul>
            </>),
        remark: ""
    },
]

export {mitLogo, imperialLogo, logosLogo, TeachingList}