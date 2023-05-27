import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_attr0ti', 'template_yux35vx', form.current, 'hW4Wk4RWGiDgAKOw-')
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-us-container">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            <strong>
              <FontAwesomeIcon icon={faEnvelope} />
            </strong>{' '}
            : aclassreno@gmail.com
          </p>
          <p>
            <strong>
              <FontAwesomeIcon icon={faPhone} />
            </strong>{' '}
            : 613-890-9344
          </p>
          <p>
            <strong>
              <FontAwesomeIcon icon={faLocationDot} />
            </strong>{' '}
            : Ottawa, Ontario
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          {isSent ? (
            <p>Thank you for your message! We will be in touch soon.</p>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="user_name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="user_email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit" value="Sent">Send</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
