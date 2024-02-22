import { IsOptional, IsString } from 'class-validator';

export class CategorySearchDto {
  @IsString()
  @IsOptional()
  cateNm: string;

  @IsString()
  @IsOptional()
  cateCd: string;
}
