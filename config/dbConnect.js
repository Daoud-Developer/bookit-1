import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    await mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then ( () => {
        console.log('Database connected successfully')
    }).catch ( erro => {
        console.log('Database connection failed')
    })
}

export default dbConnect