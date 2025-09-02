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
            <section className="skills-section py-5 px-3" id="skills">

                <div className="text-center text-white mb-4">
                    <h2 className="mb-3">Skills</h2>
                    <p className="mx-auto" style={{ maxWidth: "800px" }}>My skills include HTML, CSS, JavaScript, and React, along with frameworks like Bootstrap and Tailwind for efficient styling. I also have experience in UI/UX design, allowing me to bridge the gap between functionality and aesthetics. I'm always eager to learn new technologies, improve my craft, and take on challenges that push me forward in my development journey.</p>
                </div>

                <div className="row justify-content-center">

                    <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                        <h3 className="text-white mb-2 text-lg-center">MY FOCUS</h3>
                        <hr className="text-white mb-3"></hr>
                        <p className="text-white fs-5">Frontend Development</p>
                        <p className="text-white fs-5">UI/UX Design</p>
                        <p className="text-white fs-5">Responsive Design</p>
                        <p className="text-white fs-5">Web Performance & Accessibility</p>
                        <p className="text-white fs-5">Cross-Platform Mobile Development</p>
                    </div>

                    <div className="col-12 col-lg-4">
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