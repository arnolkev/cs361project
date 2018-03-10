import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-h-user-dash',
  templateUrl: './h-user-dash.component.html',
  styleUrls: ['./h-user-dash.component.css']
})
export class HUserDashComponent implements OnInit {

  shelters = [{
      name: 'Shelter1',
      beds: 25,
      available: 15,
      location: '1 Test Street',
      distance: 1.1
    },
    {
      name: 'Shelter2',
      beds: 50,
      available: 3,
      location: '35 Computer Avenue',
      distance: 1.4
    },
    {
      name: 'Shelter3',
      beds: 100,
      available: 52,
      location: '5 Angular Boulevard',
      distance: 3.2
    },
    {
      name: 'Shelter4',
      beds: 75,
      available: 32,
      location: '16 Main Street',
      distance: 4.6
    },
    {
      name: 'Shelter5',
      beds: 40,
      available: 30,
      location: '1000 Oregon Trail',
      distance: 5.3
    }
  ];


  constructor() {}

  ngOnInit() {}

}
