import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserkeysService } from '../../userkeys.service';
import { Router } from '@angular/router';


@Component({
  selector: 'kt-userkey-get',
  templateUrl: './userkey-get.component.html',
  styleUrls: ['./userkey-get.component.scss']
})
export class UserkeyGetComponent implements OnInit {

  arr : any [] = [];
  edit: any ;
  p: Number = 1;
  count: Number = 5;
  totalItems: Number;
  // myarray=[1,1,1,1,1,1]

  constructor(private changeDetectorRef: ChangeDetectorRef,private userkeys : UserkeysService,private route:Router) {
    this.getUserKey()
  }
  getUserKey(){
    this.userkeys.getUserKeys().subscribe((response:any)=>{
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

  deleteUserKey(id) {
    this.userkeys.deleteUserKey(id).subscribe(res => {
      this.arr.splice(id, 1);
    });
}
loadData(event){
  console.log(event)
  this.userkeys.getNextPage(event).subscribe(
    (res :any)=>{
      console.log(res)
      this.arr = [];
      this.arr=res.results;
      this.changeDetectorRef.detectChanges();
    }
  )

}
//   editUserKey(id) {
//     this.userkeys.editUserKey(id).subscribe(res => {
//       this.edit=res;
//     // this.arr.splice(id, 1);
//   });
// }
    ngOnInit() {
     // this.getUserKey()
    // this.userkeys.getUserKeys().subscribe((data: any =[]) => {
    //     this.userkey = data;
    // });
  }


}
