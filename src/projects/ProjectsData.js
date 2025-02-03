import React from "react";
import projectOne from "../assets/project-1.webp";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.avif";

const projects = {
  1: {
    title: "Hospital Management System",
    image: projectOne,
    description: (
      <>
        <p>
          This comprehensive web application is built using the MERN stack and
          aims to streamline the management of a medical institute. It features
          distinct front-end interfaces for users and administrators, supported
          by a robust backend.
        </p>
      </>
    ),
    github: "https://github.com/ankitgupta143/Hospital-Management-System",
    demo: "https://hospital-management-system-site.netlify.app/",
  },
  2: {
    title: "Mern Chat App",
    image: projectTwo,
    description: (
      <>
        <p>
          This app provides users with a platform to communicate in real-time,
          see online/offline status of other users, send pop-up messages, and
          search for specific users within the system.
        </p>
      </>
    ),
    github: "https://github.com/ankitgupta143/Mern-Chat-App",
    demo: "https://mern-chat-web-2cw3.onrender.com/",
  },
  3: {
    title: "Gym Fitness Tracker",
    image: projectThree,
    description: (
      <>
        <p>
          This app is an online mode exercise website where anyone can learn all type of
          workout exercise like biceps, triceps, back, shoulders, abs, etc.
          There is no need of any Trainer to learn any workout exercise.
        </p>
      </>
    ),
    github: "https://github.com/ankitgupta143/Gym-Fitness",
    demo: "https://gym-fitness-tracker.netlify.app/",
  },
};

export default projects;
