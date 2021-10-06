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
  ) {
    this.nameList = this.service.nameList;
  }

   ngOnInit():void{
    this.getName();
   }

   getName(){
      this.service.getName().subscribe(names => this.nameList = names)
      // 생성 subscribe()한 옵저버블을 실행 및 알림 수신. 
   }

   addName(){
     this.service.add('new!!')
   }

   delete(){
     this.service.clear();
     console.log(this.nameList)
     console.log(this.service.nameList)
   }
 

}
