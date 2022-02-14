import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Movie } from 'src/models/movieModel';
import { ApicallService } from 'src/services/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Top 250 movies';

  // filters

  titleFilterText: string;
  rankFilterText: number = 0;
  minRateFilterText: number = 0;
  maxRateFilterText: number = 10;
  isGoodBool: boolean;

  // -----------

  movies: Movie[] = [];

  constructor(public http: HttpClient, private apiService: ApicallService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.apiService
      .getMovies()
      .subscribe((data: any) => {
        this.movies = data;
      });
  }
}
