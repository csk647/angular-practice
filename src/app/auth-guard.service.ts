import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  canLoad() {
    alert('can load!')
    return true
  }
  canActivate() {
    alert('can activate again!')
    return true
  }
  canActivateChild() {
    alert('can activate child?');
    return true;
  }
}
