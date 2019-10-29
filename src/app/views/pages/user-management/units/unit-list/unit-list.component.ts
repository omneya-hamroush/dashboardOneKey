import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { Observable } from 'rxjs';


import { UnitService } from '../../unit.service'

@Component({
  selector: 'kt-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {
  arr : any [] = [];
  p: Number = 1;
  count: Number = 5;
  totalItems: Number;
  constructor(private unitService: UnitService, private changeDetectorRef: ChangeDetectorRef) {
    this.getUnits()
  }


  getUnits(){
    this.unitService.getUnits().subscribe((response:any)=>{

        this.arr=response.results;
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
    this.unitService.getNextPage(event).subscribe(
      (res :any)=>{
        console.log(res)
        this.arr = [];
        this.arr=res.results;
        this.changeDetectorRef.detectChanges();
      }
    )

  }
  deleteUnit(id) {
    this.unitService.deleteUnit(id).subscribe(res => {
      this.arr.splice(id, 1);
    });
}



}
