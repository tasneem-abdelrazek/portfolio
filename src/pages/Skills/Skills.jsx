import React from "react";
import "./Skills.css"
import ProgressBar from "../../components/ProgressBar/ProgressBar";


class Skills extends React.Component {
    constructor() {
        super()

    }


    render() {

        const skills = [
            { skill: "HTML", level: 90 },
            { skill: "CSS", level: 90 },
            { skill: "JavaScript", level: 70 },
            { skill: "React", level: 85 },
            { skill: "Bootstrap", level: 80 },
            { skill: "Tailwind", level: 80 },
            { skill: "Sass", level: 60 },
            { skill: "JQuery", level: 50 },
            { skill: "TypeScript", level: 65 },
            { skill: "Git & GitHub", level: 70 },
            { skill: "Figma", level: 60 },
        ];


        return (
            <section className="skills-section" id="skills">

                <div className="skills-top text-center text-white">
                    <h2>Skills</h2>
                    <p>My skills include HTML, CSS, JavaScript, and React, along with frameworks like Bootstrap and Tailwind for efficient styling. I also have experience in UI/UX design, allowing me to bridge the gap between functionality and aesthetics. I'm always eager to learn new technologies, improve my craft, and take on challenges that push me forward in my development journey.</p>
                </div>

                <div className="skills-div d-flex justify-content-center flex-column flex-lg-row">

                    <div className="skills-left">
                        <h3 className="text-white text-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MY FOCUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                        <hr className="text-white"></hr>
                        <p className="text-white px-3 text-center text-lg-start fs-4">Frontend Development</p>
                        <p className="text-white px-3 text-center text-lg-start fs-4">UI/UX Design</p>
                        <p className="text-white px-3 text-center text-lg-start fs-4">Responsive Design</p>
                        <p className="text-white px-3 text-center text-lg-start fs-4">Web Performance & Accessibility</p>
                        <p className="text-white px-3 text-center text-lg-start fs-4">Cross-Platform Mobile Development</p>
                    </div>

                    <div className="skills-right">
                        {skills.map((item, index) => (
                            <ProgressBar key={index} skill={item.skill} level={item.level} />
                        ))}
                    </div>

                </div>

            </section>
        )

    }
}

export default Skills