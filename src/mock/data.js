import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Anthony Rennde', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portoflio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Anthony',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://resume.creddle.io/resume/8hh4dzy7tmx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'welldone.png',
    title: 'WellDone',
    info: ' - WellDone International, a non-profit working to improve global access to clean water by providing reports on well activity that may facilitate technical assistance to malfunctioning wells. Refactored existing codebase and built onto an existing frontend utilizing React with SemanticUI & EmotionCSS. Key contributor in successful deployment of a data persisting backend utilizing Node, Express, PostgreSQL and Heroku deployment.',
    info2: 'Login/Passowrd: admin@email / password (Super secure! Please allow 30 seconds for database to fire up from its sleeping state)',
    url: 'https://well-done-h9vshme77.now.sh',
    repo: 'https://github.com/labs17-WellDone/backend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rende718@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://www.twitter.com/rendeDev',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/Jazz-code',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anthony-rende/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/jazz-code',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
