import { Injectable } from '@angular/core';
import { NameEditorComponent } from './name-editor/name-editor.component';

@Injectable({
  providedIn: 'root'
})
//어디에서든 데이터를 가져올 수 있다.
export class ServiceTestService {
  private name:string = '';

  constructor(
    private nameEditor: NameEditorComponent
  ) { }

  getName() {
    return this.nameEditor.getName()
  }
}
