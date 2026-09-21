import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from './models';
import { PostAppointmentDto } from './dtos';
import { PatchAppointmentDto } from './dtos';

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

  create(postAppointmentDTO: PostAppointmentDto): Appointment {
    const id = this.lastId++;
    const idBarberShop = this.lastIdBarberShop++;

    const appointment = new Appointment(
      id,
      idBarberShop,
      postAppointmentDTO.clientName,
      postAppointmentDTO.numberPhone,
      postAppointmentDTO.barber,
      postAppointmentDTO.service,
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
