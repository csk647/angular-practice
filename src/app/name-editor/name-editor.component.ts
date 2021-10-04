import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'; //1. formControl을 import 한다.
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  assignName = new FormControl(''); // new FormControl를 해준다.

  @Output() outputName = new EventEmitter<string>();
  @Output() outAssignName = new EventEmitter<FormControl>();
  myName="aeri-emit"

  constructor() {
   }

  updateName(e:Event) {
    // this.assignName.setValue('aeri') ;
    this.outputName.emit(this.myName);
    this.outAssignName.emit(this.assignName)
  }

  ngOnInit(): void {
  }

}
