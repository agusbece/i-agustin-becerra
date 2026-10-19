import {AcademicCapIcon, ArrowDownTrayIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
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
 * Metadatos de la página
 */
export const homePageMeta: HomepageMeta = {
  title: 'Agustín Becerra - Currículum',
  description: 'Página de currículum de Agustín Becerra, Desarrollador de Software',
};

/**
 * Definición de secciones
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
 * Sección Hero
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Soy Agustín Becerra`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Soy un <strong className="text-stone-100">Ingeniero de Software Full Stack</strong> uruguayo, con experiencia en
        grandes empresas tecnológicas y startups dinámicas. Combino conocimientos tecnológicos diversos en desarrollo de
        software innovador. Competente en Node, Typescript, React, Angular, Redux, entre otros, y actualmente explorando
        blockchain, impulso la innovación a través de enfoques pioneros.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        En mi tiempo libre, podés encontrarme entrenando <strong className="text-stone-100">calistenia</strong>,
        acariciando a mis <strong className="text-stone-100">perros</strong>, o explorando este hermoso{' '}
        <strong className="text-stone-100">mundo</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/agustin-becerra-resume.pdf',
      text: 'Currículum',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * Sección Sobre mí
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  Con más de 10 años en desarrollo full stack, he utilizado extensivamente NodeJS, React, Redux (entre otras tecnologías), 
  dominando las complejidades de crear proyectos desde cero y aprovechando las últimas tecnologías. Mi experiencia en 
  TypeScript, POO y arquitectura de microservicios resalta mi competencia. Además, mi amplia experiencia con sistemas 
  de control de versiones y mi habilidad para construir aplicaciones web responsivas y adaptativas se alinean perfectamente 
  con las mejores prácticas de la industria. Mi excelente comunicación en equipo, combinada con capacidades de liderazgo, 
  ha garantizado constantemente claridad y fomentado la colaboración en proyectos complejos. Mi trabajo con plataformas 
  de comunicación acentúa aún más mi versatilidad. Ofreciendo no solo las habilidades sino un enfoque experimentado e 
  innovador, estoy listo para generar un impacto significativo.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Nueva Helvecia, Uruguay', Icon: MapIcon},
    {label: 'Nacionalidad', text: 'Uruguayo 🇺🇾 / Español 🇪🇸', Icon: FlagIcon},
    {label: 'Intereses', text: 'Campo, Blockchain, cocina', Icon: SparklesIcon},
    {label: 'Estudios', text: 'Universidad de la República (UDELAR)', Icon: AcademicCapIcon},
  ],
};

/**
 * Sección de Habilidades
 */
export const skills: SkillGroup[] = [
  {
    name: 'Desarrollo Frontend',
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
    name: 'Desarrollo Backend',
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
        name: 'Solidity',
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
    name: 'Bases de datos',
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
    name: 'Idiomas',
    skills: [
      {
        name: 'Español',
        level: 10,
      },
      {
        name: 'Inglés',
        level: 10,
      },
      {
        name: 'Portugués',
        level: 6,
      },
    ],
  },
  {
    name: 'Experiencia adicional',
    skills: [
      {
        name: 'Metodologías ágiles',
        level: 9,
      },
      {
        name: 'Trabajo remoto',
        level: 10,
      },
      {
        name: 'Infraestructura de PC',
        level: 8,
      },
    ],
  },
];

/**
 * Sección de Portafolio
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FIBA WC-2023',
    description:
      'Colaboré en las diferentes capas de la aplicación de venta de entradas dentro de una arquitectura monorepo.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'Spartan',
    description:
      'Implementé un nuevo sistema de pago con Stripe. Mejoré la legibilidad del código y el pipeline de despliegue. Trabajé en middleware para normalizar datos.',
    url: 'https://uk.spartan.com/en',
    image: porfolioImage2,
  },
  {
    title: 'RYPT',
    description:
      'Lideré el rediseño de la arquitectura del front-end con Angular + Redux. También desarrollé APIs RESTful en Express.js.',
    url: 'https://www.rypt.app/',
    image: porfolioImage4,
  },
  {
    title: 'Funbox',
    description:
      'Creé un widget para vender entradas basado en una aplicación base, y rediseñé el tema para coincidir con las preferencias del cliente.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Microsoft Azure - RYPT',
    description: 'Gestioné y creé diferentes pipelines durante mi trabajo en RYPT.',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'Circus Vazquez',
    description: 'Widget de venta de entradas. Mejoré el pipeline de desarrollo. Desarrollé funcionalidades a pedido.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Stripe Payment',
    description: 'Implementé la pasarela de pago Stripe en RYPT, Spartan y otros proyectos.',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Jabber PRT - Cisco Systems',
    description:
      'Una de mis principales tareas durante mi pasantía en Cisco fue rediseñar y actualizar el PRT (Problem Resolve Tool) de Jabber.',
    url: 'https://www.youtube.com/watch?v=YbrFzbGkSjk',
    image: porfolioImage10,
  },
  {
    title: 'Careangel',
    description:
      'Desarrollé funcionalidades y corregí errores en la aplicación front-end en AngularJs mientras trabajaba en OneTree.',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'POC - Halo',
    description: 'Desarrollé una prueba de concepto de fila digital para sortear zapatillas de temporada.',
    url: '',
    image: porfolioImage7,
  },
];

export const portfolioItemsLiveDemos: PortfolioItem[] = [
  {
    title: 'Coin Rewarding dApp',
    description: 'Una dApp que recompensa a los usuarios con un Token Cripto QUIZ por completar una encuesta.',
    url: 'https://coin-rewarding-dapp.vercel.app/',
    image: portfolioLiveDemo1,
  },
];

/**
 * Sección de Currículum
 */
export const education: TimelineItem[] = [
  {
    date: '2018',
    location: 'Universidad de la República (UDELAR), Uruguay',
    title: 'Analista en Computación',
    content: (
      <p>
        Adquirí experiencia en algoritmos, estructuras de datos y programación. Profundicé en la optimización del
        rendimiento, la comprensión de los sistemas operativos y el dominio de los principios de ingeniería de software.
        Esta base me ha preparado para destacar en el ámbito tecnológico.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Febrero 2026 - Presente',
    location: 'AG Software - Nueva Helvecia, Uruguay',
    title: 'Fundador e Ingeniero Principal — Remi Wallet',
    content: (
      <>
        <p>
          Construí{' '}
          <a href="https://www.remiwallet.app" rel="noopener noreferrer" target="_blank">
            Remi Wallet
          </a>
          , un producto de remesas en USDC para corredores LATAM, bajo una subvención del ecosistema Hedera. En
          producción en mainnet con una rampa de salida a fiat a través de un socio de pagos regional en seis países.
        </p>
        <ul>
          <li>
            <span>• </span>API NestJS sobre Prisma/PostgreSQL con BullMQ en Redis, desplegada en Fly.io; frontend
            Next.js 14 App Router como PWA.
          </li>
          <li>
            <span>• </span>Contrato inteligente en Solidity en Hedera mainnet moviendo USDC a través del precompilado
            token-service, con claves de sesión bajo límites de gasto on-chain y una clave umbral 2-de-3 para
            operaciones administrativas.
          </li>
          <li>
            <span>• </span>Diseñé la máquina de estados de pagos: webhooks del socio conducen catorce estados externos a
            once internos, verificados con HMAC, deduplicados a nivel de esquema e idempotentes para que un webhook
            duplicado no pueda gastar doble.
          </li>
          <li>
            <span>• </span>Integré KYC de MetaMap con extracción de perfil por OCR; logging estructurado con redacción
            de PII, registro de auditoría inmutable y un pipeline de CI de seis jobs.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Mayo 2025 - Presente',
    location: 'Foodgawker (Amplify Tech Labs) - Chicago, EE.UU.',
    title: 'Ingeniero Full Stack',
    content: (
      <>
        <p>
          Modernicé Foodgawker desacoplando el sitio WordPress legado en una configuración headless: un frontend Next.js
          en Vercel consumiendo APIs REST personalizadas de WordPress. Entregué páginas más rápidas vía SSR/SSG/ISR y
          caché edge de Cloudflare manteniendo el admin WP existente intacto.
        </p>
        <ul>
          <li>
            <span>• </span>Diseñé el flujo de datos y autenticación: Cloudflare → Vercel Edge → Next.js Server
            Components con acciones de usuario respaldadas por JWT; WordPress sigue siendo la fuente de verdad.
          </li>
          <li>
            <span>• </span>Construí un plugin WP para gestionar los endpoints e integré SphinxSearch para búsqueda
            facetada y por relevancia.
          </li>
          <li>
            <span>• </span>Configuré entornos y CI/CD: staging→prod con builds de Vercel y releases protegidos; deploys
            WP vía DreamHost/SFTP con migraciones de BD.
          </li>
          <li>
            <span>• </span>Implementé una nueva arquitectura para el frontend usando Next.js, React.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Octubre 2023 - Diciembre 2025',
    location: 'Criptala - Montevideo, Uruguay',
    title: 'Consultor de Ingeniería de Software',
    content: (
      <>
        <p>Ayudé a analizar la arquitectura del producto, posibles banderas de seguridad y mejoras en los pipelines.</p>
      </>
    ),
  },
  {
    date: 'Enero 2024 - Diciembre 2024',
    location: 'KTO - Montevideo, Uruguay',
    title: 'Ingeniero Frontend',
    content: (
      <>
        <p>
          Mejoré los flujos de trabajo de desarrollo y produje documentación exhaustiva para las aplicaciones, al tiempo
          que desarrollé nuevas funcionalidades.
        </p>
        <ul>
          <li>
            <span>• </span>Mejoré los pipelines de desarrollo y añadí hooks para mejorar la mantenibilidad del código.
          </li>
          <li>
            <span>• </span>Creé documentación y generé nuevos flujos de desarrollo.
          </li>
          <li>
            <span>• </span>Integré soluciones KYC en la aplicación FE para cumplir con las regulaciones de licencia.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Septiembre 2021 - Septiembre 2023',
    location: 'Halo Media LLC - Nueva York, EE.UU. (remoto)',
    title: 'Desarrollador Full Stack',
    content: (
      <>
        <p>
          Desarrollé soluciones principalmente para una empresa de venta de entradas de marca blanca con tecnologías JS
          y aplicaciones embebidas.
        </p>
        <ul>
          <li>
            <span>• </span>Embebí aplicaciones React dentro de diferentes páginas web (Angular, React, Wordpress) para
            comprar entradas para conciertos o shows itinerantes.
          </li>
          <li>
            <span>• </span>Integré diferentes plataformas de pago como Stripe, Square, entre otras.
          </li>
          <li>
            <span>• </span>Trabajé y creé pipelines en Heroku y Netlify.
          </li>
          <li>
            <span>• </span>Lideré una comunidad de Grupo de Afinidad con más de 10 personas para mejorar la cultura de
            la empresa.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Agosto 2018 - Septiembre 2021',
    location: 'RYPT - Dublín, Irlanda',
    title: 'Desarrollador Full Stack y Líder Técnico',
    content: (
      <>
        <p>
          Líder técnico y arquitecto de la aplicación web Front End de RYPT. Una aplicación web que permite a los
          entrenadores hacer seguimiento de sus atletas y crear entrenamientos, ejercicios, gráficos de rendimiento y
          otras funcionalidades de BI en constante evolución.
        </p>
        <ul>
          <li>
            <span>• </span>Creé desde cero la aplicación Front End usando Angular 2, evolucionada y mantenida a través
            del tiempo hasta la última versión de Angular, con pipeline Docker en Microsoft Azure.
          </li>
          <li>
            <span>• </span>Implementé el método de pago con Stripe.
          </li>
          <li>
            <span>• </span>Creé un suite de tests en el pipeline de Microsoft Azure con Jest Framework sobre Puppeteer,
            un navegador headless.
          </li>
          <li>
            <span>• </span>Trabajé en el Back End basado en ExpressJs sobre NodeJS.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Febrero 2017 - Junio 2018',
    location: 'OneTree - Montevideo, Uruguay',
    title: 'Desarrollador Frontend',
    content: (
      <>
        <p>
          Ayudé a desarrollar diferentes proyectos de ingeniería ágil para empresas estadounidenses que buscaban
          excelente UX/UI y rendimiento.
        </p>
        <ul>
          <li>
            <span>• </span>Trabajé en diferentes proyectos con diversas tecnologías como AngularJS, Angular2+, NodeJs,
            React, etc.
          </li>
          <li>
            <span>• </span>Completé tareas detalladas de programación y desarrollo para front end y sitios web.
          </li>
          <li>
            <span>• </span>Aproveché mi experiencia en diseño y desarrollo de software con múltiples lenguajes de
            programación.
          </li>
        </ul>
      </>
    ),
  },
  {
    date: 'Marzo 2015 - Septiembre 2015',
    location: 'Cisco Systems Inc. - Galway, Irlanda',
    title: 'Pasante de Ingeniería de Software',
    content: (
      <>
        <p>
          Trabajé como Ingeniero de Software desarrollando una aplicación cliente para Windows llamada Jabber, usando el
          proceso de desarrollo Scrum.
        </p>
        <ul>
          <li>
            <span>• </span>Aprendí de ingenieros de primer nivel de Cisco sobre procesos de ingeniería de software y el
            ciclo de vida del desarrollo de productos.
          </li>
          <li>
            <span>• </span>Trabajé en un proyecto de ingeniería ágil a gran escala en un producto empresarial de alta
            calidad y usabilidad.
          </li>
          <li>
            <span>• </span>Programé en C# y .NET
          </li>
          <li>
            <span>• </span>Taller de depuración de archivos de volcado de Windows en ensamblador
          </li>
        </ul>
      </>
    ),
  },
];

/**
 * Sección de Testimonios
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Aengus Bates - compañero en Cisco',
      text: 'Tuve el placer de trabajar junto a Agustín durante seis meses mientras hacía su pasantía en Cisco, Galway. Durante ese tiempo demostró ser un desarrollador talentoso, plenamente capaz de entregar funcionalidades de calidad, testeadas y a tiempo. Fue un contribuyente sólido para el proyecto y, como persona amigable y extrovertida, también fue una adición positiva al equipo.',
      image: testimonialImageAengus,
    },
    {
      name: 'Cristina Bermúdez',
      text: 'Durante su tiempo en RYPT, demostró consistentemente una destreza técnica excepcional, impulsando iniciativas clave que fortalecieron el rendimiento de nuestra plataforma. ¡Un verdadero activo para el equipo!',
      image: testimonialImageCristina,
    },
    {
      name: 'Johnathan Franco - Líder Técnico',
      text: 'Sus enfoques innovadores en HALO no solo optimizaron nuestros procesos sino que también fomentaron un ambiente colaborativo. Su experiencia fue fundamental para el éxito de nuestro proyecto.',
      image: testimonialImageJohnathan,
    },
  ],
};

/**
 * Sección de Contacto
 */
export const contact: ContactSection = {
  headerText: 'Ponete en contacto.',
  description: 'No dudes en contactarme por correo electrónico o conectar conmigo en LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'becerra.gonzalez.agustin@gmail.com',
      href: 'mailto:becerra.gonzalez.agustin@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nueva Helvecia, Colonia, Uruguay',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'agustin-becerra-gonzalez',
      href: 'https://www.linkedin.com/in/agustin-becerra-gonzalez/',
    },
    {
      type: ContactType.Github,
      text: 'agusbece',
      href: 'https://github.com/agusbece',
    },
  ],
};

/**
 * Redes sociales
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: contact.items[3].href || ''},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/agustin-becerra-gonzalez/'},
];
