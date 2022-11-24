import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monumento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty()
    code: string;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    city: string;

    @Column()
    @ApiProperty()
    country: string;

    @Column()
    @ApiProperty()
    location: string;

    @Column()
    @ApiProperty()
    description: string;

    @Column()
    @ApiProperty()
    imgUrl: string;

}
