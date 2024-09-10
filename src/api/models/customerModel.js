import { model, Schema } from "mongoose";
const customerSchema = new Schema(
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
        pseudo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        },
        mobileNumber: {
            type: Number,
            required: true,
        },
        adress: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const customerModel = model("customer", customerSchema);

export default customerModel;
