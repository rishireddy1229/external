import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public url1="http://localhost:3000/readStudents"
  public url2="http://localhost:3000/addStudents"
  public url3="http://localhost:3000/updateStudents"
  public url4="http://localhost:3000/deleteStudents"
  constructor(private http:HttpClient) { }
  readStudents(){
    return this.http.get(this.url1)
  }
  addStudents(data:any){
    alert("student added")
    return this.http.post(this.url2,data)
  }
  updateStudents(data:any){
    alert("Student updated")
    return this.http.put(this.url3,data)
  }
  deleteStudents(data:any){
    alert("Student deleted")
    return this.http.delete(this.url4+"/"+data)
  }



}
