import { ReplaySubject } from 'rxjs';
import { SocketService } from '../../socket.service';

export interface IPassService<T> {

  /**
   * Stores the replay object
   *
   * @type {ReplaySubject<any>}
   * @memberOf IPassService

   */
  replay : ReplaySubject<any>;
  /**
   * Socket Service
   *
   * @type {SocketService}
   * @memberOf IPassService
   */
  socketService : SocketService;

  /**
   * Fetches stock item.
   *
   * @memberOf IPassService
   */
  list : () => void;

  /**
   * Extracts data from the response.
   *
   *
   * @memberOf IPassService
   */
  handleSuccess : ( res : Object ) => T;

  /**
   * Handlers the error.
   *
   *
   * @memberOf IPassService
   */
  handleError : (error : any) => void;

}
