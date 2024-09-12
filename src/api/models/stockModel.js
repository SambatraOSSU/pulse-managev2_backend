import mongoose, { model, Schema, Types } from "mongoose";
const stockSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    product: { type: Schema.Types.ObjectId, ref: "product" },
  },
  {
    timestamps: true,
  }
);

const stockModel = model("stock", stockSchema);
export default stockModel;
