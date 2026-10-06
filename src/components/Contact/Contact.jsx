import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';

const Contact = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_51r4dxs',
                'template_a8tsz79',
                form.current,
                'dDOOd7A-QIa6PQSra'
            )
            .then(
                (result) => {
                    console.log('Email sent:', result.text);

                    e.target.reset();

                    alert(
                        'Thank you! Your message has been sent successfully.'
                    );
                },
                (error) => {
                    console.error('EmailJS error:', error);

                    alert(
                        'Sorry, your message could not be sent. Please try again.'
                    );
                }
            );
    };

    return (
        <section id="contactPage">

            <div id="contact">

                <h1 className="contactPageTitle">
                    Contact Me
                </h1>

                <span className="contactDesc">
                    Have a project in mind? Send me a message and
                    let&apos;s discuss how I can help bring your idea
                    to life.
                </span>

                <form
                    className="contactForm"
                    ref={form}
                    onSubmit={sendEmail}
                >

                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        name="from_name"
                        required
                    />

                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        name="from_email"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="msg"
                        required
                    />

                    <button
                        type="submit"
                        className="submitBtn"
                    >
                        Send Message
                    </button>

                    <div className="links">

                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={facebookIcon}
                                alt="Facebook"
                                className="link"
                            />
                        </a>

                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={twitterIcon}
                                alt="Twitter"
                                className="link"
                            />
                        </a>

                        <a
                            href="https://youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={youtubeIcon}
                                alt="YouTube"
                                className="link"
                            />
                        </a>

                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={instagramIcon}
                                alt="Instagram"
                                className="link"
                            />
                        </a>

                    </div>

                </form>

            </div>

        </section>
    );
};

export default Contact;