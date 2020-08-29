import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Iframe from 'react-iframe'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  // <AboutImg alt="profile picture" style={{"width":"20%"}} filename={img} />
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Iframe id='ifr' width='540' height='395' scrolling='no' style='background: url(//studio.processingtogether.com/static/img/jun09/pad/connectingbar.gif) no-repeat center 60px;' src='//studio.processingtogether.com/sp/pad/iframe/ro.9mwk7tDqcA6AO/rev.73?autostart=1'/>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || "I'm a Software Developer with experience on both ends of the stack, focused on providing meaningful, genuine contributions to colleagues, stakeholders, and end-users"}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Experienced in building products in a team setting with daily collaboration in software development subjects'}
                </p>
                <p className="about-wrapper__info-skills">
                  {paragraphThree || 'My main skills are JavaScript, ES6+, React, HTML/CSS, Node/Express, REST, Python, SQL, PostgreSQL, Jest, Linux '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || "When I’m not coding-- I love to consume sci-fi, sharpen my guitar skills, or experience new places around NYC and indulge my love for live music"}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
