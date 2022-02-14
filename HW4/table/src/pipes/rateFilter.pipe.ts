import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/models/movieModel';

@Pipe({
    name: 'minRateFilter'
})
export class MinRateFilter implements PipeTransform {

    transform(value: Movie[], filterNumber: number): Movie[] {

        if (filterNumber === undefined || filterNumber === 0) {
            return value;
        }

        return value.filter(i => {
            return i.imDbRating >= filterNumber;
        });
    }
}

@Pipe({
    name: 'maxRateFilter'
})
export class MaxRateFilter implements PipeTransform {

    transform(value: Movie[], filterNumber: number): Movie[] {

        if (filterNumber === undefined || filterNumber === 0) {
            return value;
        }

        return value.filter(i => {
            return i.imDbRating <= filterNumber;
        });
    }
}