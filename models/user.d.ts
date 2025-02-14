export interface AddressData {
  street: string;
  postcode: string;
  city: string;
  state: string;
  country: string;
}

export interface ContactData {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject: string;
  message: string;
}
