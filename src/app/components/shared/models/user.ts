export class User {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  zip: string;

  constructor(public id: number, public login: string, public email: string) {}
}
