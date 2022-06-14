import mongoose from 'mongoose';


const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
         useUnifiedTopology: true,
         useNewUrlParser: true 
    }, ()=>{
        console.log("Monogodb Connected")
    })
}

export default dbConnect