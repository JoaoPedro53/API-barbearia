import { Barber } from '../../models/Barber';
import { Service } from '../../models/enums/Service';

export class PatchAppointmentDto {
  readonly clientName?: string;
  readonly numberPhone?: string;
  readonly barber?: Barber;
  readonly service?: Service;
  readonly date?: string | Date;
  readonly hora?: string;
}
