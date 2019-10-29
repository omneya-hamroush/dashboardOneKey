import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UnitService } from '../../unit.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'kt-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.scss']
})
export class UnitEditComponent implements OnInit {
  angForm: FormGroup;
  unit: any = {};

  constructor(private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router,private unitService: UnitService, private fb: FormBuilder) {
      this.createForm();
    }

  createForm() {
      this.angForm = this.fb.group({
        UnitKey:  new FormControl ('',[Validators.required]),
        UnitType:  new FormControl ('',[Validators.required]),
        PrimaryOwner: new FormControl ('',[Validators.required]),
        SecondaryOwners: new FormControl ('',[Validators.required]),
        Tenant: new FormControl ('',[Validators.required]),
        SecondaryTenants: new FormControl ('',[Validators.required]),
        CheckPoints: new FormControl ('',[Validators.required]),
        UnitNumber: new FormControl ('',[Validators.required]),
      });
    }
  // addUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant, SecondaryTenants, CheckPoints,UnitNumber) {
  //   this.unitService.addUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant, SecondaryTenants, CheckPoints,UnitNumber);
  //   }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.unitService.editUnit(params['id']).subscribe(res => {
          this.unit = res;

          this.changeDetectorRef.detectChanges();
          console.log(this.unit)
      });
    });
  }

  updateUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant,SecondaryTenants,CheckPoints,UnitNumber,id) {
    // var unit=+Unit
    // this.rentcontractService.updateRentcontract(unit, Tenant, SecondaryTenants, StartDate, EndDate, id);
     this.route.params.subscribe(params => {
       this.unitService.updateUnit(UnitKey, UnitType, PrimaryOwner, SecondaryOwners, Tenant,SecondaryTenants,CheckPoints,UnitNumber,id);
       this.router.navigate(['user-management/units']);
     });
   }

  goBackWithoutId	() {
		this.router.navigateByUrl('/user-management/units', { relativeTo: this.route });
	}
}
