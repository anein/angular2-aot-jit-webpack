import { Component, OnInit } from '@angular/core';
import { PassService } from '../../services/pass.service';

@Component( {
  selector   : 'weather',
  templateUrl: 'weather.component.html'
} )

export class WeatherComponent implements OnInit {

  public weather : Object;

  private _service : PassService;

  /**
   * Creates an instance of WeatherComponent.
   *
   *
   * @memberOf WeatherComponent
   */
  constructor () {

  }
  /**
   * Creates a socket connection and subscribes it on server replay.
   *
   * @memberOf WeatherComponent
   */
  ngOnInit () {

    const stockPath = 'weather';

    this._service = new PassService( stockPath );

    this._service.replay.subscribe(
      ( data ) => {
        data.symbol = ( data.value > 0 ) ? '+' : '';
        this.weather = data;
      } );

    // send command to update
    this._service.list();
  }

}
