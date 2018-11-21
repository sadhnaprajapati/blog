const mongoose=require('mongoose');
const schema=mongoose.Schema;

const postSchema=new schema({
    name:String,
    email:String,
    title:String,
    body:String,
    timestamp:{ type:Number, default: new Date().getTime()}
});

module.exports=mongoose.model('post',postSchema,'post');
