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
import { AppointmentPostRequest } from './dtos';

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
  create(
    @Body() appointmentPostRequest: AppointmentPostRequest,
  ): AppointmentPostRequest {
    return this.appointmentsService.create(appointmentPostRequest);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.appointmentsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.appointmentsService.delete(id);
  }
}
