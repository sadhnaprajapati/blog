const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const api=require('./server/routes/api');
const port=3008;
const app=express();

app.use(express.static(path.join(__dirname,'dist/blog1')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/blog1/index.html'));
});

app.listen(port,function()
{
    console.log('server running on port '+port);
})