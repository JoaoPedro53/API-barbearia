import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment, Barber, Service } from './models';
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
    const idBarberShop = this.lastIdBarberShop++;

    const barber = new Barber(
      postAppointmentDTO.barberId,
      `Barbeiro Nº ${postAppointmentDTO.barberId}`,
      '82999999999',
      '000.000.000-00',
    );

    const service = new Service(
      postAppointmentDTO.serviceId,
      `Serviço Nº ${postAppointmentDTO.serviceId}`,
      50.0,
      true,
    );

    const appointment = new Appointment(
      id,
      idBarberShop,
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
