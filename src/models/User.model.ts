import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true
        },
        password: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            require: true
        },
        envelopes: [
            {
                ref: "Envelope",
                type: Schema.Types.ObjectId
            }
        ],
        walletBalance: {
            ref: "Wallet",
            type: Schema.Types.ObjectId
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
    
)


export default model("User", userSchema)