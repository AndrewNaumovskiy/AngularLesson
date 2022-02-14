import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/models/movieModel';

@Pipe({
    name: 'rankFilter'
})
export class RankFilterPipe implements PipeTransform {

    transform(value: Movie[], filterNumber: number): Movie[] {

        if (filterNumber === undefined || filterNumber === 0) {
            return value;
        }

        return value.filter(i => {
            return i.rank <= filterNumber;
        });
    }

}