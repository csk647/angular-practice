import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; //1. formControl을 import 한다.

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  assignName = new FormControl(''); // new FormControl를 해준다.

  constructor() {
   }

  updateName(e:Event) {
    this.assignName.setValue('aeri') 
  }

  ngOnInit(): void {
  }

}
