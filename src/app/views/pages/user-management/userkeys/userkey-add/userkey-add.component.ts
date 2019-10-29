import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { FormGroup, FormControl,  FormBuilder,  Validators } from '@angular/forms';
import { UserkeysService } from '../../userkeys.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'kt-userkey-add',
  templateUrl: './userkey-add.component.html',
  styleUrls: ['./userkey-add.component.scss']
})
export class UserkeyAddComponent implements OnInit {
  angForm: FormGroup;
  new:FormGroup;

  constructor(private formBuilder: FormBuilder, private userkeysService: UserkeysService,
    private activatedRoute: ActivatedRoute,private router: Router, private changeDetectorRef: ChangeDetectorRef) {
      this.createForm()
    }

    createForm() {
    this.angForm = this.formBuilder.group({
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



  ngOnInit() {}


    // userkeyForm=new FormGroup({
    //   ActivationCode: new FormControl ('',[Validators.required]),
    //   UnitNumber: new FormControl ('',[Validators.required]),
    //   Name: new FormControl ('',[Validators.required]),
    //   Rfid: new FormControl ('',[Validators.required]),
    //   PrimaryOwner: new FormControl ('',[Validators.required]),
    //   IsTenant: new FormControl ('',[Validators.required]),
    //   IsWorker: new FormControl ('',[Validators.required]),
    //   KeyType: new FormControl ('',[Validators.required]),
    //   IsSecondaryTenant: new FormControl ('',[Validators.required]),
    //   RentContract: new FormControl ('',[Validators.required]),
    //   Compound: new FormControl ('',[Validators.required]),
    //   User: new FormControl ('',[Validators.required]),
    //   Phone: new FormControl ('',[Validators.required]),
    //   ConfirmedOwnership: new FormControl ('',[Validators.required]),
    //   DismissedOwnership: new FormControl ('',[Validators.required]),
    //   Picture: new FormControl ('',[Validators.required]),
    //   Gender: new FormControl ('',[Validators.required]),
    //   IdNumber: new FormControl ('',[Validators.required]),
    //   StartDate: new FormControl ('',[Validators.required]),
    //   ExpiryDate: new FormControl ('',[Validators.required]),
    // });
    
    sendData(){
    this.userkeysService.sendUserKeyForm(this.angForm.value).subscribe(res=>{
      // this.changeDetectorRef.detectChanges();
      console.log(res)
    },err=>{
      console.log(err)

    })

  }
  goBackWithoutId	() {
    this.router.navigateByUrl('/user-management/userkeys', { relativeTo: this.activatedRoute });
  }
}
