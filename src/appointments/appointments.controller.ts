import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { PostAppointmentDto } from './dtos/post-appointment.dto';
import { PatchAppointmentDto } from './dtos/patch-appointment.dto';
import { Appointment } from './models';

@Controller('v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
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
  ) {
    return this.appointmentsService.update(id, patchApointmentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.delete(id);
  }
}
