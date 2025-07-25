import { faker } from '@faker-js/faker';
import type { UserCreateRequest } from '../models/api-models/models';
export class UserBuilder {
  private data: UserCreateRequest = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      postal_code: faker.location.zipCode()
    },
    phone: faker.phone.number(),
    password: faker.internet.password({ prefix: 'A1!a' }),
    email: `test+${faker.string.uuid()}@test.com`
  };

  withFirstName(firstName: string) {
    this.data.first_name = firstName;
    return this;
  }
  withLastName(lastName: string) {
    this.data.last_name = lastName;
    return this;
  }
  withEmail(email: string) {
    this.data.email = email;
    return this;
  }
  withPassword(password: string) {
    this.data.password = password;
    return this;
  }
  withPhone(phone: string) {
    this.data.phone = phone;
    return this;
  }
  withAddress(address: UserCreateRequest['address']) {
    this.data.address = address;
    return this;
  }
  build() {
    return { ...this.data, address: { ...this.data.address } };
  }
}
