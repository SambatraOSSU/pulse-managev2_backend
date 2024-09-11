import { Document, Model } from "mongoose";
import customerModel from "../models/customerModel.js";

class userServices {
    constructor(model) {
        this.model = model;
    }
    async verifyEmail(email) {
        try {
            const user = await this.model.findOne({ email });
            return user;
        } catch (err) {
            throw new Error(err);
        }
    }
}
export default new userServices(customerModel)