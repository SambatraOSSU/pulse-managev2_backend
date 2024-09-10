import { model, Schema } from "mongoose";
const productSchema = new Schema(
    {
        profilePicture: {
            file_path: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now(),
            },
            size: {
                type: Number,
                default: 0,
            },
            file_name: {
                type: String,
            },
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        prix: {
            type: Number,
            required: true,
        },
        diversity: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const productModel = model("User", productSchema);
export default productModel;