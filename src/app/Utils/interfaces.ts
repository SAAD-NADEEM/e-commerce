export interface Fetchdata {
  _id: string;
  name: string;
  details: string;
  tags: string[];
  image: string;
}

export interface Best_sellers_type {
  _id: string;
  name: string;
  price: number;
  image: string;
  reviewsCount: number;
}

export interface product_detaials_type {
  _id: string;
  price: number;
  reviewsCount: number;
  name: string;
  image: string[];
  details: string;
  tags: string[];
  category: {
    name: string;
  };
  subCategory: {
    name: string;
  };
}
