export interface IGeneralStats {
    totalEmployers: number;
    totalWorkers: number;
    totalSubscription: number;
    totalRevenue:string;
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


export type ISectionType = 'hero' | 'how-it-works' | 'why-us' | 'custom' | string
export const sectionTypeEnum ={
    HERO: 'hero',
    HOW_IT_WORKS: 'how-it-works',
    WHY_US: 'why-us',
    CUSTOM: 'custom',
}

export interface ISection  {
pageSlug: string
sectionType?: ISectionType
title: string
description: string
images?: string[]
content: any // dynamic payload: arrays, key-values, etc.
order: number
createdAt: Date
updatedAt: Date
}


export interface IPageData extends Document {
slug: string
name: string
sections: ISection[]
createdAt: Date
updatedAt: Date
}
