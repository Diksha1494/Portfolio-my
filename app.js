const video1=document.getElementById('projectVideo1');
const video2=document.getElementById('projectVideo2');
const video3=document.getElementById('projectVideo3');
const hoverSign=document.querySelector(".hover-sign");

const videoList=[video1,video2,video3];
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout',function(){
        video.pause();
         hoverSign.classList.remove("active");
         

    })
})
const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  // Add more categories if you want
   {
   
  title: "Languages",
  skills: [
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],


  },
  {
  title: "Tools",
  skills: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "NPM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
}

];

const container = document.getElementById("categories-container");

SkillsInfo.forEach(category => {
  // Create category box
  const categoryBox = document.createElement("div");
  categoryBox.className = "category-box";

  // Category title
  const title = document.createElement("h3");
  title.textContent = category.title;
  categoryBox.appendChild(title);

  // Skill grid container
  const grid = document.createElement("div");
  grid.className = "skills-grid";

  // Add skills
  category.skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-item";
    
    // Skill logo
    const img = document.createElement("img");
    img.src = skill.logo;
    img.alt = `${skill.name} logo`;
    skillDiv.appendChild(img);
    
    // Skill name
    // const span = document.createElement("span");
    // span.textContent = skill.name;
    // skillDiv.appendChild(span);

    grid.appendChild(skillDiv);
  });

  categoryBox.appendChild(grid);

  container.appendChild(categoryBox);
});

// Initialize tilt effect on skill boxes using Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".category-box"), {
  max: 20,
  speed: 1000,
  scale: 1.05,
  glare: true,
  "max-glare": 0.3,
});
// Set your social profile links here
document.getElementById("github-link").href = "https://github.com/Diksha1494";
document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/diksha-rai-a89731293/overlay/contact-info/";
document.getElementById("instagram-link").href = "https://www.instagram.com/rai_diksha0914?igsh=MW5yd3VkaGRtNm0zNA==";
document.getElementById("fb-link").href = "https://www.facebook.com/diksha.rai.9400"; // Use your country code
document.getElementById("call-link").href = "tel:+916290738063";
document.getElementById("whatsapp-link").href =
  "https://wa.me/916290738063?text=Hi%20Diksha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!";


 //doing now
 const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});






