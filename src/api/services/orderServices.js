import orderModel from "../models/orderModel.js";
class addOrderServices {
    async addOrderServices(orderData) {
        try {
            const newOrder = new orderModel({ ...orderData });
            return await newOrder.save();
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
export default new addOrderServices();