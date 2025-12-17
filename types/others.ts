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
  ABOUT_HERO: "about-hero",
  ABOUT_WHY_US: "about-why-us",
  HOW_IT_WORKS: "how-it-works",
  WHO_WE_ARE: "who-we-are",
  OUR_MISSION: "our-mission",
  OUR_VISION: "our-vision",
  WHERE_WE_OPERATE: "where-we-operate",
  HOW_IT_WORKS_WORKER: "how-it-works-worker",
  WHY_US: "why-us",
  JOB_RESPONSE: "job-response",
  CONTACT_US: "contact-us",
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

export type IPublic = {
  content: string;
  type: string;
};

export type IFaq = {
  _id?: string;
  question: string;
  answer: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export enum PUBLIC_TYPES {
  TERMS_AND_CONDITIONS = "terms-and-condition",
  PRIVACY_POLICY = "privacy-policy",
  ABOUT_US = "about-us",
}

export interface IContact {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  country?: string;
  message: string;
  feedback?: string;
  isSolved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IClientreview {
  _id: string;
  image: string;
  name: string;
  designation: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPackage extends Document {
  _id?: string;
  type: string;
  regularPrice: number;
  discountPercent: number;
  stripeProductId: string;
  stripePriceId: string;
  stripeCouponId?: string;
  description?: string;
  isInstantBooking?: boolean;
  interval?: "month" | "year";
  limits: {
    jobPostLimit?: number;  // -1 means unlimited
    bookingLimit?: number;  // -1 means unlimited
    boostLimit?: number;    // -1 means unlimited
  };
  currency?: string;
  features?: string[];
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICoupon {
  _id?: string;
  description?: string;
  percent_off: number;
}