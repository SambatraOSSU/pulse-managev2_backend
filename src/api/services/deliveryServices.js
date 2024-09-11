import deliveryModel from "../models/deliveryModel.js";
class deliveryServices {
    async addDeliveryService(deliveryData) {
        try {
            const newDelivery = new deliveryModel({ ...deliveryData });
            return await newDelivery.save();
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export default new deliveryServices();