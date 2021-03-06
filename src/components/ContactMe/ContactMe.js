import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();   
    
        emailjs.sendForm('service_1by99v6', 'template_deub7aj', e.target, 'user_BPYNtdRA0qvmQtrZhinc9')
          .then((result) => {
              window.location.reload();
              console.log(result.text); 
          }, (error) => {
              console.log(error.text);
          });
        }

    return (
        <div class="container my-5">
            <div className="col">
            <form className="contact-form" onSubmit={sendEmail}>
                <h3 className="text-center text-dark">Send Message</h3>
                <hr />
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <br/>
                <input type="text" placeholder="Your name" name="from_name" />
                <br/>
                <label>Email</label>
                <br/>
                <input type="email" placeholder="Your email address" name="from_email" />
                <br/>
                <label>Subject</label>
                <br/>
                <input type="text" placeholder="Your email subject" name="subject" />
                <br/>
                <label>Message</label>
                <br/>
                <textarea placeholder="Please write your message here..." name="html_message" />
                <br/>
                <input className="bg-info mt-3 btn-lg" type="submit" value="Send" />
            </form>
            </div>            
        </div>

    );
};

export default ContactMe;