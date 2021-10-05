import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NameEditorComponent } from './name-editor/name-editor.component';

@Injectable({
  providedIn: 'root'
})

export class ServiceTestService {
  nameList: string[] = [];

  constructor() { }

  add(name:string){
    this.nameList.push(name)
  }

  getName():Observable<string[]>{
    const names = of(this.nameList);
    return names;
  }
 
  clear(){
    this.nameList = [];
  }

}
