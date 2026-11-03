import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  private price: number;

  @Column({ default: true })
  private active: boolean;

  constructor(name: string, price: number, active: boolean) {
    this.name = name;
    this.price = price;
    this.active = active;
  }

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
