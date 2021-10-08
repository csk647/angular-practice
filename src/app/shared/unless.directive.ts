import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// angular 공식 페이지에 있는 연습용 코드

// 평가 결과가 참으로 평가되면 DOM에서 템플릿 제거
// 평가 괄과가 거짓으로 평가되면 DOM 에템플릿을 추가한다.

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView = false;


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    console.log('unless에 들어오는 condition', condition)
    console.log('hasView', this.hasView)
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef); //ref에 등장시켜라
      this.hasView = true; // 출력했다.
    } else if (condition && this.hasView) {
      this.viewContainer.clear(); //삭제
      this.hasView = false; // 출력취소
    }
  }

}
