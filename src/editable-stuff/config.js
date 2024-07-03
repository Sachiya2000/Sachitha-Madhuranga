// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Sachitha",
  middleName: "Madhuranga",
  lastName: "Arachchi",
  message: " The world continues to evolve with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Sachiya2000",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sachithamadurangamaduranga?mibextid=ZbWKwL",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sachitha-madhuranga-848010250/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Sachiya.jpg"),
  imageSize: 375,
  message:
    "I am Sachitha Madhuranga.  Graduate of BSc (honors) Computer Science degree at the Saegis Campus. I am a responsible, self-motivated, skillful, and dedicated undergraduate with team spirit and leadership qualities who is willing to accept challenges, seeking an opportunity as a Web Developer to apply and explore the existing and forthcoming technologies in the field of Information Technology.",
  resume: "https://drive.google.com/file/d/1aNQDXey5VMod7maJwrKvpwJkaj4ooIo-/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "Sachiya2000",
 
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    
    { name: "Java", value: 70 },
    { name: "HTML/CSS", value: 90 },
    { name: "Boostrap", value: 80 },
    { name: "Tailwind CSS", value: 70 },
    { name: "Php", value: 70 },
    { name: "C/C++", value: 60 },
    { name: "JavaScript", value: 75 },
    { name: "React JS", value: 70 },
    { name: "Laravel", value: 70 },
    { name: "MSSQL/MYSQL/NoSQL", value: 60 },
    { name: "WordPress", value: 750 },
    { name: "Git and Github", value: 80 },
    { name: "Agile methodologies", value: 70 },
    { name: "Algorithms and Data Structures", value: 75 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 75 },
    { name: "Quick Learner", value: 80 },
    { name: "Team Work and Collaboration", value: 75 },
    { name: "Time Management", value: 85 },
    { name: "Attention to Detail", value: 75 },
    { name: "Critical Thinking", value: 80 },
    { name: "Communication skill", value: 70 },
    { name: "Continuous Learning", value: 90 },
  ],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "sachithmaduranga2001@gmail.com",
};


export { navBar, mainBody, about, repos, skills, contact, getInTouch };
