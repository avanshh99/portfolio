// import images
import Hero_person from './assets/images/Hero/person.png';

import indesign from './assets/images/Skills/indesign.png';
import flask from './assets/images/Skills/flask.jpg';
import django from './assets/images/Skills/django.png';
import reactjs from './assets/images/Skills/react.png';
import tailwind from './assets/images/Skills/tailwind.png';
import python from './assets/images/Skills/python.png';

import services_logo1 from './assets/images/Services/logo1.png';
import services_logo2 from './assets/images/Services/logo2.png';
import services_logo3 from './assets/images/Services/logo3.png';

import project1 from './assets/images/Projects/img1.png';
import project2 from './assets/images/projects/img2.png';
import project3 from './assets/images/Projects/img3.png';
import person_project from './assets/images/Projects/person3.png';

import avatar1 from './assets/images/Testimonials/avatar1.png';
import avatar2 from './assets/images/Testimonials/avatar2.png';
import avatar3 from './assets/images/Testimonials/avatar3.png';
// import avatar4 from './assets/images/Testimonials/avatar4.png';

import Hireme_person from './assets/images/Hireme/person1.png';
import Hireme_person2 from './assets/images/Hireme/person.png';

// import icons from react-icons
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#skills',
      icon: BiUser,
    },
    {
      link: '#services',
      icon: RiServiceLine,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'Software Engineer',
    firstName: 'AVAN',
    LastName: 'SHETTY',
    btnText: 'Hire Me',
    image: Hero_person,
    hero_content: [
      {
        count: 'Junior Undergrad',
        text: 'ML Ethusiast and Web developer',
      },
      {
        count: '7+',
        text: 'Projects working on currently',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Indesign',
        para: 'Creative layouts and graphic design',
        logo: indesign,
      },
      {
        name: 'Flask',
        para: 'Lightweight Python web framework.',
        logo: flask,
      },
      {
        name: 'Tailwind',
        para: 'Utility-first CSS for modern designs',
        logo: tailwind,
      },
      {
        name: 'React js',
        para: 'Dynamic user interfaces with components',
        logo: reactjs,
      },
      {
        name: 'Django',
        para: 'Robust backend framework in Python',
        logo: django,
      },
      {
        name: 'Python',
        para: 'Versatile programming for all applications',
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: 'Techosavy',
    subtitle: 'WHAT I WORK ON',
    service_content: [
      {
        title: 'Web Development',
        para: 'Developing dynamic, responsive websites with a focus on user experience and performance.',
        logo: services_logo1,
      },
      {
        title: 'Machine Learning',
        para: 'Designing intelligent algorithms to automate tasks and uncover insights from data.',
        logo: services_logo2,
      },
      {
        title: 'Indesign Expert',
        para: 'Specializing in creating polished, professional layouts for print and digital media.',
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: person_project,
    project_content: [
      {
        title: 'Spotify Clone',
        image: project1,
        github_link: 'https://github.com/avanshh99/SpotifyClone',
      },
      {
        title: 'Blog',
        image: project2,
        github_link: 'https://github.com/avanshh99/blog',
      },
      {
        title: 'Health Guardian',
        image: project3,
        github_link: 'https://github.com/avanshh99/vaccination_track',
      },
    ],
  },
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'REVIEW FROM TEAM',
    testimonials_content: [
      {
        review:
          '“Working with Avan has been a transformative experience. His expertise in software development and web design brought our project to life beyond our expectations.”',
        img: avatar1,
        name: 'Advik Hegde',
      },
      {
        review:
          '“Avan’s attention to detail and commitment to quality are truly impressive. He was instrumental in delivering our project on time and exceeding our goals.”',
        img: avatar2,
        name: 'Ram Charan',
      },
      {
        review:
          '“I highly recommend Avan for any software engineering project. His ability to integrate machine learning and web development is outstanding.”',
        img: avatar3,
        name: 'Vivek Bore',
      },
    ],
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a passionate software engineer, I specialize in developing innovative web solutions and implementing machine learning algorithms. Let's collaborate to bring your ideas to life and create impactful projects that drive success.",
    btnText: 'Hire Me',
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'avanshetty196@gmail.com',
        icon: GrMail,
        link: 'mailto:avanshetty196@gmail.com', // Updated email link
      },
      {
        text: '+91 8985678901',
        icon: MdCall,
        link: 'https://wa.me/8985678901',
      },
      {
        text: 'avan_shh',
        icon: BsInstagram,
        link: 'https://www.instagram.com/avan_shh/',
      },
      {
        text: 'LinkedIn',
        icon: BsLinkedin, // Make sure to import BsLinkedin from react-icons
        link: 'https://www.linkedin.com/in/avan-shetty-a22868276/', // Replace with your LinkedIn profile URL
      },
      {
        text: 'GitHub',
        icon: BsGithub, // Make sure to import BsGithub from react-icons
        link: 'https://github.com/avanshh99', // Replace with your GitHub profile URL
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved 2024',
  },
};
