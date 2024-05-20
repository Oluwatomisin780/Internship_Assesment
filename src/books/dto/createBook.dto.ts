import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  title: string;
  @IsNumber()
  @ApiProperty()
  year: number;
  @IsString()
  @ApiProperty()
  author: string;
}
