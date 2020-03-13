import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Anthony Rende', // e.g: 'Name | Developer'
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
    info: ' WellDone International, a non-profit working to improve global access to clean water by providing reports on well activity that may facilitate technical assistance to malfunctioning wells. Refactored existing codebase and built onto an existing frontend utilizing React with SemanticUI & EmotionCSS. Key contributor in successful deployment of a data persisting backend utilizing Node, Express, PostgreSQL and Heroku deployment.',
    info2: 'Login / Passowrd: admin@email / password',
    url: 'https://well-done-h9vshme77.now.sh',
    repo: 'https://github.com/labs17-WellDone/backend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'celebdoa.png',
    title: 'Celeb Dead or Alive',
    info: ' Celeb DOA is a cheeky web trivia app built in 4 days that allows users to test their knowledge of celebrities.',
    info2: 'Built a clean UI developed in React that tracks a users score/data via Context API and persisted in a Node/Express backend database deployed to Heroku.',
    url: 'https://celeb-dead.netlify.com/',
    repo: 'https://github.com/jazz-code/Front-End', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'droom.png',
    title: 'DROOM',
    info: 'DROOM, which means Dream in Dutch, helps job seekers find jobs and helps companies find qualified employees in a fun and innovative way. ',
    info2: 'Built in React with hooks, using Redux as state management. The backend was developed with Node/Express, Postgres, and Jest Supertest',
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
