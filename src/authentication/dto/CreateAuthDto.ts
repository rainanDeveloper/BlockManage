
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
    @ApiProperty()
    login: string
    @ApiProperty()
    senha: string
}