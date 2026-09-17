export class BarberShopUser {
  constructor(
    private user: string,
    private password: string,
  ) {}

  getUser(): string {
    return this.user;
  }
  getPassword(): string {
    return this.password;
  }
  setUser(user: string): void {
    this.user = user;
  }
  setPassword(password: string): void {
    this.password = password;
  }
}
