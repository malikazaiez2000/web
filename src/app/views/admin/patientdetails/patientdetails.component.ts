import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds: DataService){ 
    this.route.params.subscribe(params=>this.id=params['id'])

    this.ds.getOnepatient(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageErr="we don't find this patient in our database"})
  }

  
  ngOnInit(): void {
    
  }

}
