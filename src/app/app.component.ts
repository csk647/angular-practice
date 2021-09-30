import { Component } from '@angular/core';

const array: Array<string> = ['data0', 'data1', 'data2'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  ngOnInit(): void { //1번
    console.log('app component 시작!')
  }
  ngDoCheck(): void { //2번
    console.log('do check app')
  }

  ngOnChanges(): void {
    console.log('바뀜 감지 app')
  }

  ngAfterContentInit(): void {//3번
    console.log('afterContentInit app')
  }

  ngAfterContentChecked(): void { //4번
    console.log('afterContentChecked app')
  }

  ngAfterViewInit(): void { //5번 hello와 bye를 돌고 옴
    console.log('afterViewInit app')
  }

  ngAfterViewChecked(): void { //6번 5번 다음으로 
    console.log('afterViewChecked app', this.mydata)
  }

  ngOnDestroy(): void {
    console.log('onDestroy app')
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
}
