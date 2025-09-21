import project1 from "../assets/projects/verifi.png";
import project2 from "../assets/projects/dec.png";
import project3 from "../assets/projects/chatt.jpg";
import project4 from "../assets/projects/for.png";
import project5 from "../assets/projects/bite.png";
import project6 from "../assets/projects/carr.png";
import project7 from "../assets/projects/trav.jpg";
export const HERO_CONTENT = `Hi, I’m Tesnim Khabacha — a second-year software engineering student passionate about DevOps, Artificial Intelligence, and Web Development. I love creating modern, user-friendly applications and exploring cloud solutions. My ambition is to keep growing as an engineer and contribute to impactful projects that balance scalability, efficiency, and creativity.`;


export const ABOUT_TEXT = `I’m a curious and motivated software engineering student currently in my second year. Over the course of my studies, internships, and self-driven projects, I’ve built hands-on experience with technologies like Angular, React, NestJS, MySQL, MongoDB, Java, and Python. I enjoy working in collaborative environments where I can both learn from others and share my own ideas. Beyond academics, I spend time exploring new technologies, building side projects, and joining hackathons to challenge myself and expand my perspective.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - August 2025",
    role: "Frontend Engineer Intern",
    company: "Revo",
    description: `Worked on a fraud document detection platform, developing and maintaining frontend features with Angular. Collaborated using Scrum methodology to improve user experience and implement secure, scalable interfaces.`,
    technologies: ["Angular", "TypeScript", "SCSS","MongoDB","Express.js","Node.js", "Scrum"],
  },
  {
    year: "July 2025 - August 2025",
    role: "Full Stack Developer Intern",
    company: "Junior Entreprise INSAT",
    description: `Contributed to the development of an admin dashboard by building frontend components in React and backend services with NestJS. Designed and managed a relational database with MySQL. Worked with the team following Scrum practices to ensure efficient integration and delivery.`,
    technologies: ["React", "NestJS", "MySQL", "Scrum"],
  },
  
  {
    year: "2024 - 2025",
    role: "AI Training Participant",
    company: "Virtual University of Tunis",
    description: `Completed a training program on Artificial Intelligence with an 85% success rate on the final evaluation. Explored AI fundamentals, similarity measures, and project-based applications.`,
    technologies: ["Python", "Machine Learning", "SVD", "Cosine Similarity","Deep Learning"],
  },
  {
    year: "2024",
    role: "Docker Certification",
    company: "RBK",
    description: `Earned a certification in Docker, gaining skills in containerization, image creation, orchestration, and deployment of scalable applications.`,
    technologies: ["Docker", "Containers", "DevOps"],
  },
];

export const PROJECTS = [
  
  {
    title: "Décori (E-Commerce Website)",
    image: project2,
    description:
      "An e-commerce platform for selling home furniture online, featuring product management, shopping cart, and secure checkout. Developed collaboratively using Scrum methodology.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Scrum","Git/Github"],
  },
  {
    title: "VeriFi (Document Fraud Detection)",
    image: project1,
    description:
      "A web application that allows users to register, upload documents, and view AI-based fraud detection results. Users can download the reports or view them online. Built with Angular, Node.js, and MongoDB for secure and scalable operations.",
    technologies: ["Angular", "Node.js", "MongoDB", "Express.js", "TypeScript", "OCR","ML","Git/Github"],
  },
   {
    title: "Forja (Film Rental Website)",
    image: project4,
    description:
      "A dynamic website that allows users to browse and rent films online. Implemented authentication, database management, and film catalog features.",
    technologies: ["PHP", "MySQL","Git/Github"],
  },
  {
  title: "Social Chat App",
  image: project3,
  description:
    "A real-time chat application built with Next.js, allowing users to send messages, create chat rooms, and interact with others. Prisma is used for database management, providing efficient handling of users and messages.",
  technologies: ["Next.js", "Prisma", "MySQL", "React", "TypeScript","Git/Github"],
}
,
 
  {
    title: "QuickBite (Food Delivery Website)",
    image: project5,
    description:
      "A food delivery platform that lets users browse restaurants, order meals, and track orders. Designed with a responsive interface.",
    technologies: ["Bootstrap", "HTML", "CSS", "JavaScript", "MySQL"],
  },
 
  {
    title: "Car Rental Application ",
    image: project6,
    description:
      "A desktop application for renting cars, developed using Java Swing and NetBeans. Integrated with MySQL database for managing cars, customers, and rental transactions.",
    technologies: ["Java", "Java Swing", "NetBeans", "MySQL"],
  },
   {
    title: "Travel Agency Website",
    image: project7,
    description:
      "A small yet functional website for a travel agency, showcasing destinations, services, and booking options.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Sousse, Tunisia",
  phoneNo: "+216 22 342 421",
  email: "tesnimkhabacha7@gmail.com",
};
