export interface IGeneralStats {
  totalEmployers: number;
  totalWorkers: number;
  totalSubscription: number;
  totalRevenue: string;
}

export interface IPlatformRevenue {
  month: number;
  revenue: string;
}

export interface ICategory {
  _id: string;
  title: string;
  icon: string;
  subCategories: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateCategory {
  title: string;
  icon: string;
  subCategories: string[];
}

export type ISectionType =
  | "hero"
  | "how-it-works"
  | "why-us"
  | "custom"
  | string;
export const SECTION_TYPES = {
  HERO: "hero",
  HOW_IT_WORKS: "how-it-works",
  HOW_IT_WORKS_WORKER: "how-it-works-worker",
  WHY_US: "why-us",
  JOB_RESPONSE: "job-response",
  CUSTOM: "custom",
};
export const PAGE_SLUGS = {
  HOME: "home",
  ABOUT: "about",
  CONTACT: "contact",
};

export interface ISection {
  _id: string;
  pageSlug: string;
  sectionType?: ISectionType;
  title: string;
  description: string;
  images?: string[];
  content: any; // dynamic payload: arrays, key-values, etc.
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPageData extends Document {
  slug: string;
  name: string;
  sections: ISection[];
  createdAt: Date;
  updatedAt: Date;
}
