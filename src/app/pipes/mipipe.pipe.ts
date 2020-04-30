import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mipipe'
})
export class MiPipePipe implements PipeTransform {
    transform(value: string, arg: string): string {
        value = value.toLowerCase();
        const aux = value.split(' ');
        value = '';
        aux.forEach(word => {
            value += word[0].toUpperCase() + word.substr(1);
        });
        value += arg;
        return value;
    }
}