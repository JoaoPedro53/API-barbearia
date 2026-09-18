import { Barber } from '../../models/Barber';
import { Service } from '../../models/enums/Service';

export class AppointmentPostRequest {
  clientName: string;
  numberPhone: string;
  barber: Barber;
  service: Service;
  date: string | Date;
  hora: string;
}
