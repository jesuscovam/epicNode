import * as mongoose from 'mongoose'

const Schema = mongoose.Schema
const QuestionsSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    questionNumber: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Question', QuestionsSchema)
export default model