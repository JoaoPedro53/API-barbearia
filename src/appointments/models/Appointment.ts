import { Barber, Service } from './index.js';

export class Appointment {
  constructor(
    private id: number,
    private idBarberShop: number,
    private clientName: string,
    private numberPhone: string,
    private barber: Barber,
    private service: Service,
    private date: Date,
    private hora: string,
  ) {}

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getIdBarberShop(): number {
    return this.idBarberShop;
  }

  setIdBarberShop(idBarberShop: number): void {
    this.idBarberShop = idBarberShop;
  }

  getClientName(): string {
    return this.clientName;
  }

  setClientName(clientName: string): void {
    this.clientName = clientName;
  }

  getNumberPhone(): string {
    return this.numberPhone;
  }

  setNumberPhone(numberPhone: string): void {
    this.numberPhone = numberPhone;
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
