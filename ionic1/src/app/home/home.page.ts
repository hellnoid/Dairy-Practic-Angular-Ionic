import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  reason:string="";
  amount:number=0;
  listArray:object[]=[];
  // listOb:{}={};
  total:number=0;

  constructor() {}
  clear(){
    this.amount=0;
    this.reason="";
  }

  add(){
    if(this.reason.trim().length==0||this.amount<=0) return;

    let dumOb:{}={
    "amount":this.amount,
    "reason":this.reason
    }

    this.listArray.push(dumOb);

    // console.log(this.listArray);
    // console.log("amount  ",this.amount);
    this.total=this.total+this.amount;
    // console.log("total   ",this.total);

    this.clear();
  }
}
