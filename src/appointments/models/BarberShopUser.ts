import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BarberShopUser {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ unique: true })
  private user: string;

  @Column()
  private password: string;

  constructor(user: string, password: string) {
    this.user = user;
    this.password = password;
  }

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
