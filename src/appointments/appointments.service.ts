import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentsService {
  findAll(): string {
    return '';
  }

  findById(id: number): number {
    return id;
  }
}
