import { Controller, Get, Post, Body, Patch, Param, Delete, OnApplicationBootstrap } from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { Monumento } from './entities/monumento.entity';
import { CreateManyDto, Crud, CrudController, CrudRequest, CrudRequestInterceptor, CrudService, GetManyDefaultResponse } from '@nestjsx/crud';

@Crud({
  model: {
    type: Monumento
  }
})
@Controller('monumento')
export class MonumentoController implements CrudController<Monumento> {
  constructor(public service: MonumentoService) {}
  
}
