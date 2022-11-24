import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { DtoMapper } from './dto/dtoMapper';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService {

  constructor(@InjectRepository(Monumento) private monumentoRepository: Repository<Monumento>) { }

  create(createMonumentoDto: CreateMonumentoDto) {
    return "";
  }

  findAll() {
    return this.monumentoRepository.find();
  }

  findOne(id: number) {
    return this.monumentoRepository.findOneBy({ id });
  }

  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    return "";
  }

  remove(id: number) {
    return this.monumentoRepository.delete(id);
  }
}
