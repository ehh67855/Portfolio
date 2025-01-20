import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './App.css';

const fadeIn = (direction = 'up', delay = 0) => ({
  initial: { opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : 0 },
  animate: { opacity: 1, y: 0, x: 0, transition: { delay, duration: 0.8, ease: 'easeInOut' } },
});

const App = () => (
  <div className="App scroll-container">
    <HeroSection />
    <Container>
      {['about-me', 'education', 'leadership', 'projects', 'internships', 'contact'].map((name, i) => (
        <Element name={name} key={name}>
          <Section index={i} name={name} />
        </Element>
      ))}
    </Container>
  </div>
);

const HeroSection = () => (
  <motion.div className="hero" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
    <Container>
      <h1>Evan-Habib Hammam</h1>
      <p>Masters in Artificial Intelligence | Computer Science Major</p>
      <p>Contact: ehh67855@uga.edu | 404-849-1022</p>
      <div className="social-links mt-3">
        <a href="https://linkedin.com/in/evan-hammam" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ehh67855" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FaGithub size={30} />
        </a>
      </div>
    </Container>
  </motion.div>
);

const Section = ({ index, name }) => {
  const sections = {
    'about-me': <AboutMe />,
    education: <Education />,
    leadership: <Leadership />,
    projects: <Projects />,
    internships: <Internships />,
    contact: <Contact />,
  };
  return (
    <motion.div {...fadeIn('up', index * 0.3)} className="section">
      {sections[name]}
    </motion.div>
  );
};

const AboutMe = () => (
  <Card>
    <h2>About Me</h2>
    <p>I enjoy exploring music and have a dedicated music profile showcasing my interests and creations.</p>
  </Card>
);

const Education = () => (
  <Card>
    <h2>Education</h2>
    <p><strong>University of Georgia</strong></p>
    <p>Masters: Artificial Intelligence (Graduation: May 2026)</p>
    <p>Major: Computer Science (Graduation: May 2025)</p>
    <p>Minor: Mathematics (GPA: 3.88)</p>
    <p>Relevant Courses: AI, Software Engineering, Multivariable Mathematics, Algorithms</p>
  </Card>
);

const Leadership = () => (
  <Card>
    <h2>Leadership</h2>
    <ul>
      <li>
        <strong>UGA Small Satellite Lab</strong>: Leader of Data Science Team
        <p>Researching, testing, and implementing ML solutions for geospatial analysis.</p>
      </li>
      <li>
        <strong>Developers On Wall Street</strong>: VP
        <p>Managed React-based website development and code quality.</p>
      </li>
    </ul>
  </Card>
);

const Projects = () => (
  <Card>
    <h2>Notable Projects</h2>
    <ul>
      <li><strong>Task Flow:</strong> Graph-based task modeling website for optimization.</li>
      <li><strong>Stereo Vision:</strong> Pipeline for stereo vision using OpenCV.</li>
    </ul>
  </Card>
);

const Internships = () => (
  <Card>
    <h2>Internships</h2>
    <ul>
      <li><strong>Map Large:</strong> Senior Software Engineering Intern</li>
    </ul>
  </Card>
);

const Contact = () => (
  <Card className="text-center">
    <h2>Contact Me</h2>
    <p>Email: ehh67855@uga.edu</p>
    <p>Phone: 404-849-1022</p>
  </Card>
);

export default App;

