import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dtos/createUsuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    findAll(){
        return this.usuarioService.findAll()
    }

    @Get(':id')
    @ApiParam({name: 'id', required: true, description: 'Identificador numérico do usuário na base de dados', schema: { type: 'integer'}})
    async findOne(@Param('id') id: number){
        const usuario = await this.usuarioService.findOne(id)

        if(!usuario){
            throw new NotFoundException('User not found!')
        }

        return usuario
    }

    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto){

    }
    
}
