import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Agustin Becerra resume',
  description: "This is Agustin Becerra Software Developer page resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Agustin Becerra`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Nueve Helvecia based <strong className="text-stone-100">Full Stack Software Engineer</strong>,
        with experience from tech giants to dynamic startups, I combine diverse tech insights into innovative software
        development. Proficient in Docker, JavaScript, React, and exploring blockchain, I champion groundbreaking 
        approaches.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">calisthenic</strong>,
        petting my <strong className="text-stone-100">dogs</strong>, or exploring this beautiful{' '}
        <strong className="text-stone-100">world</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/agustin-becerra-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  With over 8 years in full stack development, I've extensively used NodeJS, React, Redux (among others) mastering the 
  intricacies of crafting projects from inception, leveraging the latest technologies. My expertise in TypeScript, OOP, 
  and microservices architecture underscores my proficiency. Furthermore, my rich experience with version control systems 
  and adeptness in building responsive, adaptive web applications aligns perfectly with industry best practices. My 
  excellent team communication, combined with leadership capabilities, has consistently ensured clarity and fostered 
  collaboration on intricate projects. My work with communication platforms further accentuates my versatility. Offering 
  not just the skills but a seasoned, innovative approach, I'm ready to make a meaningful impact.`,
  aboutItems: [
    {label: 'Location', text: 'Nueva Helvecia', Icon: MapIcon},
    {label: 'Nationality', text: 'Uruguayian / Spanish', Icon: FlagIcon},
    {label: 'Interests', text: 'Farming, Blockchain, cooking', Icon: SparklesIcon},
    {label: 'Study', text: 'University of the Republic (UDELAR)', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Portuguese',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'ExpressJs',
        level: 10,
      },
      {
        name: 'Solidity',
        level: 4,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Heroku',
        level: 9,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Microsoft Azure',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2018',
    location: 'Universidad de la Republica (UDELAR), Uruguay',
    title: 'Computer Information Systems Analyst',
    content: <p>Gaining expertise in algorithms, data structures, and programming. 
      He delved deep into optimizing performance, understanding operating systems,
      and mastering software engineering principles. This foundation has equipped 
      him to excel in the tech realm.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'Halo Media LLC - New York, USA (remote)',
    title: 'Software Engineer',
    content: (
      <>
        <p>
          Developed solutions mainly for a white label ticket selling company with Js technologies and embedded apps.
        </p>
        <ul>
          <li><span>• </span>Embed React apps within different webs pages (Angular, React, Wordpress) to buy ticket for concerts or itinerant shows.</li>
          <li><span>• </span>Integrated different payment platforms such as Stripe, Square, among others.</li>
          <li><span>• </span>Worked and created pipelines on Heroku and Netlify.</li>
          <li><span>• </span>Team Leader of the Affinity Group Food & Beverage Community.</li>
        </ul>
      </>      
    ),
  },
  {
    date: 'August 2018 - September 2021',
    location: 'RYPT - Dublin, Ireland',
    title: 'Full stack Developer & Technical Leader',
    content: (
      <>
        <p>
          Technical leader & Architect of RYPT Front End Web app. A web app that
          lets trainers follow up with their athletes and create workouts, exercises,
          graphs of performance, and other BI features that are constantly evolving.
        </p>
        <ul>
          <li><span>• </span>Created from scratch the Front End App using angular 2, evolved and maintained through time to the latest angular version, with Microsoft Azure Docker pipeline.</li>
          <li><span>• </span>Implemented Stripe payment method.</li>
          <li><span>• </span>Created a test suite on the Microsoft Azure pipeline with Jest Framework on Puppeteer, a Headless browser.</li>
          <li><span>• </span>Worked on the Back End based on ExpressJs over NodeJS.</li>
        </ul>
      </>
    ),
  },
  {
    date: 'February 2017 - June 2018',
    location: 'OneTree - Montevideo, Uruguay',
    title: 'Frontend Developer',
    content: (
      <>
        <p>
          Helped to develop different Agile engineering projects for U.S. companies that wanted excellent UX/UI and performance.
        </p>
        <ul>
          <li><span>• </span>Worked on different projects with different technologies such as AngularJS, Angular2+, NodeJs, React, etc</li>
          <li><span>• </span>Completed detailed programming and development tasks for front end and websites.</li>
          <li><span>• </span>Leveraged expertise in software design and development with multiple programming languages</li>
        </ul>
      </>
    ),
  },
  {
    date: 'August 2018 - September 2021',
    location: 'Cisco Systems Inc. - Galway, Ireland',
    title: 'Software Engineer Intern',
    content: (
      <>
        <p>
          Worked as a Software Engineer developing a Windows client application
          called Jabber, using the Scrum development process.
        </p>
        <ul>
          <li><span>• </span>Learned from top-notch Cisco engineers about software-engineered processes and the product development life cycle.</li>
          <li><span>• </span>Work on a large-scale Agile engineering project on a highly usable, top- quality enterprise product.</li>
          <li><span>• </span>Programmed on C# and .NET</li>
          <li><span>• </span>Workshop of Windows dump file debugging on assembler</li>
        </ul>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Aengus Bates - coworker at Cisco',
      text: 'I had the pleasure of working alongside Agustin for six months while he interned at Cisco, Galway. During that time he showed himself to be a talented developer, well capable of delivering quality, tested functionality on time and to spec. He was a strong contributor to the project and as a friendly, outgoing person was also a positive addition to the team.',
      image: 'https://media.licdn.com/dms/image/D5603AQG38MEQxkl2tg/profile-displayphoto-shrink_100_100/0/1684628999716?e=1703721600&v=beta&t=o0OdV7KbAYnvH5Pk6akF7vmF7WMvridHI_q76lebSsU',
    },
    {
      name: 'Cristina Bermudez',
      text: "During his tenure with RYPT, he consistently showcased exceptional technical prowess, driving key initiatives that bolstered our platform's performance. A true asset to the team!",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Johnathan Franco -  Technical Leader',
      text: "His innovative approaches at HALO not only streamlined our processes but also fostered a collaborative environment. His expertise was pivotal in our project's success.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/agusbece',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: contact.items[3].href || ''},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/agustin-becerra-gonzalez/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
