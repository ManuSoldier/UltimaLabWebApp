import {Component,AfterViewInit,ElementRef} from '@angular/core';

declare var Ultima: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/application.html'
})
export class Application implements AfterViewInit {

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        Ultima.init(this.el.nativeElement);
    }
}