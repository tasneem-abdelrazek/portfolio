import React from "react";
import "./Portfolio.css"
import Title from "../../components/Title/Title";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";


class Portfolio extends React.Component {
    constructor() {
        super()

    }


    render() {

        const projects = [
            { title: "Portfolio (React Native)", demoLink: "https://snack.expo.dev/@tasneemabdelrazek/portfolio", githubLink: "https://github.com/tasneem-abdelrazek/portfolio-react-native" },
            { title: "Portfolio", demoLink: "https://portfolio-six-delta-82.vercel.app/", githubLink: "https://github.com/tasneem-abdelrazek/portfolio" },
            { title: "Forever", demoLink: "https://forever-e-commerce-six.vercel.app/", githubLink: "https://github.com/tasneem-abdelrazek/forever-e-commerce" },
            { title: "Decoration Services", demoLink: "https://ahmed-ali-1cgb.vercel.app/", githubLink: "https://github.com/tasneem-abdelrazek/ahmed-ali" },
            { title: "Movies", demoLink: "https://movie-app-lemon-xi-44.vercel.app/", githubLink: "https://github.com/tasneem-abdelrazek/movie-app" },
            { title: "Hosto", demoLink: "https://tasneem-abdelrazek.github.io/hosto/", githubLink: "https://github.com/tasneem-abdelrazek/hosto" },
            { title: "ToTasky", demoLink: "https://tasneem-abdelrazek.github.io/totasky-landing-page/", githubLink: "https://github.com/tasneem-abdelrazek/totasky-landing-page" },
            { title: "CRUD App", demoLink: "https://tasneem-abdelrazek.github.io/crud-operations/", githubLink: "https://github.com/tasneem-abdelrazek/crud-operations" },
            { title: "Dashboard", demoLink: "https://tasneem-abdelrazek.github.io/dashboard-template/", githubLink: "https://github.com/tasneem-abdelrazek/dashboard-template" },
            { title: "To Do List", demoLink: "https://tasneem-abdelrazek.github.io/to-do-list-app/", githubLink: "https://github.com/tasneem-abdelrazek/to-do-list-app" },
            { title: "Monac", demoLink: "https://tasneem-abdelrazek.github.io/monac/", githubLink: "https://github.com/tasneem-abdelrazek/monac" },
            { title: "Wizard", demoLink: "https://tasneem-abdelrazek.github.io/wizardz/", githubLink: "https://github.com/tasneem-abdelrazek/wizardz" },
            { title: "Coffee", demoLink: "https://tasneem-abdelrazek.github.io/coffee-shop/", githubLink: "https://github.com/tasneem-abdelrazek/coffee-shop" },
            { title: "Students (GitHub only)", githubLink: "https://github.com/tasneem-abdelrazek/students-management-crud-firebase" },
            { title: "Notes (GitHub only)", githubLink: "https://github.com/tasneem-abdelrazek/notes-app" },
            { title: "Products (GitHub only)", githubLink: "https://github.com/tasneem-abdelrazek/node-products" },
        ];


        return (
            <section id="portfolio">
                <Title TitleContent="Portfolio" />
                <div className="container">
                    <div className="row g-4 py-4">
                        {projects.map((project, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <PortfolioCard
                                    title={project.title}
                                    demoLink={project.demoLink}
                                    githubLink={project.githubLink}
                                    isDark={index % 2 === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )

    }
}

export default Portfolio