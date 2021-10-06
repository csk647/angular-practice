import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NameEditorComponent } from './name-editor/name-editor.component';

@Injectable({
  providedIn: 'root'
})

export class ServiceTestService {
  nameList: string[] = ['aeri'];

  constructor() { }

  add(name:string){
    this.nameList.push(name)
    console.log(this.nameList)
  }

  setData(data:string){
    this.nameList = [...data];
  }

  getName(){
    const names = of(this.nameList);
    return names;
  }
 
  clear(){
    this.nameList = [];
    console.log(this.nameList)
  }

}
