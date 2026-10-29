export class Service {
  constructor(
    private id: number,
    private name: string,
    private price: number,
    private active: boolean,
  ) {}

  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
  getStatus(): boolean {
    return this.active;
  }
  setId(id: number): void {
    this.id = id;
  }
  setName(name: string): void {
    this.name = name;
  }
  setPrice(price: number): void {
    this.price = price;
  }
  setActive(active: boolean): void {
    this.active = active;
  }
}
