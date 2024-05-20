import { IsNumber, IsString } from 'class-validator';

export class UpdateBook {
  @IsString()
  title: string;
  @IsNumber()
  year: number;
  @IsString()
  author: string;
}
