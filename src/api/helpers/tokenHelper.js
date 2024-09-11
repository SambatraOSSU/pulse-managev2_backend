/* eslint-disable import/no-anonymous-default-export */
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const secretKey = process.env.SECRET_KEY;
console.log(secretKey);

class TokenHelper {
    constructor(secretkey){
        this.secretkey = secretkey;
        
    }

    async generateToken(id){
        try {

            const token = jwt.sign({ customerId: `${id}` }, this.secretkey, {
                expiresIn: "365d",
            });
            console.log(token);
            
            return token;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new TokenHelper(secretKey);