// Base interface for all test data
export interface BaseTestData {
  id: string;
  createdAt: Date;
}

// User test data
export interface UserTestData extends BaseTestData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phone?: string;
}

// Product test data
export interface ProductTestData extends BaseTestData {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl?: string;
}

// Contact form test data
export interface ContactTestData extends BaseTestData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  attachmentPath?: string;
}
