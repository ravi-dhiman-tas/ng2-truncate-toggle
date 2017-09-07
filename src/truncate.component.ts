import {
    Component,
    Output,
    EventEmitter
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
                Show Less
            </a>
            <a
                *ngIf="!isShown"
                (click)="showMore($event)"
                role="button"
            >
                Show More
            </a>
        </span>
    `,
    styles: [
        `[role="button] {
            cursor: pointer;
        }`
    ]
  })
  export class TruncateComponent {
    private isShown: boolean = false;
    @Output() onChange: EventEmitter<boolean> = new EventEmitter();
    showMore(e) {
        this.isShown = true;
        this.onChange.emit(true)
    }
    showLess(e) {
        this.isShown = false;
        this.onChange.emit(false)
    }
}