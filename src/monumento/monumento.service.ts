import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { DtoMapper } from './dto/dtoMapper';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService extends TypeOrmCrudService<Monumento> {

  constructor(@InjectRepository(Monumento) repository) {
    super(repository)
  }

}
