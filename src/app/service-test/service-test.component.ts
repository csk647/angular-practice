import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceTestService } from '../service-test.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.css']
})
export class ServiceTestComponent implements OnInit {
  // name:FormControl;

  constructor(
    private service:ServiceTestService
  ) {
    // this.name = service.getName()
   }

   getName(){
      // this.name = this.service.getName()
   }
  ngOnInit(): void {
  }

}
