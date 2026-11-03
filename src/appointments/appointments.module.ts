import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment, Barber, BarberShopUser, Service } from './models';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment, Barber, BarberShopUser, Service]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
