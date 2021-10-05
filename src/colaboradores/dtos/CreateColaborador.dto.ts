import { ApiProperty } from "@nestjs/swagger"

export class CreateColaboradorDto {
    @ApiProperty()
	nome: string
    @ApiProperty()
	cargo: string
    @ApiProperty()
	admissao: Date
    @ApiProperty()
	status: number
}