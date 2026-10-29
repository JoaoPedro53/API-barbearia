import { IsDateString, IsInt, IsMilitaryTime, Length } from 'class-validator';
import { IsStringAndIsNotEmpty } from '../decorators/string-validation-decorator';

export class PostAppointmentDto {
  @IsStringAndIsNotEmpty()
  readonly clientName: string;

  @IsStringAndIsNotEmpty()
  @Length(11, 11)
  readonly numberPhone: string;

  @IsInt()
  readonly barberId: number;

  @IsInt()
  readonly serviceId: number;

  @IsDateString()
  readonly date: string;
  @IsMilitaryTime()
  readonly hora: string;
}
