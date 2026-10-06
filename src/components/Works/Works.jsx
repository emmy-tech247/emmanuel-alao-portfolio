import React from 'react';
import './Works.css';

import Portfolio1 from "../../assets/portfolio-1.PNG";
import Portfolio2 from "../../assets/portfolio-2.PNG";
import Portfolio3 from "../../assets/portfolio-3.PNG";
import Portfolio4 from "../../assets/portfolio-4.PNG";
import Portfolio5 from "../../assets/portfolio-5.PNG";
import Portfolio6 from "../../assets/portfolio-6.PNG";
import Portfolio7 from "../../assets/portfolio-7.PNG";
import Portfolio8 from "../../assets/portfolio-8.JPG";

const Works = () => {
    const projects = [
        {
            image: Portfolio1,
            number: '01',
            category: 'Web Application',
            title: 'Loan Management Platform',
            description:
                'A business-focused loan management platform designed to manage members, loan applications, repayments, staff workflows, financial records, and administrative operations.',
            technologies: ['Next.js', 'React', 'MySQL', 'TypeScript'],
        },
        {
            image: Portfolio2,
            number: '02',
            category: 'Real Estate Website',
            title: 'Premium Real Estate Website',
            description:
            'A modern and elegant real estate website designed to showcase properties beautifully, attract qualified buyers, highlight investment opportunities, and deliver a seamless property discovery experience across all devices.',
            technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript'],

        },
        {
            image: Portfolio3,
            number: '03',
            category: 'School Website',
            title: 'Modern School Website',
            description:
            'A modern and responsive school website designed to showcase academic programs, provide essential information for students and parents, highlight school activities, and create a professional digital presence for the institution.',
            technologies: ['React', 'Next.js', 'API', 'MySQL'],

        },
        {
            image: Portfolio4,
            number: '04',
            category: 'Portfolio Website',
            title: 'Professional Developer Portfolio',
            description:
            'A modern and responsive portfolio website designed to showcase professional skills, featured projects, technical expertise, and services while creating a strong personal brand and compelling online presence.',
            technologies: ['React', 'JavaScript', 'CSS', 'Responsive Design'],

        },
        {
           image: Portfolio5,
           number: '05',
           category: 'Restaurant Website',
           title: 'Modern Restaurant Website',
           description:
           'A stylish and responsive restaurant website designed to showcase the menu, highlight signature dishes, provide essential dining information, and create an engaging digital experience that encourages customers to visit and make reservations.',
           technologies: ['React', 'CSS', 'JavaScript', 'Bootstrap'],

        },
        {
            image: Portfolio6,
            number: '06',
            category: 'Loan Management System',
            title: 'Loan Management Platform',
            description:
            'A secure and comprehensive loan management system designed to streamline loan applications, member records, approvals, repayments, transactions, and administrative workflows through an intuitive and responsive digital platform.',
            technologies: ['PHP', 'HTML', 'JavaScript', 'MySQL'],

        },
         {
            image: Portfolio7,
            number: '07',
            category: 'Landing Page',
            title: 'High-Converting Landing Page',
            description:
            'A modern and responsive landing page designed to capture attention, communicate key value propositions clearly, showcase products or services, and guide visitors toward meaningful actions and conversions.',
            technologies: ['HTML', 'CSS', 'TypeScript', 'React'],

        },
        {
            image: Portfolio8,
            number: '08',
            category: 'Custom Website',
            title: 'Custom Business Website',
            description:
            'A fully customized website tailored to specific business goals, combining a polished visual experience, intuitive navigation, responsive design, and scalable functionality to deliver a strong and memorable digital presence.',
            technologies: ['Wordpress', 'plugin', 'MySQL'],

        },
    ];

    return (
        <section id="works">

            <div className="worksHeader">
                <span className="worksSubtitle">
                    SELECTED WORK
                </span>

                <h2 className="worksTitle">
                    Projects I&apos;ve <span>Built</span>
                </h2>

                <p className="worksDesc">
                    A selection of websites, web applications, dashboards,
                    and business solutions I have designed and developed.
                    Each project is built with a focus on usability,
                    performance, security, and real-world business needs.
                </p>
            </div>

            <div className="worksGrid">

                {projects.map((project) => (
                    <article
                        className="projectCard"
                        key={project.number}
                    >

                        <div className="projectImageWrapper">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="worksImg"
                            />

                            <div className="projectNumber">
                                {project.number}
                            </div>
                        </div>

                        <div className="projectContent">

                            <span className="projectCategory">
                                {project.category}
                            </span>

                            <h3>{project.title}</h3>

                            <p>
                                {project.description}
                            </p>

                            <div className="projectTags">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <button className="projectLink">
                                View Project
                                <span>↗</span>
                            </button>

                        </div>

                    </article>
                ))}

            </div>

            <button className="workBtn">
                View All Projects
                <span>↗</span>
            </button>

        </section>
    );
};

export default Works;