import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import swal from 'sweetalert'


const Contact = () => {
    const form = useRef();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');


    const handleUserName = (e) => {
        const getUserName = e.target.value;
        setUserName(getUserName);
    };
    const handleUserEmail = (e) => {
        const getUserEmail = e.target.value;
        setUserEmail(getUserEmail);
    };
    const handleUserMesage = (e) => {
        const getUserMessage = e.target.value;
        setUserMessage(getUserMessage);
    };

    const sendEmail = (e) => {
        console.log(`amder user name holo ${userName}, ${userEmail}, ${userMessage}`)
        swal({
            title: "Message",
            text: "Message sent!",
            icon: "success",
        });
        e.preventDefault();

        setUserName('');
        setUserEmail('');
        setUserMessage('');

        emailjs.sendForm('service_ymep0jy', 'template_5pw7kbe', form.current, 'UPRBwP5C6uivaOsLz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact section contact" id='contact'>
            <h2 className="section__title">Get In Touch</h2>
            <span className='section__subtitle'>Contact Me</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to Me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>
                            <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write Me <bx className="bx bx-right-arrow-alt contact__button-icon"></bx></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">999-888-777</span>
                            <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact__button">Write Me <bx className="bx bx-right-arrow-alt contact__button-icon"></bx></a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>
                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb123</span>
                            <a href="https://m.me/crypticalcoder" className="contact__button">Write Me <bx className="bx bx-right-arrow-alt contact__button-icon"></bx></a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write Me Your Project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input required value={userName} onChange={(e) => handleUserName(e)} type="text" name='user_name' className="contact__form-input" placeholder='Insert Your Name' />
                        </div>
                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Mail</label>
                            <input required value={userEmail} onChange={(e) => handleUserEmail(e)} type="email" name='user_email' className="contact__form-input" placeholder='Insert Your Email' />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Project</label>
                            <textarea required value={userMessage} onChange={(e) => handleUserMesage(e)} name="message" className="contact__form-input" placeholder='Write Your Project' cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" value="Send Message" className='button button--flex'>


                        </input>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;