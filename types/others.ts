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