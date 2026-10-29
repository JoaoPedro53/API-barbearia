import { applyDecorators } from '@nestjs/common';
import { IsString, IsNotEmpty } from 'class-validator';

export function IsStringAndIsNotEmpty() {
  return applyDecorators(IsString(), IsNotEmpty());
}
