import { Component } from '@angular/core';

@Component( {
  selector   : 'sources',
  templateUrl: 'source.component.html'
} )

export class SourceComponent {

  /**
   *
   *  Static sources.
   *
   * @memberOf SourceComponent
   */
  public sources = [ {
    'icon'  : 'icon-air',
    'title' : 'weather',
    'source': 'OPENWEATHERMAP',
    'link'  : 'http://openweathermap.org/'
  }, {
    'icon'  : 'icon-area-graph',
    'title' : 'currency',
    'source': 'Moscow Exchange',
    'link'  : 'http://www.micex.ru/marketdata/'
  }, {
    'icon'  : 'icon-lab-flask',
    'title' : 'Brent price',
    'source': 'Yahoo Finance',
    'link'  : 'http://www.finance.yahoo.com/'
  } ];

  /**
   * Creates an instance of SourceComponent.
   *
   *
   * @memberOf SourceComponent
   */
  constructor () {
  }

}
