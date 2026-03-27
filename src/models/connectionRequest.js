const mongoose=require('mongoose');


const connectionRequestSchema=new mongoose.Schema({
    fromUserId:{
    type : mongoose.Schema.Types.ObjectId
    },
    toUserId:{
        type: mongoose.Schema.types.ObjectId
    },
    status:{
        type:String,
        enum:{
            values:["ignore","interested","accepted","rejected"],
            message: `{value} is incorrect status type `
        },
    },
},
{ timestamps: true }

);


const connectionRequestModel=new mongoose.model(
    "connectionRequest",
    connectionRequestSchema
);

module.exports=connectionRequestModel;


