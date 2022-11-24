import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './entities/monumento.entity';
import { CreateManyDto, Crud, CrudController, CrudRequest, CrudService, GetManyDefaultResponse } from '@nestjsx/crud';

@Crud({
  model: {
    type: Monumento
  }
})
@Controller('monumento')
export class MonumentoController implements CrudController<Monumento> {
  constructor(public service: MonumentoService) {}
  
}
