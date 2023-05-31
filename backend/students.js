const mongoose=require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/test1db", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));
const StudentList = new mongoose.Schema({
    _id: Number,
    name: String,
    rollno: String,
    phone: Number,
    email: String,
    branch: String,
})
const Students = new mongoose.model("Student", StudentList);
const createStudents = async (_id, name, rollno, phone, email, branch) => {
    try {
        const Student1 = new Students({
            _id: _id,
            name: name,
            rollno: rollno,
            phone: phone,
            email: email,
            branch: branch
        });
        const result = await Student1.save();
        return result;
    } catch (err) {
        console.log(err);
    }
}
const readStudents= async()=>{
    try{
        const result= await Students.find();
        return result;
    }catch(err){
        console.log(err)
    }
}
const updateStudents= async(_id,name, rollno,phone, email, branch)=>{
    try{
        const result= await Students.findByIdAndUpdate({_id}, {$set:{name:name, rollno:rollno, phone:phone, email:email,branch:branch}});
        return result;
    }catch(err){
        console.log(err)
    }

}
const deleteStudents= async(_id)=>{
    try{
        const result= await Students.deleteOne({_id});
        return result;
    }catch(err){
        console.log(err);
    }
}
module.exports.createStudents=createStudents;
module.exports.readStudents=readStudents;
module.exports.updateStudents=updateStudents;
module.exports.deleteStudents=deleteStudents;