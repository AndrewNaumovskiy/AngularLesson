import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/models/movieModel';

@Pipe({
    name: 'showGoodFilter'
})
export class ShowGoodFilter implements PipeTransform {

    transform(value: Movie[], filterBool: boolean): Movie[] {

        if (filterBool === undefined || filterBool === false) {
            return value;
        }

        return value.filter(i => {
            return i.isGood;
        });
    }
}