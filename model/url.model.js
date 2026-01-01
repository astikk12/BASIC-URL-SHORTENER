import mongoose from "mongoose";
import shortid from "shortid";

const shortSchema=mongoose.Schema({
  redirect:{
    type:String,
    required:true,
  },
  shortid:{
    type:String,
    required:true  },
    visited:[
      {
        timestamp:{
          type:String
        }
      }
    ]
})

export default mongoose.model("URL",shortSchema)
