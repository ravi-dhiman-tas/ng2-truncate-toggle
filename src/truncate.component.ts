import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    SimpleChanges
} from '@angular/core';
  
@Component({
    selector: 'truncate-text',
    template: `
        <span>
            {{ sourceStr | truncate: { maxLength: maxLength, control: isShown, elipse: elipseType } }}
            <span *ngIf="isControlShown">
                <a
                    *ngIf="isShown"
                    (click)="showLess($event)"
                    role="button"
                    href=""
                >
                    {{ showLessText }}
                </a>
                <a
                    *ngIf="!isShown"
                    (click)="showMore($event)"
                    role="button"
                    href=""
                >
                    {{ showMoreText }}
                </a>
            </span>
        </span>
    `,
    styles: [
        `[role="button] {
            cursor: pointer;
        }`
    ]
})
export class TruncateComponent implements OnInit, OnChanges {
    public isShown: boolean = false;
    @Input('show-less-text') showLessText: string;
    @Input('show-more-text') showMoreText: string;
    @Input('source') sourceStr: string;
    @Input('show-controls') isControlShown: boolean;
    @Input('max-length') maxLength: any;
    @Input('elipse') elipseType: string;
    @Output() onChange: EventEmitter<boolean> = new EventEmitter();
    ngOnInit() {
        if(!this.showLessText) {
            this.showLessText = 'Show Less';
        }
        if(!this.showMoreText) {
            this.showMoreText = 'Show More';
        }
        if(!this.isControlShown) {
            this.isControlShown = true;
        }
        if(!this.maxLength) {
            this.maxLength = 40;
        }
        if(!this.elipseType) {
            this.elipseType = ' ... ';
        }
        if(!this.sourceStr) {
            throw 'Source attribute is required.';
        }
        if(!this.validateSource(this.sourceStr)) {
            throw 'Source must be a string.';
        }
        this.compareSource(this.sourceStr, this.maxLength);
    }
    ngOnChanges(changes: SimpleChanges) {
        if(changes.hasOwnProperty('showLessText')) {
            this.showLessText = changes.showLessText.currentValue;
        }
        if(changes.hasOwnProperty('showMoreText')) {
            this.showMoreText = changes.showMoreText.currentValue;
        }
        if(changes.hasOwnProperty('isControlShown')) {
            this.isControlShown = changes.isControlShown.currentValue;
        }
        if(changes.hasOwnProperty('maxLength')) {
            this.maxLength = changes.maxLength.currentValue;
        }
        if(changes.hasOwnProperty('elipseType')) {
            this.elipseType = changes.elipseType.currentValue;
        }
        if(changes.hasOwnProperty('sourceStr')) {
            if(!this.validateSource(changes.sourceStr.currentValue)) {
                throw 'Source must be a string.';
            } else {
                this.sourceStr = changes.sourceStr.currentValue;
            }
        }
        this.compareSource(this.sourceStr, this.maxLength);
    }
    showMore(e) {
        e.preventDefault();
        this.isShown = true;
        this.onChange.emit(true)
    }
    showLess(e) {
        e.preventDefault();
        this.isShown = false;
        this.onChange.emit(false)
    }
    validateSource(s) {
        if(typeof s !== 'string') {
            return false;
        } else {
            return true;
        }
    }
    compareSource(s: string, l: number) {
        let sl = this.getSplitLocation(s, l);
        this.isControlShown = s.length > sl ? true : false;
    }
    getSplitLocation(s: string, l: number) {
        return s.indexOf(' ', l);
    }
}