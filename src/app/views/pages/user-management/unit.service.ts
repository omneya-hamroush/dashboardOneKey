import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  api = 'http://social.myonekey.com'

  constructor(private http: HttpClient) { }

  sendUnitForm(angForm){
    // var primary=+angForm.PrimaryOwner
    // var unit=+angForm.UnitType
    // var key=+angForm.UnitKey
    // var secondaryOwner=+angForm.SecondaryOwners
    // var tenant=+angForm.Tenant
    // var secTenant= angForm.SecondaryTenants
    // var points= angForm.CheckPoints
   console.log(angForm);
   var unitKey=+angForm.UnitKey
   var unitType=+angForm.UnitType
   var primaryOwner=+angForm.PrimaryOwner
   var secondaryOwners=+angForm.SecondaryOwners
   var tenant=+angForm.Tenant
   var secondaryTenants=+angForm.SecondaryTenants
   var checkPoints =+angForm.CheckPoints
   // var unitNumber=+angForm.UnitNumber
   return this.http.post(`${this.api}/api/unit/`,{

     // "unit_key":angForm.UnitKey,
     // "unit_type":unitType,
     // "primary_owner":primaryOwner,
     // "secondary_owners":angForm.SecondaryOwners,
     // "tenant":angForm.Tenant,
     // "secondary_tenants":angForm.SecondaryTenants,
     // "check_points":angForm.CheckPoints,
     // "unit_number":angForm,
     "unit_key":unitKey,
     "unit_type":unitType,
     "primary_owner":primaryOwner,
     "secondary_owners":secondaryOwners,
     "tenant":tenant,
     "secondary_tenants":secondaryTenants,
     "check_points":checkPoints,
     "unit_number":angForm.UnitNumber,


   },
   {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   })
 };
  // addUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant, SecondaryTenants, CheckPoints,UnitNumber) {
  //   const obj = {
  //     UnitKey,
  //     UnitType,
  //     PrimaryOwner,
  //     SecondaryOwners,
  //     Tenant,
  //     SecondaryTenants,
  //     CheckPoints,
  //     UnitNumber
  //   };
  //   console.log(obj);
  //     this.http.post(`${this.api}/api/unit`, obj)
  //         .subscribe(res => console.log('Done'));
  //   }
  getUnits() {
    return this.http.get(`${this.api}/api/unit/`)
    }

  editUnit(id) {
    return this.http.get(`${this.api}/api/unit/${id}`);
      }

  updateUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant,SecondaryTenants,CheckPoints,UnitNumber,id) {
    const obj = {
      "unit_key":UnitKey,
      "unit_type":UnitType,
      "primary_owner":PrimaryOwner,
      "secondary_owners":SecondaryOwners,
      "tenant":Tenant,
      "secondary_tenants":SecondaryTenants,
      "check_points":CheckPoints,
      "unit_number":UnitNumber
      };
      this.http.put(`${this.api}/api/unit/${id}`, obj,{
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).subscribe(res => console.log('Done'));
        }
  getNextPage(page){
    return this.http.get(`${this.api}/api/unit/?page=${page}`,{headers:new HttpHeaders({'Content-Type': 'application/json'})})

  }
  deleteUnit(id) {
    return this.http.delete(`${this.api}/api/unit/${id}`);
}
}
