import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  authService:boolean = true;

  constructor(
    private router:Router,
    // private authService: AuthService,
  ) {}

  canActivate( // base url에서 myTest url로 이동할 때 isLoggedIn true하면 넘어가게 하자. 연습은 ok
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService){
        alert('true')
        return true;
      } else {
        alert('false');
        this.router.navigate([''])
        return false
      }
  }
  canActivateChild( // canActivate가 페이지를 활성화시키냐의 문제라면 이건 해당 페이지에서 자식을 보여주느냐 안보여주느냐의 차이
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //어드민이면 보여준다.
      // if(!this.authService.isAdminUser()){ /
      //   alert('you are not allowed to view this page');
      //   return false;
      // }
    return true;
  }
  canDeactivate( // 페이지를 떠나고 싶은지 떠나고 싶지 않은지
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
