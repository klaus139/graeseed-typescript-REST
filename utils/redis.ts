import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient = ()=> {
    if(process.env.REDIS_URL2){
        console.log('Redis connected')
        return process.env.REDIS_URL2;
    }
    throw new Error('redis connection failed')
}

export const redis = new Redis(redisClient());