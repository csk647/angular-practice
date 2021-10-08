import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from '../shared/highlight.directive';
import { ThrottleDirective } from './throttle.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    UnlessDirective,
    ThrottleDirective
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule, // formControl 쓸 때 appmodule에서 import 해주고 써야 함,
  ],
  exports: [HighlightDirective, UnlessDirective,ThrottleDirective],
  providers: [],
})
export class SharedModule { }
//directive를 들고있는 모듈