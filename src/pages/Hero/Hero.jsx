import React from "react";
import "./Hero.css"
import MyButton from "../../components/Button/Button";



class Hero extends React.Component {
    constructor() {
        super()

    }


    render() {

        return (
            <section className="hero text-white" id="hero">
                <h1>Tasneem Abdelrazek</h1>
                <p className="fs-2">Front-End Developer</p>
                <MyButton btnTitle="CONTACT ME"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "https://wa.me/201030354268";
                            link.target = "_blank";
                            link.click();
                        }} />
            </section>
        )
    }
}

export default Hero