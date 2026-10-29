import { IsDateString, IsMilitaryTime, Length } from 'class-validator';
import { Barber } from '../models/Barber';
import { Service } from '../models/enums/Service';
import { IsStringAndIsNotEmpty } from '../decorators/string-validation-decorator';

export class PostAppointmentDto {
  @IsStringAndIsNotEmpty()
  readonly clientName: string;

  @IsStringAndIsNotEmpty()
  @Length(11, 11)
  readonly numberPhone: string;

  readonly barber: Barber;
  readonly service: Service;

  @IsDateString()
  readonly date: string;
  @IsMilitaryTime()
  readonly hora: string;
}
