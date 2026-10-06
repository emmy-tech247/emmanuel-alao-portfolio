import React from 'react';
import './Skills.css';

import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillSubtitle">MY EXPERTISE</span>

            <h2 className="skillTitle">
                What I <span>Do</span>
            </h2>

            <p className="skillDesc">
                I build modern, responsive, secure, and scalable digital
                solutions for individuals, startups, and businesses. From
                engaging frontend experiences to powerful backend systems,
                I focus on creating products that are reliable, easy to use,
                and built to solve real business problems.
            </p>

            <div className="skillBars">

                {/* Web Development */}
                <div className="skillBar">
                    <div className="skillIconWrapper">
                        <img
                            src={WebDesign}
                            alt="Web Development"
                            className="skillBarImg"
                        />
                    </div>

                    <div className="skillBarText">
                        <h3>Full-Stack Web Development</h3>

                        <p>
                            I develop professional websites and web
                            applications using modern frontend and backend
                            technologies. I build responsive interfaces,
                            secure APIs, authentication systems, databases,
                            dashboards, and business management platforms.
                        </p>

                        <div className="skillTags">
                            <span>React</span>
                            <span>Next.js</span>
                            <span>JavaScript</span>
                            <span>PHP</span>
                            <span>Laravel</span>
                        </div>
                    </div>
                </div>

                {/* UI/UX */}
                <div className="skillBar">
                    <div className="skillIconWrapper">
                        <img
                            src={UIDesign}
                            alt="UI UX Design"
                            className="skillBarImg"
                        />
                    </div>

                    <div className="skillBarText">
                        <h3>UI/UX & Responsive Design</h3>

                        <p>
                            I create clean, intuitive, and responsive
                            interfaces designed to provide a smooth experience
                            across desktops, tablets, and mobile devices.
                            I combine usability, visual hierarchy, and modern
                            design principles to create interfaces users enjoy.
                        </p>

                        <div className="skillTags">
                            <span>Figma</span>
                            <span>Canva</span>
                            <span>Adobe XD</span>
                            <span>Framer</span>
                            
                        </div>
                    </div>
                </div>

                {/* Mobile / Applications */}
                <div className="skillBar">
                    <div className="skillIconWrapper">
                        <img
                            src={AppDesign}
                            alt="Application Development"
                            className="skillBarImg"
                        />
                    </div>

                    <div className="skillBarText">
                        <h3>Web & Mobile Applications</h3>

                        <p>
                            I develop functional applications that connect
                            users, businesses, databases, and services.
                            From business platforms and management systems to
                            mobile applications, I focus on performance,
                            security, maintainability, and scalability.
                        </p>

                        <div className="skillTags">
                            <span>Android Studio</span>
                            <span>React Native</span>
                            <span>Flutter</span>
                            <span>Expo</span>
                            <span>SQLite</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;