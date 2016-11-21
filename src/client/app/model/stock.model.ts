import { IPassItem } from './interfaces/pass.interface';

/**
 * Stock Interface.
 *
 * @export
 * @class Stock
 * @implements {IPassItem}
 */
export class Stock implements IPassItem {
  _id : string;
  value : number;
  change : number;
  percentChange : number;
  positive? : boolean;
  trendSymbol? : string;
  updateDate : Date;
}
