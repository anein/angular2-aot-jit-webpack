import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

/**
 * Socket Service
 *
 * @export
 * @class SocketService
 */
export class SocketService {

  // socket 'of' name.
  private name : string;
  private host : string = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  // private name: string;
  public socket : SocketIOClient.Socket;

  /**
   * Creates an instance of SocketService.
   *
   * @param {string} name - socket namespace.
   *
   * @memberOf SocketService
   */
  constructor ( name : string ) {
    this.name = name;
  }

  /**
   * Creates a socket object and sets the listeners.
   *
   * @returns {Observable<any>}
   *
   * @memberOf SocketService
   */
  get () : Observable<any> {

    this.socket = io.connect( `${this.host}/${this.name}` );
    this.socket.on( 'connect', () => this.connect() );
    this.socket.on( 'disconnect', () => this.disconnect() );
    this.socket.on( 'error', ( error : string ) => this.error( error ) );

    return Observable.create( ( observe : any ) => {

      this.socket.on( `update`, ( item : any ) => {
        observe.next( { action: 'update', item: item } );
      } );

      this.socket.on( `list`, ( item : any ) => {
        observe.next( { action: 'list', item: item } );
      } );

      return () => this.socket.close();
    } );

  }

  /**
   * Handles list to get the last saved stock data.
   *
   * @memberOf SocketService
   */
  public list () : void {
    this.socket.emit( 'list' );
  }

  /**
   * Handles connection opening.
   *
   * @private
   *
   * @memberOf SocketService
   */
  private connect () : void {
    // console.log( `Connected to ${this.name}` );
  }

  /**
   * Handles connection closing.
   *
   * @private
   *
   * @memberOf SocketService
   */
  private disconnect () : void {
    // console.log( `Disconnected from ${this.name}` );

  }

  /**
   * Handles error and closes the socket connection.
   *
   * @private
   * @param {string} error - error message
   *
   * @memberOf SocketService
   */
  private error ( error : any ) {

    let errMsg = ( error.message ) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    this.socket.close();

    return Observable.throw( errMsg );

  }

}
