import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getStatus() {
		return {
			statusCode: 200,
			status: "Ok",
			message: "Api Running"
		};
	}
}
