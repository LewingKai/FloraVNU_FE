export interface Flower {
  _id: string;
  image: ImageType;
  name: string;
  description: string;
  price?: string;
  alt: string;
  rating?: number;
  stockQuantity?: number;
  types?: [string];
}

type ImageType = {
  url: string;
  public_id: string;
};

export interface SearchParamsType {
  limit?: string;
  forms?: string;
  occasions?: string;
  types?: string;
  priceMax?: number;
  sort?: string;
  searchType?: string;
  keyword?: string;
  page?: string;
  priceMin?: number;
}

export const enumSortType = {
  priceIncreases: "desc",
  priceDecrease: "asc",
};
