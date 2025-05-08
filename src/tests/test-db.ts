import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { TextModel } from '../data/models/TextModel';


dotenv.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/text-analyzer';

async function testMongoDBConnection() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('✅ MongoDB connected');

        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    }
}

testMongoDBConnection();