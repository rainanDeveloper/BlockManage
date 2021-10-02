
import * as dotenv from 'dotenv'
import { hash } from 'bcrypt'

dotenv.config()

export class Hashing {

    public static async hashPassword(password: string){
        const hashRounds: number = parseInt(process.env.HASH_ROUNDS) || 14

        return await hash(password, hashRounds)
    }

}