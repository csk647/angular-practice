import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {
  angularImgUrl = '../../assets/angularLogo.png';

  constructor() { }

  ngOnInit(): void {
    console.log('bye 시작@')
  }
  ngOnChanges() : void {
    console.log('바뀜 감지 bye')
  }
  ngDoCheck() : void {
    console.log('do check bye')
  }
  ngAfterContentInit(): void {//3번
    console.log('afterContentInit bye')
  }

  ngAfterContentChecked(): void { //4번
    console.log('afterContentChecked bye')
  }

  ngAfterViewInit(): void { //5번 hello와 bye를 돌고 옴
    console.log('afterViewInit bye')
  }

  ngAfterViewChecked(): void { //6번 5번 다음으로 
    console.log('afterViewChecked bye')
  }

  ngOnDestroy(): void {
    console.log('onDestroy bye')
  }
}
