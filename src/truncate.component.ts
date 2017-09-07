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
    selector: 'truncate-controls',
    template: `
        <span>
            <a
                *ngIf="isShown"
                (click)="showLess($event)"
                role="button"
            >
                {{ showLessText }}
            </a>
            <a
                *ngIf="!isShown"
                (click)="showMore($event)"
                role="button"
            >
                {{ showMoreText }}
            </a>
        </span>
    `,
    styles: [
        `[role="button] {
            cursor: pointer;
        }`
    ]
})
export class TruncateComponent implements OnInit, OnChanges {
    private isShown: boolean = false;
    @Input('show-less-text') showLessText: string;
    @Input('show-more-text') showMoreText: string;
    @Output() onChange: EventEmitter<boolean> = new EventEmitter();
    ngOnInit() {
        if(!this.showLessText) {
            this.showLessText = 'Show Less';
        }
        if(!this.showMoreText) {
            this.showMoreText = 'Show More';
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(this.showLessText)
        if(changes.hasOwnProperty('showLessText')) {
            this.showLessText = changes.showLessText.currentValue;
        }

        if(changes.hasOwnProperty('showMoreText')) {
            this.showMoreText = changes.showMoreText.currentValue;
        }
    }
    showMore(e) {
        this.isShown = true;
        this.onChange.emit(true)
    }
    showLess(e) {
        this.isShown = false;
        this.onChange.emit(false)
    }
}