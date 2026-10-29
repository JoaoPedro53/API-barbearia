export class BarberShopUser {
  constructor(
    private id: number,
    private user: string,
    private password: string,
  ) {}

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
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
