// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
// Education Section Logo's
import mpgiLogo from './assets/education_logo/mpgi_logo.jpeg';
import sajicLogo from './assets/education_logo/sajic_logo.jpg';
import AlmightyLogo from './assets/education_logo/Almighty_logo.jpeg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  
  export const education = [
    {
      id: 0,
      img:  mpgiLogo,
      College: "Maharana Institute Of Professional Studies ,Mandhana, Kanpur",
      date: "Sept 2023 - Present",
      grade: "6.8 CGPA",
      desc: " I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering from  MIPS Kanpur. During my studies, I have developed a strong foundation in programming, software development, and core computer science concepts. I have studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, and Software Engineering. I also take active interest in workshops, coding challenges, and technical events that help me enhance my practical skills and broaden my knowledge in the field of technology.",
      degree: "B.TECH CSE",
    },
    
    {
      id: 1,
      img: sajicLogo,
      school: "Seth Anandram Jaipuria Inter College Anandnagar, Maharajganj, UP",
      date: "Apr 2020 - March 2022",
      grade: "78%",
      desc: "I completed my class 12 education from Seth Anandram Jaipuria Inter College Anandnagar, Maharajganj, UP, under the UP board, where I studied Physics, Chemistry,Biology and Mathematics (PCBM).",
      degree: "UP BOARD(XII) - PCBM",
    },
    {
      id: 2,
      img: AlmightyLogo,
      school: "Almighty Public Intermediate College Brijmanganj Maharajganj",
      date: "Apr 2018 - March 2020",
      grade: "82%",
      desc: "I completed my class 10 education from Almighty Public Intermediate College Brijmanganj Maharajganj, under the UP board, where I studied Science .",
      degree: " UP BOARD(X), Science",
    },
  ];
  export const projects = [
  {
    id: 1,
    title: " Color Catcher Game",
    description: "Color Catcher Game built using HTML and CSS,Javascript",
    image: "",
    tags: ["HTML", "Javascript CSS"],
    github: "https://github.com/Ashutosh00p/Color_Catcher_Game",
    webapp: "YOUR_LIVE_LINK",
  },
];
  