import mongoose from 'mongoose'
import adminSeeder from '../adminSeeder.js';

const connectDatabase = async(URI)=>{
    await mongoose.connect(URI)
    console.log("Database is connected successfully");
    adminSeeder();
}
export default connectDatabase;