import React from "react";
import "./Contact.css";

import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7w9uui9",
        "template_aj9sew8",
        form.current,
        "ttwo-qbd6n_euaC8P",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>&lt; Contact Me &gt;</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mayureshchavan81@gmail.com</h5>
            <a
              href="mailto:mayureshchavan81@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mayuresh Chavan</h5>
            <a
              href="https://www.linkedin.com/in/mayuresh-chavan-4b70b9142/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Messege me!</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919112793963"
              target="_blank"
              rel="noreferrer"
            >
              Send a Messege
            </a>
          </article>
        </div>
        {/*End of Contact Option*/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
