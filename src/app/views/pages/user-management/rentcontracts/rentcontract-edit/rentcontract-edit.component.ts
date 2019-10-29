import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentcontractsService } from '../../rentcontracts.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'kt-rentcontract-edit',
  templateUrl: './rentcontract-edit.component.html',
  styleUrls: ['./rentcontract-edit.component.scss']
})
export class RentcontractEditComponent implements OnInit {
  angForm: FormGroup;
  rentcontract: any = {};

  constructor(private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private rentcontractService: RentcontractsService, private fb: FormBuilder) {
    this.createForm()
   }
  createForm() {
  this.angForm = this.fb.group({
    Unit: new FormControl ('',[Validators.required]),
    Tenant: new FormControl ('',[Validators.required]),
    SecondaryTenants: new FormControl ('',[Validators.required]),
    StartDate: new FormControl ('',[Validators.required]),
    EndDate:new FormControl ('',[Validators.required]),
  });
}

  ngOnInit() {
    // this.route.queryParams.subscribe(res=>{
    //   console.log("aslksdhkasdjhasjhdgajshdgjahs",res.id)
    // })
    this.route.params.subscribe(params => {
        this.rentcontractService.editRentcontract(params['id']).subscribe(res => {
          this.rentcontract = res;

          this.changeDetectorRef.detectChanges();
          console.log(this.rentcontract)
      });
    });
  }
  updateRentcontract(Unit, Tenant, SecondaryTenants, StartDate, EndDate,id) {
    var tenant = ""+Tenant
    var secondary = ""+SecondaryTenants
    // this.rentcontractService.updateRentcontract(unit, Tenant, SecondaryTenants, StartDate, EndDate, id);
     this.route.params.subscribe(params => {
       this.rentcontractService.updateRentcontract(Unit, tenant, secondary, StartDate, EndDate, id);
       this.router.navigate(['user-management/rentcontracts']);
     });
   }
}
