import { ISocketItem } from '../model/interfaces/socket.interface';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { SocketService } from './socket.service';

import { IPassService } from './interfaces/base/pass.interface';
import { IPassItem } from '../model/interfaces/pass.interface';

export class PassService implements IPassService<IPassItem> {

  /**
   * Socket replay data.
   *
   * @type {ReplaySubject}
   */
  public replay : ReplaySubject<any> = new ReplaySubject( 1 );

  public socketService : SocketService;

  /**
   * Creates an instance of PassService.
   *
   * @param {string} socketPath - socket namespace.
   *
   * @memberOf PassService
   */
  constructor ( private socketPath : string ) {

    this.socketService = new SocketService( `${this.socketPath}` );

    this.socketService.get().subscribe(
      // success
      ( socketItem : ISocketItem ) => {
        this.replay.next( this.handleSuccess( socketItem.item ) );
      },
      // error
      ( error : any ) => {
        this.handleError( error );
      } );

  }

  /**
   * Fetches the stock data.
   *
   * @memberOf PassService
   */
  public list () : void {

    this.socketService.list();

  }

  /**
   * Success handler.
   *
   * @param {Object} res
   * @returns {IPassItem}
   *
   * @memberOf PassService
   */
  public handleSuccess ( res : Object ) : IPassItem {
    return <IPassItem>res;
  }

  /**
   * Error handler.
   *
   * @param {*} error
   *
   * @memberOf PassService
   */
  public handleError ( error : any ) : void {
    console.log( 'error', error );
  }

}
