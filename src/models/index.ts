import * as mongoose from 'mongoose'
import Destinies from './destinies'
import Questions from './questions'


const models = {
    Destinies,
    Questions
}
export const connectDb =  () => mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
export default models