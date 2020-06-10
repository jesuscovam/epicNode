import 'dotenv/config'
import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import * as cors from 'cors';
import models, { connectDb } from './models/index'


const app = express()

app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
    req.context.models = models
    next()
})
app.get('/', (req: Request, res: Response) => {
    res.send('hello mundo')
})

const port = process.env.PORT || 5000
connectDb().then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`app running @ http://localhost:${port}`))
}).catch(err => console.error('error connecting to db', err))