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

@Controller('v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  findAll(): string {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): number {
    return this.appointmentsService.findById(id);
  }

  @Post()
  create(@Body() body: JSON) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: JSON) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return id;
  }
}
