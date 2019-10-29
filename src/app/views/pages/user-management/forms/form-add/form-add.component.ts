import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder,  Validators, FormArray } from '@angular/forms';
import { FormService } from '../../form.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'kt-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private formService: FormService) {
    // this.createForm()
   }
//   createForm() {
//   this.angForm = this.fb.group({
//     UnitNumber: new FormControl ('',[Validators.required]),
//     // Owner: new FormGroup({
//       Name:new FormControl ('',[Validators.required]),
//       Phone:new FormControl ('',[Validators.required]),
//       Email:new FormControl ('',[Validators.required]),
//       Relation:new FormControl ('',[Validators.required]),
//     // }),
//
//
//   });
// }


ngOnInit() {
  this.angForm = this.fb.group({
    UnitNumber: new FormControl ('',[Validators.required]),
    CompoundUnit: new FormControl('',[Validators.required]),
    // Owner: new FormGroup({
      Name:new FormControl ('',[Validators.required]),
      Phone:new FormControl ('',[Validators.required]),
      Email:new FormControl ('',[Validators.required]),
      Relation:new FormControl ('',[Validators.required]),
      SecondaryOwners: this.fb.array([this.initSecondary()]),
        });
        console.log(this.angForm.SecondaryOwners);
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

    addSecondary() {

        const control = <FormArray>this.angForm.controls['SecondaryOwners'];
        control.push(this.initSecondary());
        console.log(this.angForm.value.SecondaryOwners[0])
    }

    removeSecondary(i: number) {

        const control = <FormArray>this.angForm.controls['SecondaryOwners'];
        control.removeAt(i);
    }
    sendData(){
    this.formService.sendForm(this.angForm.value).subscribe(res=>{
      // this.changeDetectorRef.detectChanges();
      console.log(res)
    },err=>{
      console.log(err)

    })

    }
goBackWithoutId	() {
  this.router.navigateByUrl('/user-management/forms', { relativeTo: this.activatedRoute });
}
}
