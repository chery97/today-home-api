import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cateNm: string;

    @Column()
    cateCd: string;

    @Column({ nullable: true, default: null })
    goodsNo: number | null;

    @Column({ nullable: true, default: null })
    regDt: Date;

    @Column({ nullable: true, default: null })
    updateDt: Date | null;
}