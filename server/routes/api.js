const express=require('express');
const multer = require('multer');
const router =  express.Router();
const Post=require('../models/post');
const Users=require('../models/users');
const Category=require('../models/category');
const mongoose=require('mongoose');
var upload=multer({dest:'./assets/img'});
mongoose.connect('mongodb://127.0.0.1/blog1',function(err)
{
    if(err)
    {
        console.log('error to connect');
    }
    else
    {
        console.log('connected successfully !');
    }
});
router.get("/",function(req,res){
    res.send("api works");
});

/**************************** get all post ***************** */
router.get('/post',function(req,res)
{
    Post.find({})
    .exec(function(err,post)
    {
        if(err)
        {
            console.log('error')
        }else{
            res.json(post);
        }
    })
});

/************************** get post by their ids ************************ */

router.get('/post/:id',function(req,res)
{
    console.log('get request by id');
    Post.findById(req.params.id)
    .exec(function(err,post)
    {
        if(err)
        {
                console.log('error'+err)
        }else{
            res.json(post);
        }
    })
});

/*********************** insert video to database ******/
router.post('/send',upload.single('image'),function(req,res){
    console.log("insert......");
    var newPost=Post();
    newPost.name=req.body.name;
    newPost.email=req.body.email;
    newPost.title=req.body.title;
    newPost.body=req.body.body;
   
    newPost.save(function(err,inserted){
        if(err){
            console.log("error in inserting video"+err);
        }else{
            console.log("inserted successfully.")
        }
    })   
});

/**************************get users ************************ */
router.get('/users',function(req,res)
{
    Users.find({})
    .exec(function(err,post)
    {
        if(err)
        {
            console.log('error')
        }else{
            res.json(post);
        }
    })
});

/**************************get category ************************ */
router.get('/category',function(req,res)
{
    Category.find({})
    .exec(function(err,post)
    {
        if(err)
        {
            console.log('error')
        }else{
            res.json(post);
        }
    })
});

module.exports=router;
