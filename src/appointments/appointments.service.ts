import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment, Barber, BarberShopUser, Service } from './models';
import { PostAppointmentDto } from './dtos/post-appointment.dto';
import { PatchAppointmentDto } from './dtos/patch-appointment.dto';

@Injectable()
export class AppointmentsService {
  private lastId = 1;
  private lastIdBarberShop = 1;

  private appointments: Appointment[] = [];

  throwNotFoundException() {
    throw new NotFoundException('Agendamento não encontrado!');
  }

  findAll(): Appointment[] {
    return this.appointments;
  }

  findById(id: number): Appointment {
    const appointment = this.appointments.find(
      appointment => appointment.getId() === id,
    );

    if (appointment) return appointment;
    this.throwNotFoundException();
  }

  create(postAppointmentDTO: PostAppointmentDto): Appointment {
    const id = this.lastId++;

    const barberShop = new BarberShopUser('Jk', '123');
    const barber = new Barber('João', '82999999999', '11111111111');
    const service = new Service('Social', 30, true);

    const appointment = new Appointment(
      id,
      barberShop,
      postAppointmentDTO.clientName,
      postAppointmentDTO.numberPhone,
      barber,
      service,
      new Date(postAppointmentDTO.date),
      postAppointmentDTO.hora,
    );

    this.appointments.push(appointment);
    return appointment;
  }

  update(id: string, patchAppointmentDto: PatchAppointmentDto) {
    const appointmentIndex = this.appointments.findIndex(
      appointment => appointment.getId() === +id,
    );

    if (appointmentIndex < 0) this.throwNotFoundException();

    Object.assign(this.appointments[appointmentIndex], patchAppointmentDto); // solução temporaria, por f/ de get e setes nos dtos

    return this.appointments[appointmentIndex];
  }

  delete(id: number) {
    const appointmentIndex = this.appointments.findIndex(
      appointment => appointment.getId() === id,
    );

    if (appointmentIndex < 0) this.throwNotFoundException();

    const appointment = this.appointments[appointmentIndex];
    this.appointments.splice(appointmentIndex, 1);

    return appointment;
  }
}
