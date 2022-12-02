import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AnyArray } from 'mongoose';
import { DataService } from '../../services/data.service';





@Component({
  selector: 'app-allpatients',
  templateUrl: './allpatients.component.html',
  styleUrls: ['./allpatients.component.css']
})
export class AllpatientsComponent implements OnInit {
  
  dataArray:any
  
  dataPatient={
    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phone:0,
    id:''


  }
  messageSuccess=''
 
 
  constructor(private ds:DataService,private route: Router){
    
    this.ds.getAllPatients().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    
    })
      

  
      
      
      

  
}

  
 
ngOnInit(): void{

}
delete(id:any,i:number){
  this.ds.deletepatient(id).subscribe(response=>{
    console.log(response)
    this.dataArray.splice(i,1)
  })

}


getdata(firstname:string,lastname:string,age:number,phone:number,email:string,id:any){
  this.messageSuccess=''
  this.dataPatient.firstname=firstname
  this.dataPatient.lastname=lastname
  this.dataPatient.age=age
  this.dataPatient.phone=phone
  this.dataPatient.email=email
  this.dataPatient.id=id

  console.log(this.dataPatient)

}

updatenewpatient(f:any){
  let data=f.value
  this.ds.updatePatient(this.dataPatient.id,data).subscribe(response=>
    {
    console.log(response)
    let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataPatient.id)

    this.dataArray[indexId].firstname=data.firstname
    this.dataArray[indexId].lastname=data.lastname
    this.dataArray[indexId].age=data.age
    this.dataArray[indexId].phone=data.phone
    this.dataArray[indexId].email=data.email
    

    this.messageSuccess=`this patient ${this.dataArray[indexId].firstname} is updated`
    
    
  },(err:HttpErrorResponse)=>{
      console.log(err.message)
    
    })
}

details(id:any){
  this.route.navigate(['/admin/patientdetails/'+id])
}

}

