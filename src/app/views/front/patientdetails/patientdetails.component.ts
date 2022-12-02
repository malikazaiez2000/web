import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  id:any
  dataPatient:any
  constructor(private aroute:ActivatedRoute,private ds:DataService) {
    this.aroute.params.subscribe(data=>this.id=data['id'])


  }
  ngOnInit(): void {
    this.ds.getOnepatient(this.id).subscribe(data=>this.dataPatient=data)
    
  }

}
