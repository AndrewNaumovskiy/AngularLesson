import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TitleFilterPipe } from 'src/pipes/titleFilter.pipe';
import { RankFilterPipe } from 'src/pipes/rankFilter.pipe';
import { MinRateFilter, MaxRateFilter } from 'src/pipes/rateFilter.pipe';
import { ShowGoodFilter } from 'src/pipes/showGood.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleFilterPipe,
    RankFilterPipe,
    MinRateFilter,
    MaxRateFilter,
    ShowGoodFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
