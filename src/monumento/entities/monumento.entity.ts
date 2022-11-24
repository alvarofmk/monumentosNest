import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monumento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column()
    imgUrl: string;

}
