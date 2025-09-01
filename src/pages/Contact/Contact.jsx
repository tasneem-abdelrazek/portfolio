import React from "react";
import "./Contact.css"


class Contact extends React.Component {
    constructor() {
        super()

    }



    render() {

        return (
            <section className="contact-section" id="contact">

                <div className="contact-top text-center text-white">
                    <h2>Contact Me</h2>
                    <p className="mb-4">Feel free to reach out via email, phone, or connect on social media</p>
                </div>

                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    {/* Email */}
                    <a href="mailto:tasneem.ar.work@gmail.com" className="btn btn-outline-primary">
                        <i className="fa fa-envelope me-2"></i>Email
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/201030354268" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">
                        <i className="fa-brands fa-whatsapp me-2"></i>WhatsApp
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/tasneem-abdelrazek" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info">
                        <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/tasneem-abdelrazek" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                        <i className="fa-brands fa-github me-2"></i>GitHub
                    </a>
                </div>

            </section>
        )

    }
}

export default Contact