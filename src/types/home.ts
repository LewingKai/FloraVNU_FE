export interface Flower {
  id: string;
  image: ImageType;
  name: string;
  description: string;
  price: string;
  alt: string;
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
  priceMax?: Number;
  sort?: string;
  searchType?: string;
  keyword?: string;
  page?: string;
  priceMin?: Number;
}

export const enumSortType = {
  priceIncreases: "desc",
  priceDecrease: "asc",
};
