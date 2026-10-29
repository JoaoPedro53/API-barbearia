import { PartialType } from '@nestjs/mapped-types';
import { PostAppointmentDto } from './post-appointment.dto';

export class PatchAppointmentDto extends PartialType(PostAppointmentDto) {}
