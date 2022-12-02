import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','admin')

  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)

  headerall = new HttpHeaders()
  .set('authorization',this.token)
  .set('role','admin')

  constructor(private http:HttpClient) {  }

  getAllPatients(){
    return this.http.get(`${environment.urlBackend}`+'patients/',{headers:this.headerall,params:this.params})
  }

  addpatient(profile:any){
    return this.http.post(environment.urlBackend+'addpatient/',profile,{headers:this.headerAdmin})
  }

  deletepatient(id:any){
    return this.http.delete(environment.urlBackend+'patient/'+id,{headers:this.headerAdmin})

  }
  updatePatient(id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'patient/'+id,newprofile,{headers:this.headerAdmin})

  }

  getOnepatient(id:any){
    return this.http.get(environment.urlBackend+'patient/'+id,{headers:this.headerall,params:this.params})
    
  }

 
}
