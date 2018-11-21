const mongoose=require('mongoose');
const schema=mongoose.Schema;

const categorySchema=new schema({
    name:String,
    timestamp:{ type:Number, default: new Date().getTime()}
});

module.exports=mongoose.model('category',categorySchema,'category');
