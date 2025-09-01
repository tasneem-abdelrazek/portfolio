import React from "react";
import "./About.css"
import Title from "../../components/Title/Title";
import MyButton from "../../components/Button/Button";


class About extends React.Component {
    constructor() {
        super()

    }



    render() {

        return (
            <section className="d-flex align-items-baseline flex-column flex-lg-row px-2" id="about">
                <Title TitleContent="About me" />

                <div className="about-content pb-4">
                    <p className="mb-5">I'm a passionate Front-End Developer with a strong foundation in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into interactive digital experiences, focusing on clean design, performance, and accessibility. I've also trained in UI/UX design using Figma and enhanced my skills through scholarships, including the Education for Employment (EFE) - Egypt Full Stack (Node.js) track, the Digital Egypt Pioneers Initiative (React Front-End) track, and the ITI 4-month program in Front-End & Cross-Platform Mobile Development.</p>
                    <MyButton btnTitle="Download Resume"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/Tasneem_Abdelrazek_Resume.pdf";
                            link.download = "Tasneem-Abdelrazek-Frontend-Resume.pdf";
                            link.click();
                        }} />
                </div>
            </section>
        )

    }
}

export default About