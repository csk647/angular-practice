import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {
  nameList:string[]=[];

  constructor(
    public service:ServiceTestService
  ) {}

   ngOnInit():void{
    this.getName();
   }

   getName(){
      this.service.getName().subscribe(names => this.nameList = names)
      // 생성 subscribe()한 옵저버블을 실행 및 알림 수신. 
   }

   addName(){
     this.service.add('new!!')
    //  this.service.getName().subscribe({
    //   next(name){ // next를 쓰면 값이 나오긴 하는데 가지고 와서 nameList에 넣을수가 없네
    //     console.log('current name', name);
    //     // this.nameList = name;
    //   }
    // })

   }

   delete(){
    //  this.service.clear();
    this.nameList=[];
   }
 

}
