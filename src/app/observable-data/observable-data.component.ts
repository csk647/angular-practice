import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface data{
  key:string;
  value:string;
}

@Component({
  selector: 'app-observable-data',
  templateUrl: './observable-data.component.html',
  styleUrls: ['./observable-data.component.css']
})
//{key: 'key', value:'value'}
export class ObservableDataComponent implements OnInit {
  dateData$ = new Observable<string>(observer => {
    setInterval(() =>observer.next(new Date().toString()),1000)
  })

  data$ = new Observable<data>(observer =>{
    setTimeout(() => observer.next({key:'key', value:'value'}),1000)
  })


  constructor() { }

  ngOnInit(): void {

    this.resend();
  }

  resend(){
    console.log(this.data$)
    // this.data$ = {
    //   key:'key',
    //   value:'value'
    // }
  }

}
