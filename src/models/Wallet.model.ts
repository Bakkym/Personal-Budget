import { Schema, model } from 'mongoose'

const walletSchema = new Schema(
    {
        walletBalance: {
            type: Number
        }
    }
)

export default model("Wallet", walletSchema)