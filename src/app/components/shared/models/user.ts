export class User {
  public firstName: string;
  public lastName: string;
  public country: string;
  public city: string;
  public street: string;
  public zip: string;

  constructor(public id: number, public login: string, public email: string) {}
}
