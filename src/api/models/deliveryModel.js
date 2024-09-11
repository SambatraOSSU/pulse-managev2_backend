import { model, Schema, Types } from "mongoose";
const deliverySchema = new Schema(
    {
        adress: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)
const deliveryModel = model("Livraison", deliverySchema);
export default deliveryModel;