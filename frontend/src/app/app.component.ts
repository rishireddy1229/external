import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public students:any=[];
  public editMode=false;
  public currentStId:any;
  @ViewChild('studentsPost') form1: NgForm;
  constructor(private _studentService:StudentService){}
  loadStudents(){
    this._studentService.readStudents().subscribe((result:any)=>{
      console.log(result)
      this.students=result;
    })
  }
  addStudents(data:any){
    if(this.editMode==false){
      this._studentService.addStudents(data).subscribe(()=>{
        // alert("Student added");
      })
    }
    else
    {
      this._studentService.updateStudents(data).subscribe()
      this.editMode=false;
      this.form1.setValue({
        _id:'',
        name:'',
        rollno:'',
        phone:'',
        email:'',
        branch:''
      })
    }
  }
  deleteStudents(data:any){
    this._studentService.deleteStudents(data).subscribe(()=>{
  
  })
  }
  editStudents(data:any){
    this.currentStId=data;
    console.log(data)
    let currentSt= this.students.find( (p:any)=>{
       return p._id === data
    })
    // console.log(currentSt)
    this.form1.setValue({
      _id:currentSt._id,
      name:currentSt.name,
      rollno:currentSt.rollno,
      phone:currentSt.phone,
      email:currentSt.email,
      branch:currentSt.branch,
    })
    this.editMode=true;
    // this.addStudents(data);
  }
}
