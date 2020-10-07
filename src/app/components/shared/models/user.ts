export class User {
  // поля по умолчанию публичные, можно не писать модификатор
  public firstName: string;
  public lastName: string;
  public country: string;
  public city: string;
  public street: string;
  public zip: string;

  constructor(public id: number, public login: string, public email: string) { }
}
