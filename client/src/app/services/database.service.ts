import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subject
} from 'rxjs/Subject';
import {
  catchError
} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {
  HttpClient
} from '@angular/common/http';
import {
  ErrorHandlerService
} from 'app/services/error-handler.service';


@Injectable()
export class DatabaseService {

  userUrl = `api/user`;
  // Update with mockable endpoint or data server endpoint
  sheltersUrl = ``;
  // Update with mockable endpoint or data server endpoint
  employersUrl = ``;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getUser(): Observable < any > {
    return this.http.get(this.userUrl)
      .pipe(
        catchError(this.errorHandler.handleError('getUserFromDatabase', []))
      );
  }

  postUser(payload): Observable < any > {
    return this.http.post(this.userUrl, payload)
    .pipe(
      catchError(this.errorHandler.handleError('getUserFromDatabase', []))
    );
  }

  getShelters(): Observable < any > {
    return this.http.get(this.sheltersUrl)
      .pipe(
        catchError(this.errorHandler.handleError('getUserFromDatabase', []))
      );
  }

  getEmployers(): Observable < any > {
    return this.http.get(this.employersUrl)
      .pipe(
        catchError(this.errorHandler.handleError('getUserFromDatabase', []))
      );
  }


}
