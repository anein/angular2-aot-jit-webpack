import { Component } from '@angular/core';

@Component( {
  selector   : 'stock-list',
  templateUrl: 'stock.component.html'
} )

/**
 * Stock Component
 */
export class StockComponent {

  public stocks = [ {
    type  : 'usd',
    active: true,
    num   : 1
  }, {
    type  : 'euro',
    active: false,
    num   : 2
  }, {
    type  : 'brent',
    active: false,
    num   : 3
  } ];

  /**
   * Creates an instance of StockComponent.
   *
   *
   * @memberOf StockComponent
   */
  constructor () {
  }

  /**
   * Change stock type event - activates selected stock type and sorts stocks by its number.
   *
   * @param {{type : string}} event
   *
   * @memberOf StockComponent
   */
  changeStockType ( event : {type : string} ) : void {

    const type = event.type;

    // sort stocks by active flag.
    this.stocks = this.stocks.map( ( value ) => {
      value.active = value.type === type;
      return value;
    } )
    // sort by the active flag
      .sort( ( a, b ) => (a.active === false) ? 1 : -1 )
      // sort by the number
      .sort( ( a, b ) => {
        if (a.active !== true) {
          return a.num - b.num;
        }
        return null;
      } );
  }

}
