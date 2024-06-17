import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI) {
    throw new Error('Please define the MONG_URI environment variable inside .env.local')
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = { conn: null, promise: null};
}

async function dbConnect() {
    if(cached.conn) {
        return cached.conn;
    }


if(!cached.promise) {
    const opts = {
        bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
        return mongoose;
    });
}

    cached.conn = await cached.promise;
    return cached.conn
}

export default dbConnect;


/*
const connection = {};

export const connectToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
*/