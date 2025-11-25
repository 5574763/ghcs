export interface NavItem {
  label: string;
  path: string;
}

export interface ProductSpec {
  model: string;
  capacity: number; // RTh
  flowRate: number; // m3/h
  pressureDrop: number; // kPa
  volume: number; // L
  dimensions: string; // LxWxH
  connection: string; // DN
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  description: string;
  stats: {
    area: string;
    capacity: string;
    thickness: string;
  };
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}