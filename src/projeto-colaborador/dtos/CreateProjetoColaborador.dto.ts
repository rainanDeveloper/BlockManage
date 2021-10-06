import { ApiProperty } from "@nestjs/swagger"

export class CreateProjetoColaboradorDto {
	@ApiProperty()
    projetoId: number
	@ApiProperty()
    colaboradorId: number	
	@ApiProperty()
    inicio: Date
	@ApiProperty()
    fim: Date
}