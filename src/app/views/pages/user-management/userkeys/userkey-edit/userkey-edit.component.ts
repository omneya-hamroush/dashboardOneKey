import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserkeysService } from '../../userkeys.service';
@Component({
  selector: 'kt-userkey-edit',
  templateUrl: './userkey-edit.component.html',
  styleUrls: ['./userkey-edit.component.scss']
})
export class UserkeyEditComponent implements OnInit {
  angForm: FormGroup;
  userkey: any = {};
  constructor(private changeDetectorRef: ChangeDetectorRef,private route: ActivatedRoute, private router: Router, private userkeys: UserkeysService, private fb: FormBuilder) {
    this.createForm()
  }
  createForm() {
    this.angForm = this.fb.group({
      ActivationCode: new FormControl ('',[Validators.required]),
      UnitNumber: new FormControl ('',[Validators.required]),
      Name: new FormControl ('',[Validators.required]),
      Rfid: new FormControl ('',[Validators.required]),
      PrimaryOwner: new FormControl ('',[Validators.required]),
      IsTenant: new FormControl ('',[Validators.required]),
      IsWorker: new FormControl ('',[Validators.required]),
      KeyType: new FormControl ('',[Validators.required]),
      IsSecondaryTenant: new FormControl ('',[Validators.required]),
      RentContract: new FormControl ('',[Validators.required]),
      Compound: new FormControl ('',[Validators.required]),
      User: new FormControl ('',[Validators.required]),
      Phone: new FormControl ('',[Validators.required]),
      ConfirmedOwnership: new FormControl ('',[Validators.required]),
      DismissedOwnership: new FormControl ('',[Validators.required]),
      Picture: new FormControl ('',[Validators.required]),
      Gender: new FormControl ('',[Validators.required]),
      IdNumber: new FormControl ('',[Validators.required]),
      StartDate: new FormControl ('',[Validators.required]),
      ExpiryDate: new FormControl ('',[Validators.required]),
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.userkeys.editUserKey(params['id']).subscribe(res => {
          this.userkey = res;

          this.changeDetectorRef.detectChanges();
          console.log(this.userkey)
      });
    });
  }

  updateUserKey(ActivationCode, UnitNumber, Name, Rfid, PrimaryOwner, IsTenant, IsWorker, KeyType, IsSecondaryTenant,RentContract,
  Compound, User, ConfirmedOwnership, DismissedOwnership, Picture, Gender, IdNumber, StartDate,ExpiryDate, id) {
    // var unit=+Unit
    // this.rentcontractService.updateRentcontract(unit, Tenant, SecondaryTenants, StartDate, EndDate, id);
     this.route.params.subscribe(params => {
       this.userkeys.updateUserKey(ActivationCode, UnitNumber, Name, Rfid, PrimaryOwner, IsTenant, IsWorker, KeyType, IsSecondaryTenant,RentContract,
       Compound, User, ConfirmedOwnership, DismissedOwnership, Picture, Gender, IdNumber, StartDate,ExpiryDate, id);
       this.router.navigate(['user-management/userkeys']);
     });
   }


}
