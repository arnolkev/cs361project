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

  accountTypes = ['Homeless User', 'Shelter Employee', 'Public Employee'];

  // List of states for select dropdown
  states = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // List of genders for gender dropdown
  genders = ['Male', 'Female', 'Other', 'Decline to Identify'];

  // Once server shelter endpoint is set up, delete hardcoded shelter list
  shelters = [{
    name: 'Shelter 1',
    beds: 25,
    available: 15,
    location: '1 Test Street',
    distance: 1.1
  },
  {
    name: 'Shelter 2',
    beds: 50,
    available: 3,
    location: '35 Computer Avenue',
    distance: 1.4
  },
  {
    name: 'Shelter 3',
    beds: 100,
    available: 52,
    location: '5 Angular Boulevard',
    distance: 3.2
  },
  {
    name: 'Shelter 4',
    beds: 75,
    available: 32,
    location: '16 Main Street',
    distance: 4.6
  },
  {
    name: 'Shelter 5',
    beds: 40,
    available: 30,
    location: '1000 Oregon Trail',
    distance: 5.3
  }
];
  // Once server employer endpoint is set up, delete hardcoded employer list
  employers = ['Employer 1', 'Employer 2', 'Employer 3'];

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  getAccountTypes() {
    return this.accountTypes;
  }

  getStates() {
    return this.states;
  }

  getGenders() {
    return this.genders;
  }

  getShelters() {
    return this.shelters;
  }

  getEmployers() {
    return this.employers;
  }

}
