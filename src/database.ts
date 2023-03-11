import { MONGODB_URI } from './config'  
import mongoose from 'mongoose'

mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))