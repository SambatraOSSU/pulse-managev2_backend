import userServices from "../services/userServices.js";
import authServices from "../services/authServices.js";
import tokenHelper from "../helpers/tokenHelper.js";
import passwordHelper from "../helpers/passwordHelper.js";
class AuthControlller {
    async register(req,res){
        try {
            const { email,password } = req.body;
            console.log(req.body);
            
            const emailExist = await userServices.verifyEmail(email);
            const hashedPassword = await passwordHelper.hashPassword(password)
            if (emailExist) {
                return res.status(400).json("email already exists");
            }

            const newUser = await authServices.registerService({...req.body,password:hashedPassword});
            if (newUser) {
                // const token = tokenHel    er.generateToken(newUser._id);
                return res
                    .status(200)
                    .json({ message: "UsedAdd sucessFull" });
            }
            else {
                return res
                    .status(400)
                    .json({ message: "An error occurred in authController" });
            }
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ message: "erreur" });
        }
    }
    async login(req,res){
        try {
            const customer = await authServices.loginService(req.body);


            // if (!customer) {
            //     res.status(400).json("email does not exist or the password is incorrect...")
            // }
            const token = tokenHelper.generateToken(customer.id.toString())
            return res.status(200).json({ message: "User login successfully", customer, token });
        }
        catch (err) {
            console.error(err);
            return res.status(500).json({ message: err.message });
        }
    }
}
export default new AuthControlller();