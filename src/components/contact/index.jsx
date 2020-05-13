import React from 'react';

import './contact.style.scss';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-me">
                <p className="contact-intro">Hey, have something for me? Hit me up!</p>
                <form action="" className="contact-form">
                    <label htmlFor="fname">Your Name</label><br/>
                    <input type="text" id="fname" name="fname" min="4" className="form-item" autoComplete="fname" required /> <br/>
                    <label htmlFor="email">Your Email Address</label><br/>
                    <input type="email" id="email" name="email" className="form-item" autoComplete="email" required /><br/>
                    <label htmlFor="message">Your Message</label><br/>
                    <textarea name="message" id="message" cols="30" rows="10" className="form-item"></textarea><br/>
                    <button type="submit" className="submit" >Send Message</button>
                </form>
            </div>
            
        </section>
    )
}

export default Contact;