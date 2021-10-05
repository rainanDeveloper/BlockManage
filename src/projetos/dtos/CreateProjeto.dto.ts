import { ApiProperty } from "@nestjs/swagger"

export class CreateProjetoDto {
	@ApiProperty()
	nome: string
	@ApiProperty()
	descricao: string
	@ApiProperty()
	inicio: Date
	@ApiProperty()
	fim: Date
	@ApiProperty()
	status: number
}