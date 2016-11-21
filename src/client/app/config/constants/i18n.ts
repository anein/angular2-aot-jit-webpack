/**
 *
 */
export class I18n {

  public static STOCK_SYMBOLS : {[k : string] : string} = {
    '=usd'  : 'USD000UTSTOM',
    '=euro' : 'EUR_RUB__TOM',
    '=brent': 'BZ=F',
    'other' : ''
  };

  public static STOCK_CURRENCY_VALUE : {[k : string] : string} = {
    '=usd'  : 'rub',
    '=euro' : 'rub',
    '=brent': 'usd',
    'other' : ''
  };

}

