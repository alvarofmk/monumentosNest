import { Monumento } from "../entities/monumento.entity";
import { CreateMonumentoDto } from "./create-monumento.dto";
import { UpdateMonumentoDto } from "./update-monumento.dto";

export class DtoMapper{

    updateToMonumento(updateMonumentoDto: UpdateMonumentoDto): Monumento{
        let resultado: Monumento;
        resultado.city = updateMonumentoDto.city;
        resultado.code = updateMonumentoDto.code;
        resultado.country = updateMonumentoDto.country;
        resultado.description = updateMonumentoDto.description;
        resultado.imgUrl = updateMonumentoDto.imgUrl;
        resultado.name = updateMonumentoDto.name;
        resultado.location = "lat: " + updateMonumentoDto.lat + ", long: " + updateMonumentoDto.lon;
        return resultado;
    }

    createToMonumento(createMonumentoDto: CreateMonumentoDto): Monumento{
        let resultado: Monumento;
        resultado.city = createMonumentoDto.city;
        resultado.code = createMonumentoDto.code;
        resultado.country = createMonumentoDto.country;
        resultado.description = createMonumentoDto.description;
        resultado.imgUrl = createMonumentoDto.imgUrl;
        resultado.name = createMonumentoDto.name;
        resultado.location = "lat: " + createMonumentoDto.lat + ", long: " + createMonumentoDto.lon;
        return resultado;
    }

}