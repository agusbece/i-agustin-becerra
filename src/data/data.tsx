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
import heroImage from '../images/header-background-blockchain.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import portfolioLiveDemo1 from '../images/portfolio/portfolio-live-demo-1.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import testimonialImageAengus from '../images/testimonials/aengus.jpg';
import testimonialImageCristina from '../images/testimonials/cristi.jpg';
import testimonialImageJohnathan from '../images/testimonials/jona.jpg';
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
  description: 'This is Agustin Becerra Software Developer page resume',
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
  name: `I'm Agustín Becerra`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Uruguayian based <strong className="text-stone-100">Full Stack Software Engineer</strong>, with
        experience from tech giants to dynamic startups, I combine diverse tech insights into innovative software
        development. Proficient in Docker, Typescript, React, Angular, Redux, MongoDB among others, and now exploring
        blockchain, I champion groundbreaking approaches.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">calisthenic</strong>, petting
        my <strong className="text-stone-100">dogs</strong>, or exploring this beautiful{' '}
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
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  With over 8 years in full stack development, I've extensively used NodeJS, React, Redux (among others technologies) mastering the 
  intricacies of crafting projects from inception, leveraging the latest technologies. My expertise in TypeScript, OOP, 
  and microservices architecture underscores my proficiency. Furthermore, my rich experience with version control systems 
  and adeptness in building responsive, adaptive web applications aligns perfectly with industry best practices. My 
  excellent team communication, combined with leadership capabilities, has consistently ensured clarity and fostered 
  collaboration on intricate projects. My work with communication platforms further accentuates my versatility. Offering 
  not just the skills but a seasoned, innovative approach, I'm ready to make a meaningful impact.`,
  aboutItems: [
    {label: 'Location', text: 'Nueva Helvecia, Uruguay', Icon: MapIcon},
    {label: 'Nationality', text: 'Uruguayan 🇺🇾 / Spanish 🇪🇸', Icon: FlagIcon},
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
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Angular',
        level: 8,
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
        name: 'Express.js',
        level: 10,
      },
      {
        name: 'Java',
        level: 6,
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
        level: 7,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MongoDB',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'OpenLink Virtuoso',
        level: 4,
      },
    ],
  },
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
    name: 'Additional Expertise',
    skills: [
      {
        name: 'Agile Methodologies',
        level: 9,
      },
      {
        name: 'Remote work',
        level: 10,
      },
      {
        name: 'Solidity',
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
    title: 'FIBA WC-2023',
    description: 'Collaborated on the different ticketing app layers within a monorepo architecture.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Spartan',
    description:
      'Implemented new stripe payment. Improved code readability and deploying pipeline. Worked on middleware to normalize data.',
    url: 'https://uk.spartan.com/en',
    image: porfolioImage2,
  },
  {
    title: 'RYPT',
    description:
      'Spearheaded the architecture redesign of the front-end app with angular + redux. Also, developed RESTful APIs in Express.js.',
    url: 'https://www.rypt.app/',
    image: porfolioImage4,
  },
  {
    title: 'Funbox',
    description:
      'Create a widget to sell tickets based on boilerplate app, and redesign theme to match client preferences',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Microsoft Azure - RYPT',
    description: "I've managed and created different pipelines during my work at RYPT",
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Circus Vazquez',
    description: 'Ticketing widget. Improved development pipeline. Developed features on request.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Stripe Payment',
    description: 'Implemented stripe payment gateway on RYPT, Spartan, and other projects.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Jabber PRT - Cisco Systems',
    description:
      'One of my mains tasks during my internship in Cisco, was to redesign and update the PRT (Problem Resolve Tool) of Jabber',
    url: 'https://www.youtube.com/watch?v=YbrFzbGkSjk',
    image: porfolioImage10,
  },
  {
    title: 'Careangel',
    description: 'Developed features and fix bugs for the front end app in AngularJs while working in OneTree',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'POC - Halo',
    description: 'Developed a proof of concept digital line, to raffle incoming seasonal shoes.',
    url: '',
    image: porfolioImage7,
  },
];

export const portfolioItemsLiveDemos: PortfolioItem[] = [
  {
    title: 'Coin Rewarding dApp',
    description: 'A dApp that rewards users with a QUIZ Crypto Token for completing a survey.',
    url: 'https://coin-rewarding-dapp.vercel.app/',
    image: portfolioLiveDemo1,
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
    content: (
      <p>
        Gaining expertise in algorithms, data structures, and programming. I delved deep into optimizing performance,
        understanding operating systems, and mastering software engineering principles. This foundation has equipped him
        to excel in the tech realm.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - December 2024',
    location: 'KTO - Montevideo, Uruguay',
    title: 'Frontend Engineer',
    content: (
      <>
        <p>
          Enhanced development workflows and produced comprehensive documentation for applications, while developing new
          features.
        </p>
        <ul>
          <li>
            <span>• </span>Improved developing pipelines and added hooks to improve code maintainability.
          </li>
          <li>
            <span>• </span>Created documentation and generated new developing flows.
          </li>
          <li>
            <span>• </span>Integrated KYC solutions to the FE application to align with license regulations.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'September 2021 - September 2023',
    location: 'Halo Media LLC - New York, USA (remote)',
    title: 'Full Stack Developer',
    content: (
      <>
        <p>
          Developed solutions mainly for a white label ticket selling company with Js technologies and embedded apps.
        </p>
        <ul>
          <li>
            <span>• </span>Embed React apps within different webs pages (Angular, React, Wordpress) to buy ticket for
            concerts or itinerant shows.
          </li>
          <li>
            <span>• </span>Integrated different payment platforms such as Stripe, Square, among others.
          </li>
          <li>
            <span>• </span>Worked and created pipelines on Heroku and Netlify.
          </li>
          <li>
            <span>• </span>Led an Affinity Group Community with more than 10 persons to improve the company culture.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'August 2018 - September 2021',
    location: 'RYPT - Dublin, Ireland',
    title: 'Full Stack Developer & Technical Leader',
    content: (
      <>
        <p>
          Technical leader & Architect of RYPT Front End Web app. A web app that lets trainers follow up with their
          athletes and create workouts, exercises, graphs of performance, and other BI features that are constantly
          evolving.
        </p>
        <ul>
          <li>
            <span>• </span>Created from scratch the Front End App using angular 2, evolved and maintained through time
            to the latest angular version, with Microsoft Azure Docker pipeline.
          </li>
          <li>
            <span>• </span>Implemented Stripe payment method.
          </li>
          <li>
            <span>• </span>Created a test suite on the Microsoft Azure pipeline with Jest Framework on Puppeteer, a
            Headless browser.
          </li>
          <li>
            <span>• </span>Worked on the Back End based on ExpressJs over NodeJS.
          </li>
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
          Helped to develop different Agile engineering projects for U.S. companies that wanted excellent UX/UI and
          performance.
        </p>
        <ul>
          <li>
            <span>• </span>Worked on different projects with different technologies such as AngularJS, Angular2+,
            NodeJs, React, etc
          </li>
          <li>
            <span>• </span>Completed detailed programming and development tasks for front end and websites.
          </li>
          <li>
            <span>• </span>Leveraged expertise in software design and development with multiple programming languages
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'March 2015 - September 2015',
    location: 'Cisco Systems Inc. - Galway, Ireland',
    title: 'Software Engineer Intern',
    content: (
      <>
        <p>
          Worked as a Software Engineer developing a Windows client application called Jabber, using the Scrum
          development process.
        </p>
        <ul>
          <li>
            <span>• </span>Learned from top-notch Cisco engineers about software-engineered processes and the product
            development life cycle.
          </li>
          <li>
            <span>• </span>Work on a large-scale Agile engineering project on a highly usable, top- quality enterprise
            product.
          </li>
          <li>
            <span>• </span>Programmed on C# and .NET
          </li>
          <li>
            <span>• </span>Workshop of Windows dump file debugging on assembler
          </li>
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
      image: testimonialImageAengus,
    },
    {
      name: 'Cristina Bermudez',
      text: "During his tenure with RYPT, he consistently showcased exceptional technical prowess, driving key initiatives that bolstered our platform's performance. A true asset to the team!",
      image: testimonialImageCristina,
    },
    {
      name: 'Johnathan Franco -  Technical Leader',
      text: "His innovative approaches at HALO not only streamlined our processes but also fostered a collaborative environment. His expertise was pivotal in our project's success.",
      image: testimonialImageJohnathan,
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/agustin-becerra-gonzalez/'},
];
