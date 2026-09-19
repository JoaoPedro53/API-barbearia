import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from './models';
import { AppointmentPostRequest } from './dtos';

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

  findById(id: string): Appointment {
    const appointment = this.appointments.find(
      appointment => appointment.getId() === +id,
    );

    if (appointment) return appointment;
    this.throwNotFoundException();
  }

  create(appointmentDTO: AppointmentPostRequest): AppointmentPostRequest {
    const id = this.lastId++;
    const idBarberShop = this.lastIdBarberShop++;

    const appointmentForPush = new Appointment(
      id,
      idBarberShop,
      appointmentDTO.clientName,
      appointmentDTO.numberPhone,
      appointmentDTO.barber,
      appointmentDTO.service,
      new Date(appointmentDTO.date),
      appointmentDTO.hora,
    );

    this.appointments.push(appointmentForPush);
    return appointmentDTO;
  }

  update(id: string, body: any) {
    const appointmentIndex = this.appointments.findIndex(
      appointment => appointment.getId() === +id,
    );

    if (appointmentIndex < 0) this.throwNotFoundException();

    const apoimentExist = this.appointments[appointmentIndex];
    this.appointments[appointmentIndex] = {
      ...apoimentExist,
      ...body,
    };

    return this.appointments[appointmentIndex];
  }

  delete(id: string) {
    const appointmentIndex = this.appointments.findIndex(
      appointment => appointment.getId() === +id,
    );

    if (appointmentIndex < 0) this.throwNotFoundException();

    const appointment = this.appointments[appointmentIndex];
    this.appointments.splice(appointmentIndex, 1);

    return appointment;
  }
}
