import React from 'react';
import './Intro.css';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">

                <span className="hello">Hello, I'm</span>

                <h1 className="introText">
                    <span className="introName">
                        EMMANUEL JAMES ALAO
                    </span>
                    <br />
                    Full-Stack Web Developer
                </h1>

                <p className="introPara">
                    I build modern, responsive, secure, and business-focused
                    web applications that help businesses turn ideas into
                    reliable digital solutions.
                </p>

                <p className="introSkills">
                    React · Next.js · PHP · Laravel · Python · Django ·
                    MySQL · PostgreSQL
                </p>

                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    <button className="btn">
                        <img
                            src={btnImg}
                            alt="Hire me"
                            className="btnImg"
                        />
                        Start a Project
                    </button>
                </Link>

            </div>
        </section>
    );
};

export default Intro;