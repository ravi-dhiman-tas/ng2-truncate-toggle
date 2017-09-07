import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncatehtml',
    pure: false
})
export class TruncatePipe implements PipeTransform {
    private deepStr: string;
    transform(value: any, args?: any): any {
        let maxLength = 10,
            elipse = ' ... ';

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
                elipse = args['elipse'];
            }
            if (args.hasOwnProperty('control')) {
                if (args['control']) {
                    return value;
                } else {
                    return value.substr(0, maxLength) + elipse;
                }
            } else {
                return value.substr(0, maxLength) + elipse;
            }
        } else {
            maxLength = parseInt(args)
            if (isNaN(maxLength)) {
                throw `Truncate length should be a number. Improperly configured pipe arguments.
                    Use the following syntex:
                    {{ val | truncate: 10 }} or with controls {{ val | truncate: { maxLength: 10, controls: control } }}
                `;
            }
            return value.substr(0, maxLength) + elipse;
        }
    }

}
