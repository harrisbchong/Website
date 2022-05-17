import React from 'react';
import './HeroSection.css';
import './AboutMe.css';
import resume from "./testpdf.pdf"

function AboutMe() {
    return (
        /* introduction
        location */
        <div className='section'>
            <h1>
                "INTRODUCTION"
            </h1>
            <p className='paragraph'>
                Hi!
                <br></br>
                <br></br>
                My name is <a className='text-link' href='https://www.linkedin.com/in/harrischong/'>Harris</a> and I am currently a first year student at the <b>University of Toronto</b> studying <b>Computer Science</b>
                , intending on a Software Engineering Specialist.
                <br></br>
                <br></br>
                I have recently found an interest in frontend development. I really enjoy learning and working on side projects as I am
                really interested in design, and I find that working on stuff in the frontend, like this website, can help exercise my creativity a lot more often.
                The backend is also quite fun since it comes with a whole new set of problems to solve and it heavily ties in to everything in the frontend.
                I have recently learned some <b>React, JavaScript, HTML, and CSS,</b> and I am excited to continue to deepen my knowledge of computer science.
            </p>
            <h1>
                "EXPERIENCES"
            </h1>
            <p className='paragraph'>
                In terms of coding experience, I have worked on many side projects which you can check out on the <b>Projects</b> page or on my <a className='text-link' href='https://github.com/harrisbchong' target='_blank'
                    rel="noreferrer">Github </a>where I explain the processes in depth.
                <br></br>
                <br></br>
                For work experience, during highschool I was able to do a co-op term at <a className='text-link' href='https://microartservices.com/' target='_blank' rel="noreferrer">Microart Services Inc</a>
                , where I was able to learn to work in a professional environment for the first time. I mostly did QA (Quality Assurnace) and QC (Quality Control), but I
                did have opportunities to program some firmware and play with Arduinos and Raspberry Pis.
                <br></br>
                <br></br>
                To learn more about my time at Microart Services Inc, as well as my other leadership and voluntering experiences, you can check out my <a className='text-link' href={resume} target='_blank' rel="noreferrer">Resume</a>.
            </p>
            <h1>
                "HOBBIES"
            </h1>
            <p className='paragraph'>
                In my free time I like to exercise and play sports like basketball, volleyball, and frisbee.
                When I'm not outside, I like to play videogames, sometimes play piano, and work on coding side projects
                to learn about different technologies.

            </p>


        </div>
    );
}

export default AboutMe;