import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock.model';
import { I18n } from '../../config/constants/i18n';
import { PassService } from '../../services/pass.service';

@Component( {
  selector   : 'stock-card',
  templateUrl: 'stock-card.component.html'
} )

export class StockCardComponent implements OnInit {

  @Input( 'type' ) stockType : string;
  @Input( 'active' ) stockState : boolean;
  // outer event
  @Output() update : EventEmitter<any> = new EventEmitter<any>();

  public stock : Stock;

  // i18n symbols
  public stockMappingSYMBOLS = I18n.STOCK_SYMBOLS;
  // i18n currency
  public stockMappingCURRENCY = I18n.STOCK_CURRENCY_VALUE;

  private _service : PassService;

  /**
   * Creates an instance of StockCardComponent.
   *
   * @memberOf StockCardComponent
   */
  constructor () {
  }
   /**
   * Creates a socket connection and subscribes it on server replay.
   *
   * @memberOf WeatherComponent
   */
  ngOnInit () {

    const stockPath = `stock/${this.stockType}`;

    this._service = new PassService( stockPath );

    this._service.replay.subscribe(
      ( data : Stock ) => {

        if (!data) {
          this.stock = null;
          return;
        }

        const positive = (data.change > 0);

        data.positive = positive;
        data.trendSymbol = (positive) ? '+' : '-';
        data.change = Math.abs( data.change );
        data.percentChange = Math.abs( data.percentChange );

        this.stock = data;

      }
    );

    this._service.list();

  }

  /**
   * Active this stock.
   */
  public activate () : void {
    this.update.emit( {
      'type': this.stockType
    } );
  }

}
