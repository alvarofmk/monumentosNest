import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentoService extends TypeOrmCrudService<Monumento> {

  constructor(@InjectRepository(Monumento) repository) {
    super(repository)
  }

}
