import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/models/movieModel';

@Pipe({
    name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

    transform(value: Movie[], filterText: string): Movie[] {

        if (filterText === undefined || !filterText.trim()) {
            return value;
        }

        let filterToLower = filterText.toLocaleLowerCase();

        return value.filter(i => {
            return i.title.toLocaleLowerCase().includes(filterToLower);
        });
    }

}