import  Mongoose  from "mongoose";

const workersSchema = new Mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    state: {
        type: String
    }
},
{
    timestamps: true
  })
  const workers = Mongoose.model("workers", workersSchema)

export default workers;

