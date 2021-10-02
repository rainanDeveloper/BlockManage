import { ApiProperty } from "@nestjs/swagger"

export class CreateUsuarioDto {
    @ApiProperty()
    login: string
    @ApiProperty()
    senha: string
}