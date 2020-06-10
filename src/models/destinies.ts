import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const DestinySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    destinyType: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    schedule: {
        type: String
    },
    reservation: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        unique: true,
    }
})

const model = mongoose.model('Destiny', DestinySchema)
export default model