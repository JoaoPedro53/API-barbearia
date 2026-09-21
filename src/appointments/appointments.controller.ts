import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { PostAppointmentDto } from './dtos';
import { PatchAppointmentDto } from './dtos';
import { Appointment } from './models';

@Controller('v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(): any {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): any {
    return this.appointmentsService.findById(id);
  }

  @Post()
  create(@Body() postAppointment: PostAppointmentDto): Appointment {
    return this.appointmentsService.create(postAppointment);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() patchApointmentDto: PatchAppointmentDto,
  ): any {
    return this.appointmentsService.update(id, patchApointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.appointmentsService.delete(id);
  }
}
