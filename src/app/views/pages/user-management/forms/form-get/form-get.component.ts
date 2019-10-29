import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  selector: 'kt-form-get',
  templateUrl: './form-get.component.html',
  styleUrls: ['./form-get.component.scss']
})
export class FormGetComponent implements OnInit {
  arr : any [] = [];
  p: Number = 1;
  count: Number = 5;
  totalItems: Number;
  constructor(private formService: FormService, private changeDetectorRef: ChangeDetectorRef) {
    this.getForms()
  }


  getForms(){
    this.formService.getForms().subscribe((response:any)=>{

        this.arr=response;
        this.totalItems=response.count;
        this.changeDetectorRef.detectChanges();

      console.log(this.arr)
    },
    error =>console.log(error))
  }
  ngOnInit() {
  }
  loadData(event){
    console.log(event)
    this.formService.getNextPage(event).subscribe(
      (res :any)=>{
        console.log(res)
        this.arr = [];
        this.arr=res.results;
        this.changeDetectorRef.detectChanges();
      }
    )

  }
  deleteForm(id) {
    this.formService.deleteForm(id).subscribe(res => {
      this.arr.splice(id, 1);
    });
}

}
