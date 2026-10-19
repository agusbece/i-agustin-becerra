export const translations = {
  en: {
    aboutMe: 'About me',
    skills: 'Skills',
    work: 'Work',
    education: 'Education',
    checkOutWork: 'Check out some of my work',
    orLiveDemos: 'or some Live Demos',
    copyright: '© Copyright 2023 Agustin Becerra',
    sendMessage: 'Send Message',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email',
    messagePlaceholder: 'Message',
    submitAriaLabel: 'Submit contact form',
    formNotReady: "Sorry we don't have this feature yet! :(",
    menuButton: 'Menu Button',
    openSidebar: 'Open sidebar',
    navLabels: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      contact: 'Contact',
    } as Record<string, string>,
  },
  es: {
    aboutMe: 'Sobre mí',
    skills: 'Habilidades',
    work: 'Experiencia',
    education: 'Educación',
    checkOutWork: 'Mirá algunos de mis trabajos',
    orLiveDemos: 'o algunas demos en vivo',
    copyright: '© Copyright 2023 Agustín Becerra',
    sendMessage: 'Enviar mensaje',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo electrónico',
    messagePlaceholder: 'Mensaje',
    submitAriaLabel: 'Enviar formulario de contacto',
    formNotReady: '¡Lo sentimos, esta función aún no está disponible! :(',
    menuButton: 'Botón de menú',
    openSidebar: 'Abrir menú lateral',
    navLabels: {
      about: 'Sobre mí',
      resume: 'Currículum',
      portfolio: 'Portafolio',
      testimonials: 'Testimonios',
      contact: 'Contacto',
    } as Record<string, string>,
  },
} as const;

export type Translations = {
  aboutMe: string;
  skills: string;
  work: string;
  education: string;
  checkOutWork: string;
  orLiveDemos: string;
  copyright: string;
  sendMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitAriaLabel: string;
  formNotReady: string;
  menuButton: string;
  openSidebar: string;
  navLabels: Record<string, string>;
};
