import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { TruncateComponent } from "./truncate.component";
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TruncateComponent,
        TruncatePipe
    ],
    exports: [TruncatePipe, TruncateComponent]
})
export class NgTruncateToggle { }