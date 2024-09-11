import { model, Schema } from "mongoose";
const productSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const orderSchema = new Schema(
    {
        totalprice: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        products: [productSchema],
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Customer"
        }
    },
    {
        timestamps: true
    }
);

const orderModel = model("Order", orderSchema);

export default orderModel;