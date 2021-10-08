import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'asyncData'
})
export class AsyncDataPipe implements PipeTransform {
 result:any;
  async transform(obj: Observable<any>) {
    if (!obj) return '';
    return await new Promise((resolve, reject) => {
      resolve(obj.toPromise());
    })
  }

}
//진행중