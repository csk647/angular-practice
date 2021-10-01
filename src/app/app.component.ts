import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTest: boolean = false;

  constructor() {
  }
  ngOnInit(): void { //1번
    console.log('app component 시작!')
  }
  // ngDoCheck(): void { //2번
  //   console.log('do check app')
  // }

  // ngOnChanges(): void {
  //   console.log('바뀜 감지 app')
  // }

  // ngAfterContentInit(): void {//3번
  //   console.log('afterContentInit app')
  // }

  // ngAfterContentChecked(): void { //4번
  //   console.log('afterContentChecked app')
  // }

  // ngAfterViewInit(): void { //5번 hello와 bye를 돌고 옴
  //   console.log('afterViewInit app')
  // }

  // ngAfterViewChecked(): void { //6번 5번 다음으로 
  //   console.log('afterViewChecked app', this.mydata)
  // }

  // ngOnDestroy(): void {
  //   console.log('onDestroy app')
  // }


  
   showMyTest() {
    return this.myTest = true;
  }

   showMyAssign() {
    return this.myTest = false;
  }
}
