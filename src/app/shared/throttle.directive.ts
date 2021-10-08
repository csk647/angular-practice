import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
    selector: '[appPreventDoubleClick]'
})
export class ThrottleDirective implements OnInit, OnDestroy {
    @Input()
    throttleTime = 9000;

    @Output()
    throttledClick = new EventEmitter(); // event 내보낼 emit 변수 이름

    private clicks = new Subject(); // observable처럼 보낼줄거 subject로

    private subscription!: Subscription; //구독?

    constructor() { }

    ngOnInit() {
        this.subscription = this.clicks.pipe(
            throttleTime(this.throttleTime)
        ).subscribe(e => {
            this.emitThrottledClick(e)
        });
    }

    emitThrottledClick(e: any) {
        this.throttledClick.emit(e);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    clickEvent(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
        console.log('here throttle directive')
    }
}