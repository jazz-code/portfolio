import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Anthony Rende', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portoflio', // e.g: Welcome to my website
  image: '/src/images/portfolio.png'
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
  paragraphFour: '',
  resume: 'https://resume.creddle.io/resume/8hh4dzy7tmx', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'welldone.png',
    title: 'WellDone',
    subtitle: 'Full-Stack',
    info: ' WellDone International, a non-profit working to improve global access to clean water by providing reports on well activity that may facilitate technical assistance to malfunctioning wells',
    info2: 'Tech Stack: React | Node | Expess | PostgreSQL | Knex | EmotionCSS ',
    info3: '‣ Refactored and built onto an existing frontend in a team of 5, utilizing React with SemanticUI & EmotionCSS',
    info4: '‣ Key contributor in successful deployment of a data persisting backend utilizing Node, Express, PostgreSQL and Heroku deployment',
    info5: '‣ Learned Node/Express for this project specifically and contributed greatly to its launch ',
    info6: '',
    info7: '',
    info8: '',
    url: 'https://welldone-water.now.sh/',
    repo: 'https://github.com/labs17-WellDone/backend', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'celebdoa.png',
    title: 'Celeb Dead or Alive',
    subtitle: 'Front-End',
    info: 'Celeb DOA is a cheeky web trivia app built in 4 days that allows users to test their knowledge of celebrities',
    info2: 'Tech Stack: React | Node/Express | SCSS/SASS | SemantiucUI',
    info3: '‣ Built a clean and simple UI with React that tracks a users score/data and persisted in a Node/Express backend database deployed to Heroku',
    info4: '‣ State management using Context API & useState hook',
    url: 'https://celeb-dead.netlify.com/',
    repo: 'https://github.com/jazz-code/Front-End', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mud.png',
    title: 'Multi-User-Dungeon (MUD)',
    subtitle: "Back-End",
    info: 'Players can read or view descriptions of rooms, objects, and actions performed in the virtual world',
    info2: 'Tech Stack: React | Django | REST Framework| SQL',
    info3: '‣ Learned Django with no experience of Django and implemented an entire Django backend within 4 days', 
    info4: '‣ Created a world-map generating algorithm with randomly assorted rooms and items via pair-programming with another person',
    info5: '‣ Deployed to heroku in a time crunch under pressure to finish the project within a few short days',
    url: 'https://boring-liskov-58c04c.netlify.com/',
    repo: 'https://github.com/CS24-Build-Week-1/Back-End', // if no repo, the button will not show up
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
      url: 'https://www.twitter.com/AnthonyRendeV',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/Jazz-code',
    // },
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
