import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RentcontractsService {
  api='http://social.myonekey.com'
  arr : any [] = [];
  trial : any [] =[];
  constructor(private http: HttpClient) { }

  // addSecondary(form, array){
  //
  //   for (let i =0;i<form.length;i++){
  //     array.push(form[i]);
  //   }
  //   return array;
  // }

  sendUserKeyForm(angForm){
  // this.trial =this.addSecondary(angForm.SecondaryTenants,this.arr)
   console.log(angForm);
   return this.http.post(`${this.api}/api/rentcontract/`,{

     "unit":angForm.Unit,
     "tenant":angForm.Tenant,
     "secondary_tenants":angForm.SecondaryTenants,
     "start_date":angForm.StartDate,
     "end_date":angForm.EndDate,


   },
   {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   })
 };
  getRentContracts(){
    return this.http.get(`${this.api}/api/rentcontract/`)
  }
  editRentcontract(id) {
    return this.http.get(`${this.api}/api/rentcontract/${id}`);
    }


  updateRentcontract(Unit, Tenant, SecondaryTenants, StartDate, EndDate,id) {
    const obj = {
      "unit":Unit,
      "tenant":Tenant,
      "secondary_tenants":SecondaryTenants,
      "start_date":StartDate,
      "end_date":EndDate
      };
    this.http.put(`${this.api}/api/rentcontract/${id}`, obj,{
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).subscribe(res => console.log('Done'));
    }

  getNextPage(page){
    return this.http.get(`${this.api}/api/rentcontract/?page=${page}`,{headers:new HttpHeaders({'Content-Type': 'application/json'})})

  }
  deleteRentcontract(id) {
    return this.http.delete(`${this.api}/api/rentcontract/${id}`);
  }
}
