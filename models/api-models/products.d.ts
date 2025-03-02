export type ProductData = {
  current_page: number;
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    is_location_offer: number;
    is_rental: number;
    brand: {
      id: string;
      name: string;
      slug: string;
    };
    category: {
      id: string;
      parent_id: string;
      name: string;
      slug: string;
    };
    product_image: {
      by_name: string;
      by_url: string;
      source_name: string;
      source_url: string;
      file_name: string;
      title: string;
      id: string;
    };
  }[];
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};
