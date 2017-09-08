import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate',
    pure: false
})
export class TruncatePipe implements PipeTransform {
    private elipse = ' ... ';
    transform(value: any, args?: any): any {
        let maxLength = 10;

        if(typeof value !== 'string') {
            throw 'Pipe must be use with string.';
        }

        if (typeof args === 'object') {
            if (args.hasOwnProperty('maxLength')) {
                maxLength = parseInt(args['maxLength'])
                if (isNaN(maxLength)) {
                    throw `Truncate length should be a number. Improperly configured pipe arguments.
                        Use the following syntex:
                        {{ val | truncate: 10 }} or with controls {{ val | truncate: { maxLength: 10, controls: control } }}
                    `
                }
            }
            if(args.hasOwnProperty('elipse')) {
                this.elipse = args['elipse'];
            }
            if (args.hasOwnProperty('control')) {
                if (args['control']) {
                    return value;
                } else {
                    return this.splitSource(value, maxLength);
                }
            } else {
                return this.splitSource(value, maxLength);
            }
        } else {
            maxLength = parseInt(args)
            if (isNaN(maxLength)) {
                throw `Truncate length should be a number. Improperly configured pipe arguments.
                    Use the following syntex:
                    {{ val | truncate: 10 }} or with controls {{ val | truncate: { maxLength: 10, controls: control } }}
                `;
            }
            return this.splitSource(value, maxLength);
        }
    }

    compareLength(source: string, len: number) {
        return source.length > len ? true : false;
    }

    getSplitLocation(source: string, len: number) {
        return source.indexOf(' ', len);
    }

    splitSource(source: string, len: number) {
        let sl = this.getSplitLocation(source, len);

        if(this.compareLength(source, sl)) {
            return source.substr(0, sl) + this.elipse;
        } else {
            return source;
        }
    }
}
