/* eslint-disable import/no-anonymous-default-export */
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

class tokenHelper {
    constructor(secretkey){
        this.secretkey = secretkey;
    }

    async generateToken(){
        try {
            const token = jwt.sign({ customerId: `${id}` }, this.secretkey, {
                expiresIn: "365d",
            });
            return token;
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default new tokenHelper(secretKey);