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

  homeless = [
    {
      id: 1,
      name: 'Person 1'
    },
    {
      id: 2,
      name: 'Person 2'
    },
    {
      id: 3,
      name: 'Person 3'
    },
    {
      id: 4,
      name: 'Person 4'
    },
    {
      id: 5,
      name: 'Person 5'
    },
    {
      id: 6,
      name: 'Person 6'
    },
    {
      id: 7,
      name: 'Person 7'
    },
    {
      id: 8,
      name: 'Person 8'
    },
    {
      id: 9,
      name: 'A Person 9'
    },
    {
      id: 10,
      name: 'Person 10'
    }
  ];

  // Once server shelter endpoint is set up, delete hardcoded shelter list
  shelters = [{
    name: 'Shelter 1',
    beds: 25,
    checkedIn: [
      this.homeless[2],
      this.homeless[1],
      this.homeless[4],
      this.homeless[6],
      this.homeless[8],
      this.homeless[9]
    ],
    location: '1 Test Street',
    distance: 1.1
  },
  {
    name: 'Shelter 2',
    beds: 50,
    checkedIn: [
      this.homeless[2],
      this.homeless[3],
      this.homeless[4],
      this.homeless[6],
      this.homeless[8],
      this.homeless[9]
    ],
    location: '35 Computer Avenue',
    distance: 1.4
  },
  {
    name: 'Shelter 3',
    beds: 100,
    checkedIn: [
      this.homeless[3],
      this.homeless[4],
      this.homeless[5],
      this.homeless[6],
      this.homeless[8],
      this.homeless[9]
    ],
    location: '5 Angular Boulevard',
    distance: 3.2
  },
  {
    name: 'Shelter 4',
    beds: 75,
    checkedIn: [
      this.homeless[4],
      this.homeless[5],
      this.homeless[6],
      this.homeless[7],
      this.homeless[8],
      this.homeless[9]
    ],
    location: '16 Main Street',
    distance: 4.6
  },
  {
    name: 'Shelter 5',
    beds: 40,
    checkedIn: [],
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

  getHUsers() {
    return this.homeless;
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
