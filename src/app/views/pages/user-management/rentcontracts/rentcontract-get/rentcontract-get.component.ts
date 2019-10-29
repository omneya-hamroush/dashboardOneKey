import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { RentcontractsService } from '../../rentcontracts.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'kt-rentcontract-get',
  templateUrl: './rentcontract-get.component.html',
  styleUrls: ['./rentcontract-get.component.scss']
})
export class RentcontractGetComponent implements OnInit {
  arr : any [] = [];
  p: Number = 1;
  count: Number = 5;
  totalItems: Number;
  // test: any []=[];
  searchText;
  url: string = 'http://social.myonekey.com/api/rentcontract/';
  rentcontracts :any []=[];

  constructor(private changeDetectorRef: ChangeDetectorRef,private rentcontractservice : RentcontractsService, private router: Router, private activatedRoute: ActivatedRoute, ) {
    this.getRentContract()
  }
  getRentContract(){
    this.rentcontractservice.getRentContracts().subscribe((response:any)=>{
      // this.zone.run(()=>{
        // response.results.forEach(element=>{
        //   this.arr.push(element);
        // })
        this.arr=response.results;
        this.totalItems=response.count;

        this.changeDetectorRef.detectChanges();

      // })
      // let userkey : any = response;

      // this.arr=userkey.results;

      // this.arr=userkey;
      console.log(this.arr)
    },
    error =>console.log(error))
  }
  ngOnInit() {
  }
  loadData(event){
    console.log(event)
    this.rentcontractservice.getNextPage(event).subscribe(
      (res :any)=>{
        console.log(res)
        this.arr = [];
        this.arr=res.results;
        this.changeDetectorRef.detectChanges();
      }
    )
    // this.config.currentPage = event;

  }
  deleteRentcontract(id) {
    this.rentcontractservice.deleteRentcontract(id).subscribe(res => {
      this.arr.splice(id, 1);
    });
}


}
