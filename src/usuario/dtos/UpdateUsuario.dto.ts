import { ApiProperty } from "@nestjs/swagger"

export class UpdateUsuarioDto {
    @ApiProperty()
    login: string
    @ApiProperty()
    senha: string
    @ApiProperty()
    status: number
}