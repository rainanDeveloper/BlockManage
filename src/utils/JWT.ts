import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'

const defaultSecret = crypto.randomBytes(64).toString('base64')

export class JWT {

    private secret: string
    private expiration: string

    public _constructor(secret?: string, expiration?: string){
        if(!secret){
            this.secret = process.env.JWT_SECRET || defaultSecret
        }
        else{
            this.secret = secret
        }

        if(!expiration){
            this.expiration = process.env.JWT_EXPIRATION || '1d'
        }
        else{
            this.expiration = expiration
        }
    }
    
    public generateToken(data){
        return jwt.sign(data, this.secret, { expiresIn: this.expiration })
    }

    public tokenValidation(token: string){
        return jwt.verify(token, this.secret)
    }
    
    public static staticGenerateToken(data){

        const secret: string = process.env.JWT_SECRET || defaultSecret
        const expiration: string = process.env.JWT_EXPIRATION || '1d'

        if(!data){
            throw new Error("Não é possível criar token JWT sem informar dados")
        }

        return jwt.sign(data, secret, { expiresIn: expiration })
    }

    public static staticTokenValidation(token: string){
        const secret: string = process.env.JWT_SECRET || defaultSecret

        if(!token){
            throw new Error("Não é possível criar token JWT sem informar dados")
        }

        return jwt.verify(token, secret)
    }
}