import Mongoose from 'mongoose'
import logger from '../utils/logger'
import { mongo_db } from '../../_config'

/**
 * 使用 Node 自带 Promise 代替 Mongoose 的 Promise,否则会报错
 */
Mongoose.Promise = global.Promise
const url = `mongodb://${mongo_db.user}:${mongo_db.password}@${mongo_db.host}:${mongo_db.port}/${mongo_db.database}`
const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true, //Server Discovery and Monitoring engine
    keepAlive: true,
}
const options = {
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            delete ret._id
            return ret
        },
    },
}

const mongoose = Mongoose.createConnection(url, connectOptions)

mongoose.on('connected', () => {
    logger.info(`[mongodb connection] connected`)
})

mongoose.on('error', (err) => {
    logger.error(`[mongodb connection] ${err.message}`)
})

mongoose.on('disconnected', () => {
    logger.info(`[mongodb connection] disconnected`)
})

export default {
    mongoose,
    options,
}
