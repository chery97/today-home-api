import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Entity()
export class category {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  cateNm: string;

  @IsString()
  @Column()
  cateCd: string;

  @Column({ default: null })
  @IsNumber()
  @IsOptional()
  goodsNo: number | null;

  @IsOptional()
  @Column({ default: null })
  regDt: Date;

  @IsOptional()
  @Column({ default: null })
  updateDt: Date | null;
}
