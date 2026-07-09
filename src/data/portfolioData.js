export const portfolioData = {
  profile: {
    name: "Diksha Rai",
    title: "CSE Student | Full Stack Developer | MERN Stack & Spring Boot  Developer",
    subtitle:
      "I build full stack web applications with modern JavaScript tools, React, and Spring Boot, with a focus on scalable user-first products.",
    resumeLink: "/Diksha_Rai_CV.pdf",
    image: "/main/img/pic.jpg",
  },
  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ],
  about: {
    paragraphs: [
      "I am pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in IoT, Cybersecurity, and Blockchain Technology at the Institute of Engineering and Management, Kolkata, with a YGPA of 9.06/10.0.",
      "My core stack includes React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Spring Boot, and I enjoy building reliable products backed by clean APIs and solid problem-solving.",
      "I have solved 250+ DSA problems, participated in hackathons like SIH, Hackosis, Myntra HackerRamp, and Adobe Hackathon, and I am actively growing as a developer through hands-on product work.",
    ],
    highlights: [
      { label: "YGPA", value: "9.06 / 10" },
      { label: "DSA Problems", value: "250+" },
      { label: "Graduation", value: "2027" },
    ],
  },

  experience: [
      {
        title: "Women Leadership Development Trainee",
        organization: "PwC Acceleration Center, Kolkata, India",
        duration: "Sept 2025 - Jan 2026",
        points: [
          "Participated in a leadership development program focused on communication, confidence, and professional growth.",
          "Attended sessions on corporate work culture, collaboration, and global client expectations.",
        ],
      },
      {
        title: "Campus Ambassador",
        organization: "IIT Kharagpur (Kshitij), Kolkata, India",
        duration: "Aug 2024 - Feb 2025",
        points: [
          "Coordinated technical workshops and competitions with 100+ student participation.",
          "Led outreach initiatives to increase engagement in technical events.",
        ],
      },
    ],
 
  skills: [
    { name: "Java", level: 94 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "MongoDB", level: 90 },
    { name: "SQL", level: 85 },
  ],
  orbitSkills: [
    "Java",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Spring Boot",
    "MongoDB",
    "SQL",
    "Docker",
    "Git",
    "REST API",
    "JWT",
    "Tailwind CSS",
    "Bootstrap",
    "HTML",
    "CSS",
  ],
  projects: [
    {
      title: "BookVibe",
      description:
        "Responsive MERN bookstore with admin inventory panel and recommendation workflows.",
      image: "/main/img/projects/bookstore.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "OpenAI"],
      github: "https://github.com/Diksha1494/BookVibe",
      live: "https://book-vibe-nu.vercel.app/",
    },
    {
      title: "Expense Management System",
      description:
        "Secure expense tracker with JWT auth, dashboard analytics, and rich CRUD operations.",
      image: "/main/img/projects/expense.png",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/Diksha1494/Expense-management",
      live: "#",
    },
    {
      title: "Xchango",
      description:
        "Skill-exchange platform with tokens, chat, and collaborative course journeys.",
      image: "/main/img/projects/xchango.png",
      tech: ["Next.js", "Supabase", "Tailwind", "Realtime"],
      github: "https://github.com/Diksha1494/Xchango",
      live: "https://xchango-1dwdffaue-dikshas-projects-d57d6445.vercel.app",
    },
    {
      title: "Project Management Platform",
      description:
        "Team productivity tool with task timelines, status pipelines, and collaboration features.",
      image: "/main/img/projects/project-mgmt.png",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com/Diksha1494",
      live: "#",
    },
    {
      title: "Smart Research Extension",
      description:
        "Chrome extension for extracting and summarizing web content with backend processing.",
      image: "/main/img/projects/research-ext.png",
      tech: ["Spring Boot", "JavaScript", "Jsoup", "Chrome API"],
      github: "https://github.com/Diksha1494/Smart_Research-Assistant",
      live: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Modern storefront with fast product discovery, cart flows, and secure checkout.",
      image: "/main/img/projects/ecommerce.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Diksha1494/E-Commerce-Web-Project",
      live: "#",
    },
  ],
   resume: {
    education: {
      institute: "Institute of Engineering and Management, Kolkata, India",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "Aug 2023 - July 2027",
      score: "YGPA: 9.06/10.0",
    },
    educationMilestones: [
      {
        level: "B.Tech",
        institute: "Institute of Engineering and Management, Kolkata",
        degree: "Bachelor of Technology in Computer Science Engineering",
        branch: "IoT, Cybersecurity & Blockchain Technology",
        university: "University of Engineering & Management",
        duration: "Aug 2023 - July 2027",
        metricLabel: "Current YGPA",
        metricValue: 9.06,
        metricSuffix: "/10",
        progress: 91,
        accent: "cyan",
        featured: true,
      },
      {
        level: "Higher Secondary",
        institute: "Balika Siksha Sadan",
        degree: "Class XII",
        board: "WBCHSE",
        year: "2022",
        metricLabel: "Score",
        metricValue: 85,
        metricSuffix: "%",
        progress: 88,
        accent: "violet",
      },
      {
        level: "Secondary",
        institute: "Nalanda English High Day School",
        degree: "Class X",
        board: "WBBSE",
        year: "2020",
        metricLabel: "Score",
        metricValue: 87,
        metricSuffix: "%",
        progress: 92,
        accent: "emerald",
      },
    ],
    
    achievements: [
      "Solved 250+ DSA problems on LeetCode and GeeksforGeeks.",
      "Participated in SIH, Hackosis, Myntra HackerRamp, and Adobe Hackathon.",
      "Winner in Volleyball and Pickleball; second runner-up in Relay Race and Throwball in the inter-departmental sports competition at IEM, Kolkata.",
    ],
    certificates: [
      {
        title: "Gen AI Badge - PwC",
        image: "/main/img/gen badge.png",
      },
      {
        title: "Cybersecurity Badge - PwC",
        image: "/main/img/cyber badge.png",
      },
      {
        title: "Programming Fundamentals Java Badge - PwC",
        image: "/main/img/java badge.png",
      },
      {
        title: "Modern Data Systems Badge - PwC",
        image: "/main/img/data badge.png",
      },
      {
        title: "NextJS - GFG",
        image: "/main/img/nextjs.png",
      },
      {
        title: "Spring Framework - Coursera",
        image: "/main/img/spring.jpeg",
      },
      {
        title: "JavaScript - HackerRank",
        image: "/main/img/javascript.png",
      },
    ],
  },
  
  contact: {
    email: "raidiksha0914@gmail.com",
    phone: "+91 6290738063",
    location: "Kolkata, India",
    github: "https://github.com/Diksha1494",
    linkedin: "https://www.linkedin.com/in/diksha-rai-a89731293/",
  },
};
