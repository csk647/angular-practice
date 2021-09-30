import { Component, OnInit, Input } from '@angular/core';

const array: Array<string> = ['data0', 'data1', 'data2']

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})



export class HelloComponent implements OnInit {
  text: string = 'firstStudy';

  showArray: Array<string>;
  @Input()
  received: string = '';

  constructor() {
    this.showArray = array;
  }

  ngOnInit(): void {
    //시작하자마자
    console.log('hello 시작!')
  }
  ngOnChanges(): void {
    console.log('바뀜 감지 hello')
  }
  ngDoCheck(): void {
    console.log('do check hello')
  }
  ngAfterContentInit(): void {//3번
    console.log('afterContentInit hello')
  }

  ngAfterContentChecked(): void { //4번
    console.log('afterContentChecked hello')
  }

  ngAfterViewInit(): void { //5번 hello와 bye를 돌고 옴
    console.log('afterViewInit hello')
  }

  ngAfterViewChecked(): void { //6번 5번 다음으로 
    console.log('afterViewChecked hello')
  }

  ngOnDestroy(): void {
    console.log('onDestroy hello')
  }
  // 클릭했을 경우
  public clickAtHello(): void {
    this._innerFunc();
    console.log(array) // array는 class 밖에 글로벌로 선언했으니 this를 쓰지 않아도 된다.
    console.log(this.text)
  }

  private _innerFunc() {
    this.text = this.text === 'firstStudy' ? 'changed!' : 'firstStudy'
  }

}
