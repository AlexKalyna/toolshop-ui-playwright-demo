interface ProductImage {
  by_name: string;
  by_url: string;
  source_name: string;
  source_url: string;
  file_name: string;
  title: string;
  id: string;
}

interface Category {
  id: string;
  parent_id: string;
  name: string;
  slug: string;
}

interface Brand {
  id: string;
  name: string;
  slug: string;
}

interface ProductDetails {
  id: string;
  name: string;
  description: string;
  price: number;
  is_location_offer: number;
  is_rental: number;
  brand: Brand;
  category: Category;
  product_image: ProductImage;
}

export interface ProductResopnse {
  product: string;
  created_at: string;
  id: ProductDetails;
}
