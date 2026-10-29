export class Barber {
  constructor(
    private id: number,
    private name: string,
    private phoneNumber: string,
    private cpf: string,
  ) {}

  getId(): number {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  getCpf(): string {
    return this.cpf;
  }
  setCpf(cpf: string): void {
    this.cpf = cpf;
  }
}
