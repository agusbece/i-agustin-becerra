import * as en from './data.en';
import * as es from './data.es';
import {
  About,
  ContactSection,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export interface LocaleData {
  homePageMeta: HomepageMeta;
  heroData: Hero;
  aboutData: About;
  skills: SkillGroup[];
  portfolioItems: PortfolioItem[];
  portfolioItemsLiveDemos: PortfolioItem[];
  education: TimelineItem[];
  experience: TimelineItem[];
  testimonial: TestimonialSection;
  contact: ContactSection;
  socialLinks: Social[];
}

const localeMap: Record<string, LocaleData> = {en, es};

export function getLocaleData(locale: string): LocaleData {
  return localeMap[locale] ?? localeMap.en;
}

export type {SectionId as SectionIdType} from './data.en';
export {SectionId} from './data.en';
