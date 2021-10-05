import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-assign',
  templateUrl: './my-assign.component.html',
  styleUrls: ['./my-assign.component.css']
})

export class MyAssignComponent implements OnInit {
  name="init-name";
  formName="";

  constructor() { }

  onReceiveFunc(evtName : string){
    console.log(evtName)
    this.name = evtName;
  }

  onReceiveForm(formVal:any){
    console.log(formVal)
    this.formName = formVal.value;

  }

  ngOnInit(): void {
  }

}
