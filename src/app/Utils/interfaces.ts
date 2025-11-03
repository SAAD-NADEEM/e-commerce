export interface Fetchdata {
  _id: string;
  name: string;
  details: string;
  tags: string[];
  image: string;
}

export interface ProductCardTypes {
  _id: string;
  name: string;
  details: string;
  price: number;
  image: string;
  reviewsCount: number;
}

export interface Product {
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
