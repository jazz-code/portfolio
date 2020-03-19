import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
              </p>
              <form action="https://getform.io/f/cef6bcd6-5106-40a9-a594-b13fd3521ec6" method="POST">
              <p>
                <label className="contact-label">
                  Your Name: <input className="contact-input" type="text" name="name" />
                  </label>
              </p>
              <p>
                <label className="contact-label">
                  Your Email: <input className="contact-input" type="email" name="email" />
                  </label>
              </p>
              <p>
                <label className="contact-label">
                  Message: <textarea className="contact-textarea" name="message"></textarea>
                  </label>
              </p>
              <p>
                <button target="_blank" type="submit"  className="cta-btn cta-btn--resume"> 
                {btn || "Let's Talk"}
                </button>
              </p>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
