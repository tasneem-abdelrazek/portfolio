import React from "react";
import "./PortfolioCard.css"


class PortfolioCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, demoLink, githubLink, isDark } = this.props;

        return (
                <section className={`portfolio-card ${isDark ? "dark" : "light"} text-center`}>
                    <h3 className="mb-3">{title}</h3>
                    <div className="d-flex justify-content-center gap-3">
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-sm"
                        >
                            <i class="fa-solid fa-desktop me-2"></i>Demo
                        </a>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-sm"
                        >
                            <i className="fa-brands fa-github me-2"></i>GitHub
                        </a>
                    </div>
                </section>

            )
    }
}

export default PortfolioCard