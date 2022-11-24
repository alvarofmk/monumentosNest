import { PartialType } from '@nestjs/mapped-types';
import { CreateMonumentoDto } from './create-monumento.dto';

export class UpdateMonumentoDto extends PartialType(CreateMonumentoDto) {

    code: string;
    name: string;
    city: string;
    country: string;
    lat: number;
    lon: number;
    description: string;
    imgUrl: string;

}
