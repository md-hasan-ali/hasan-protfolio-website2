import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div className='contact-form-area py-5' id='contact'>
            <div className="container">
                <div className="section-title text-center pb-5">
                    <h2><span style={{ color: '#FF5733' }}>Contact</span> Me</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div data-aos="fade-right" data-aos-duration="1500" className="contact-form">
                            <h2>LEAVE A MESSAGE</h2>
                            <form action='https://formspree.io/f/mzbopaar' method='POST'>
                                <input type="text" name="name" placeholder='Your Name*' id='email' required />

                                <input type="text" placeholder='Email*' name="Email" id="email" required />

                                <input type="text" placeholder='Subject*' name="subject" id="" required />

                                <textarea placeholder='Message*' name="message" id="" cols="20" rows="5"></textarea>

                                <input type="submit" value="Send Message" className='share-button1 mt-0' />
                            </form>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className="col-md-6">
                        <div className="row">
                            <div className="col-12 address">
                                <h2>Address</h2>
                                <p>Baliadangi , Thakurgaon, Bangladesh</p>
                            </div>
                            <div className="col-12 address">
                                <h2>Phone</h2>
                                <p>01798946719</p>
                            </div>
                            <div className="col-12 address">
                                <h2>Email</h2>
                                <p>hasanaliringku@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;