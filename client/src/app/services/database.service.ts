import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { ErrorHandlerService } from 'app/services/error-handler.service';


@Injectable()
export class DatabaseService {

  userUrl = `api/user`;

  constructor(
    private http: AuthHttp,
    private errorHandler: ErrorHandlerService
  ) { }

  getUserFromDatabase(): Observable<any> {
    return this.http.get(this.userUrl)
    .pipe(
      catchError(this.errorHandler.handleError('getUserFromDatabase', []))
    );
  }

}
