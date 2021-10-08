import { Component, Input } from '@angular/core';
import { of, pipe, Subject, interval, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTest: boolean = false;
  clicks = new Subject;
  miles: number=0;

  @Input() throttle!: Observable<void>;
  @Input() throttleTime?: number;
  constructor() {
  }
  ngOnInit(): void { //1번
    console.log('app component 시작!')
  }
  log(e: Event) {
    console.log(e)
    // this.clicks.pipe(debounceTime(1000)).subscribe(e => alert('hi'))
  }
  throttledClick(e: Event) {
    console.log('throttleClick',e)
  }


  oneMileChange(value:string){
    this.miles = parseFloat(value)
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
