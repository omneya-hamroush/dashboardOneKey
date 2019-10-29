import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserkeysService {
  api='http://social.myonekey.com'
  // headers={'Content-Type':'application/json'}
  constructor(private http: HttpClient) {
   }

   sendUserKeyForm(angForm){
    console.log(angForm);
    return this.http.post(`${this.api}/api/userkey/`,{
      "activation_code":angForm.ActivationCode,
      "unit_number":angForm.UnitNumber,
      "name":angForm.Name,
      "rfid":angForm.Rfid,
      "primary_owner":angForm.PrimaryOwner,
      "is_tenant":angForm.IsTenant,
      "is_worker":angForm.IsWorker,
      "key_type":angForm.KeyType,
      "is_secondary_tenant":angForm.IsSecondaryTenant,
      "rent_contract":angForm.RentContract,
      "compound":angForm.Compound,
      "user":angForm.User,
      "phone":angForm.Phone,
      "confirmed_ownership":angForm.ConfirmedOwnership,
      "dismissed_ownership":angForm.DismissedOwnership,
      "picture":angForm.Picture,
      "gender":angForm.Gender,
      "id_number":angForm.IdNumber,
      "start_date":angForm.StartDate,
      "expiry_date":angForm.ExpiryDate,


    },
    {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  };
  // getUserkeys() : Observable<object>{
  //   return this.http.get(`${this.api}/api/userkey/`,{headers:this.headers}).pipe(map((response:Response)=>{
  //     return <object>response.json()
  //   }));
  // }
  getUserKeys(){
    return this.http.get(`${this.api}/api/userkey/`)
  }

  editUserKey(id) {
    return this.http.get(`${this.api}/api/userkey/${id}`);
    }

  updateUserKey(ActivationCode, UnitNumber, Name, Rfid, PrimaryOwner, IsTenant, IsWorker, KeyType, IsSecondaryTenant,RentContract,
  Compound, User, ConfirmedOwnership, DismissedOwnership, Picture, Gender, IdNumber, StartDate,ExpiryDate, id) {
    const obj = {
      "activattion_code":ActivationCode,
      "unit_number": UnitNumber,
      "name":  Name,
      "rfid": Rfid,
      "primary_owner": PrimaryOwner,
      "is_tenant": IsTenant,
      "is_worker": IsWorker,
      "key_type": KeyType,
      "is_secondary_tenant": IsSecondaryTenant,
      "rent_contract": RentContract,
      "compound": Compound,
      "user": User,
      "confirmed_ownership": ConfirmedOwnership,
      "dismissed_ownership": DismissedOwnership,
      "picture": Picture,
      "gender": Gender,
      "id_number": IdNumber,
      "start_date": StartDate,
      "expiry_date": ExpiryDate
      };
      this.http.put(`${this.api}/api/userkey/${id}`, obj,{
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).subscribe(res => console.log('Done'));
    }
    deleteUserKey(id) {
      return this.http.delete(`${this.api}/api/userkey/${id}`);
  }
  getNextPage(page){
    return this.http.get(`${this.api}/api/userkey/?page=${page}`,{headers:new HttpHeaders({'Content-Type': 'application/json'})})

        }
}
