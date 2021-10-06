import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }
  canLoad() {
    alert('can load!')
    return true
  }
  CanActivate() {
    alert('can activate again!')
    return true
  }
  CanActivateChild() {
    alert('can activate child?');
    return true;
  }
}
