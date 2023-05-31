const express= require('express')
const cors=require('cors')
const bodyParser = require('body-parser');
const stuconnect = require('./students');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get('/readStudents', async(req,res)=>{
    let result= await stuconnect.readStudents();
    res.json(result)
})
app.post('/addStudents', async(req,res)=>{
    try{
        //console.log("index.js")
        let result=await stuconnect.createStudents(parseInt(req.body._id), req.body.name, req.body.rollno, req.body.phone,req.body.email,req.body.branch)
        //console.log(result)
    }catch(err){
        console.log(err);
    }
})
app.put('/updateStudents', async(req,res)=>{
    try{
        let result=await stuconnect.updateStudents(parseInt(req.body._id), req.body.name, req.body.rollno, req.body.phone, req.body.email,req.body.branch)
    }catch(err){
        console.log(err);
    }
})
app.delete('/deleteStudents/:_id', async(req,res)=>{
    try{
        let result=stuconnect.deleteStudents(parseInt(req.params._id))
    }catch(err){
        console.log(err);
    }
})
app.listen(3000, () => console.log("server started at port 3000"))