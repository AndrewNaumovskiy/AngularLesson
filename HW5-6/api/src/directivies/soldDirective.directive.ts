import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[soldDirective]'
})
export class SoldDirective {

    @Input()
    sold: boolean;

    _el: ElementRef;
    _renderer: Renderer2;

    backgroundImage: string = 'https://previews.123rf.com/images/sukanda26/sukanda261512/sukanda26151200201/50107842-sold-sign.jpg';

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this._el = el;
        this._renderer = renderer;
    }

    ngOnInit() {
        if (!this.sold) {
            this._el.nativeElement.style.backgroundImage = `url('${this.backgroundImage}')`;
            this._el.nativeElement.style.backgroundRepeat = 'no-repeat';
        }
    }
}