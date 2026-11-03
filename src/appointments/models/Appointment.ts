import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Barber, BarberShopUser, Service } from './index.js';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  private id: number;

  @ManyToOne(() => BarberShopUser)
  @JoinColumn({ name: 'barberShop_id' })
  private BarberShop: BarberShopUser;

  @Column({ type: 'varchar' })
  private clientName: string;

  @Column({ type: 'varchar', length: '11' })
  private clientNumberPhone: string;

  @ManyToOne(() => Barber)
  @JoinColumn({ name: 'barber_id' })
  private barber: Barber;

  @ManyToOne(() => Service)
  @JoinColumn({ name: 'service_id' })
  private service: Service;

  @Column({ type: 'date' })
  private date: Date;

  @Column({ type: 'varchar' })
  private hora: string;

  constructor(
    id: number,
    BarberShop: BarberShopUser,
    clientName: string,
    clientNumberPhone: string,
    barber: Barber,
    service: Service,
    date: Date,
    hora: string,
  ) {
    this.id = id;
    this.BarberShop = BarberShop;
    this.clientName = clientName;
    this.clientNumberPhone = clientNumberPhone;
    this.barber = barber;
    this.service = service;
    this.date = date;
    this.hora = hora;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getIdBarberShop(): BarberShopUser {
    return this.BarberShop;
  }

  setIdBarberShop(barberShop: BarberShopUser): void {
    this.BarberShop = barberShop;
  }

  getClientName(): string {
    return this.clientName;
  }

  setClientName(clientName: string): void {
    this.clientName = clientName;
  }

  getNumberPhone(): string {
    return this.clientNumberPhone;
  }

  setNumberPhone(numberPhone: string): void {
    this.clientNumberPhone = numberPhone;
  }

  getBarber(): Barber {
    return this.barber;
  }

  setBarber(barber: Barber): void {
    this.barber = barber;
  }

  getService(): Service {
    return this.service;
  }

  setService(service: Service): void {
    this.service = service;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }

  getHora(): string {
    return this.hora;
  }

  setHora(hora: string): void {
    this.hora = hora;
  }
}
