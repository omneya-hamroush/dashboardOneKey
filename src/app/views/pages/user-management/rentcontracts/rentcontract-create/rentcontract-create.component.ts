import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,  FormBuilder,  Validators, FormArray } from '@angular/forms';
import { RentcontractsService } from '../../rentcontracts.service';
@Component({
  selector: 'kt-rentcontract-create',
  templateUrl: './rentcontract-create.component.html',
  styleUrls: ['./rentcontract-create.component.scss']
})
export class RentcontractCreateComponent implements OnInit {

  angForm: FormGroup;
    // SecondaryTenants: this.fb.array([]),
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private rentcontractService: RentcontractsService) {
    this.createForm()
   }
  createForm() {
  this.angForm = this.fb.group({
    Unit: new FormControl ('',[Validators.required]),
    Tenant: new FormControl ('',[Validators.required]),
    // SecondaryTenants: this.fb.array([this.initSecondary()]),
    SecondaryTenants: new FormControl ('', [Validators.required]),
    StartDate: new FormControl ('',[Validators.required]),
    EndDate:new FormControl ('',[Validators.required]),
  });
}

// initSecondary() {
//
//         return this.fb.group({
//
//           Phone:new FormControl ('',[Validators.required]),
//
//         });
//     }
//
//     addSecondary() {
//
//         const control = <FormArray>this.angForm.controls['SecondaryTenants'];
//         control.push(this.initSecondary());
//
//     }
//
//     removeSecondary(i: number) {
//
//         const control = <FormArray>this.angForm.controls['SecondaryTenants'];
//         control.removeAt(i);
//     }

//   rentcontractForm=new FormGroup({
//
//     Unit: new FormControl ('',[Validators.required]),
//     Tenant: new FormControl ('',[Validators.required]),
//     SecondaryTenants: new FormControl ('',[Validators.required]),
//     StartDate: new FormControl ('',[Validators.required]),
//     EndDate: new FormControl ('',[Validators.required]),
//   });
  sendData(){
  this.rentcontractService.sendUserKeyForm(this.angForm.value).subscribe(res=>{
    // this.changeDetectorRef.detectChanges();
    console.log(res)
  },err=>{
    console.log(err)

  })

}
  ngOnInit() {
  }
  goBackWithoutId	() {
    this.router.navigateByUrl('/user-management/rentcontracts', { relativeTo: this.activatedRoute });
  }

}
