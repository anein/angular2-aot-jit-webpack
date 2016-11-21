import { StockCardComponent } from './components/stock/stock-card.component';
import { StockComponent } from './components/stock/stock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SourceComponent } from './components/source/source.component';

@NgModule( {
  imports     : [ BrowserModule, HttpModule, CommonModule ],
  declarations: [
    AppComponent,
    StockComponent,
    StockCardComponent,
    WeatherComponent,
    SourceComponent
  ],
  bootstrap   : [ AppComponent ]
} )

export class AppModule {
}
