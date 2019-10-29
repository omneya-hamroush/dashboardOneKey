import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  api = 'http://social.myonekey.com'
  arr : any []=[];
  constructor(private http: HttpClient) { }

  getForms() {
    return this.http.get(`${this.api}/api/managers/`)
    }
//     getSecondary(angForm,arr){
//         for (let i = 0; i < angForm.SecondaryOwners.length; i++) {
//           [arr[i].name=angForm.SecondaryOwners[i].Name,
//           arr[i].phone=angForm.SecondaryOwners[i].Phone,
//           arr[i].email=angForm.SecondaryOwners[i].Email,
//           arr[i].relation=angForm.SecondaryOwners[i].Relation,
//           arr[i].related_user=angForm.SecondaryOwners[i].RelatedTo,]
//
// }
// }

addSecondary(form){

  for (let i =0;i<form.length;i++){

    console.log(form)
    const obj=
      {
        "name":form[i].Name,
        "phone":form[i].Phone,
        "email":form[i].Email,
        "relation":form[i].Relation,
        "related_user":form[i].RelatedTo,
      }
      console.log(obj)
      this.arr.push(obj)

 }
  // console.log("shshshshshss")
  // console.log(this.arr)
  return this.arr;

}


  sendForm(angForm){
    console.log(angForm);
    return this.http.post(`${this.api}/api/managers/`,{
      "unit_number":angForm.UnitNumber,
      "owner":{
		"name": angForm.Name,
		"phone":angForm.Phone,
		"email":angForm.Email,
		"relation":angForm.Relation
	},
   "secondry_owners":this.addSecondary(angForm.SecondaryOwners),



     },
     {
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     })
   };
   editForm(id) {
     return this.http.get(`${this.api}/api/managers/${id}`);
     }


   updateForm(UnitNumber, CompoundUnit, Owner, SecondaryOwners,id) {
     const obj = {
       "unit_number":UnitNumber,
       "compound_unit":CompoundUnit,
       "owner":Owner,
       // "owner":{
       //   "name":Name,
       //   "email":Email,
       //   "phone":Phone,
       //   "relation":Relation
       // },
       "secondry_owners":SecondaryOwners
       // "secondry_owners":[
       //   {
       //     "name":SecondaryOwners[0].Name,
       //     "phone":SecondaryOwners[0].Phone,
       //     "email":SecondaryOwners[0].Email,
       //     "relation":SecondaryOwners[0].Relation,
       //     "related_user":SecondaryOwners[0].RelatedTo
       //   }
       // ]
       };
     this.http.put(`${this.api}/api/managers/${id}`, obj,{
       headers: new HttpHeaders({'Content-Type': 'application/json'})
     }).subscribe(res => console.log('Done'));
     }


   getNextPage(page){
     return this.http.get(`${this.api}/api/managers/?page=${page}`,{headers:new HttpHeaders({'Content-Type': 'application/json'})})

   }
   deleteForm(id) {
     return this.http.delete(`${this.api}/api/managers/${id}`);
 }
}
