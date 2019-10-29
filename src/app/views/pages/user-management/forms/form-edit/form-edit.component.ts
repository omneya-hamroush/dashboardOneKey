import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from '../../form.service';

@Component({
  selector: 'kt-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {
  angForm: FormGroup;
  form: any = {};
  secondary : any [] = [];
  constructor(private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private formService: FormService, private fb: FormBuilder) {
    this.createForm()

  }

  createForm() {
  this.angForm = this.fb.group({
    UnitNumber: new FormControl ('',[Validators.required]),
    CompoundUnit: new FormControl('',[Validators.required]),
    Owner:new FormControl('',[Validators.required]),
    OwnerName: new FormControl('',[Validators.required]),
    OwnerEmail: new FormControl('',[Validators.required]),
    OwnerPhone: new FormControl('',[Validators.required]),
    OwnerRelation: new FormControl('',[Validators.required]),
    OwnerRelatedUser: new FormControl('',[Validators.required]),
    Compound:new FormControl('',[Validators.required]),
    SecondaryOwners:new FormControl('',[Validators.required]),
    //SecondaryOwners:this.fb.array([this.initSecondary()]),

    // Owner: new FormGroup({
      // Name:new FormControl ('',[Validators.required]),
      // Phone:new FormControl ('',[Validators.required]),
      // Email:new FormControl ('',[Validators.required]),
      // Relation:new FormControl ('',[Validators.required]),
      // SecondaryOwners: this.fb.array([this.initSecondary()]),

  });
}
initSecondary() {

        return this.fb.group({
          Name:new FormControl ('',[Validators.required]),
          Phone:new FormControl ('',[Validators.required]),
          Email:new FormControl ('',[Validators.required]),
          Relation:new FormControl ('',[Validators.required]),
          RelatedTo:new FormControl ('',[Validators.required]),
        });
    }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.formService.editForm(params['id']).subscribe(res => {
          this.form = res;
          this.secondary=this.form.secondry_owners;

          this.changeDetectorRef.detectChanges();
          console.log(this.form)
      });
    });

  }

  updateForm(UnitNumber, CompoundUnit, Owner, SecondaryOwners,Compound,id) {
    // var tenant = ""+Tenant
    // var secondary = ""+SecondaryTenants
    // this.rentcontractService.updateRentcontract(unit, Tenant, SecondaryTenants, StartDate, EndDate, id);
     this.route.params.subscribe(params => {
       this.formService.updateForm(UnitNumber, CompoundUnit, Owner, SecondaryOwners,id);
       this.router.navigate(['user-management/forms']);
     });
   }

}
