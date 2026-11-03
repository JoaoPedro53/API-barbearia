import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Barber {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column({ type: 'varchar', length: '11' })
  private phoneNumber: string;

  @Column({ type: 'varchar', length: '11', unique: true })
  private cpf: string;

  constructor(name: string, phoneNumber: string, cpf: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.cpf = cpf;
  }

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
