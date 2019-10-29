import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder,  Validators } from '@angular/forms';
import { UnitService } from '../../unit.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'kt-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.scss']
})
export class UnitAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private unitService: UnitService,
    private activatedRoute: ActivatedRoute,private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    this.createForm()
     }
     createForm() {
     this.angForm = this.formBuilder.group({
         UnitKey: new FormControl ('',[Validators.required]),
         UnitType: new FormControl ('',[Validators.required]),
         PrimaryOwner: new FormControl ('',[Validators.required]),
         SecondaryOwners: new FormControl ('',[Validators.required]),
         Tenant: new FormControl ('',[Validators.required]),
         SecondaryTenants: new FormControl ('',[Validators.required]),
         CheckPoints: new FormControl ('',[Validators.required]),
         UnitNumber: new FormControl ('',[Validators.required]),
     });
   }
   // var unitKey=+this.angForm.UnitKey

   sendData(){
   this.unitService.sendUnitForm(this.angForm.value).subscribe(res=>{
     // this.changeDetectorRef.detectChanges();
     console.log(res)

   },err=>{
     console.log(err)

   })

   }
  ngOnInit() {
  }

  // unitForm=new FormGroup({
  //   UnitKey: new FormControl ('',[Validators.required]),
  //   UnitType: new FormControl ('',[Validators.required]),
  //   PrimaryOwner: new FormControl ('',[Validators.required]),
  //   SecondaryOwners: new FormControl ('',[Validators.required]),
  //   Tenant: new FormControl ('',[Validators.required]),
  //   SecondaryTenants: new FormControl ('',[Validators.required]),
  //   CheckPoints: new FormControl ('',[Validators.required]),
  //   UnitNumber: new FormControl ('',[Validators.required]),
  //
  // });
//   sendData(){
//   this.unitService.addUnit(this.unitForm.UnitType.).subscribe(res=>{
//     // this.changeDetectorRef.detectChanges();
//     console.log(res)
//   },err=>{
//     console.log(err)
//
//   })
//
// }
goBackWithoutId	() {
  this.router.navigateByUrl('/user-management/units', { relativeTo: this.activatedRoute });
}

}
