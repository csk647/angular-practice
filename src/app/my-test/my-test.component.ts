import { Component, OnInit } from '@angular/core';

const array: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent implements OnInit {
  title: string = 'firstStudy';
  mydata: string = '100';
  val = true;
  send = 'lamp'

  showArray: Array<string>;

  //app에서 hello로 넘길 item
  currentItems = [{
    id: 36,
    name: 'aeri'
  }, {
    id: 34,
    name: 'coinone'
  }]

  constructor() {
    this.showArray = array;
  }

  public clickAfterPrint(event: Event): void {
    console.log(event.target)
    this._innerFunc();
    console.log(array) // array는 class 밖에 글로벌로 선언했으니 this를 쓰지 않아도 된다.
    console.log(this.title)
  }

  private _innerFunc() {
    array.push('data' + array.length)
  }

  changeView() {
    console.log(this.val)
    this.val = !this.val;
  }

  getClass() {
    return this.val ? { blue: true } : { red: true }
  }

  ngOnInit(): void {
  }

}
