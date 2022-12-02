import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  dataPatient:any
  constructor(private ds:DataService, private router:Router){ 
    this.ds.getAllPatients().subscribe(data=>this.dataPatient=data)
  }

  ngOnInit(): void {
    
  }
  
  Godetails(id:any){
    this.router.navigate(['patient/'+id])
    

  }


}
