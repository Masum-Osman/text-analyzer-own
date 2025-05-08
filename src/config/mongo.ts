import mongoose from "mongoose"

export async function connectMongoDB(uri: string) {
    try {
        await mongoose.connect(uri)
        console.log('✅ MongoDB connected')
    } catch (err) {
        console.error('❌ MongoDB connection error:', err)
        process.exit(1)
    }
}