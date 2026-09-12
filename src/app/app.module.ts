import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentsModule } from '../appointments/appointments.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AppointmentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
