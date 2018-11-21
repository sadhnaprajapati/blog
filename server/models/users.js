const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema=new schema({
    name:String,
    email:String,
    about:String,
    profile:String,
    timestamp:{ type:Number, default: new Date().getTime()}
});

module.exports=mongoose.model('users',userSchema,'users');
