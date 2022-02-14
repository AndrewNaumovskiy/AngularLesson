import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/models/movieModel';
import { from, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) { }
  getMovies() {
    //imdb`s api allows only 100 requests per day. I moved their response to my machine
    return this.httpClient.get(`http://3.70.183.239/api/Movies`).
      pipe(
        map(
          ((data: any) => {
            return data.map(function (movie: any): Movie {
              return new Movie(movie.id, movie.rank, movie.title, movie.fullTitle, movie.imDbRating, movie.year);
            });
          }
          ),
          ((someData: any) => {
            console.log(someData);
          })
        )
      )
  };
}
