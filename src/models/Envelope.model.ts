import { Schema, model } from 'mongoose'

const envelopeSchema = new Schema(
    {
        name: {
            type: String,
            unique: true
        },
        balance: {
            ref: "Wallet",
            type: Schema.Types.ObjectId
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

export default model("Envelope", envelopeSchema)