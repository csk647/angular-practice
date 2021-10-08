import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { NameEditorComponent } from './name-editor/name-editor.component';

@Injectable({
  providedIn: 'root'
  // 거의 대부분 root를 쓴다.
  // 여기에서만 쓰인다! 하면 any
})

export class ServiceTestService {
  private nameList: string[] = ['aeri'];

  constructor() { }


  add(name:string){
    this.nameList.push(name);
    console.log(this.nameList)
  }

  setData(data:string){
    
    this.nameList = [...data];
  }

  getName(){
    return this.nameList;
  }
 
  clear(){

    this.nameList = [];
    return this.nameList;
    //return this.nameList를 해주거나
    //서비스를 부르는 컴포넌트에서 clear 함수를 부르고 getName함수를 다시 불러주거나 해야함.
    
    console.log(this.nameList)
    
  }
  //nameList를 return 하던지 component에서 다시 get을 하던지

}
