import {
  Component,
  OnInit
} from '@angular/core';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-h-user-dash',
  templateUrl: './h-user-dash.component.html',
  styleUrls: ['./h-user-dash.component.css']
})
export class HUserDashComponent implements OnInit {

  shelters;

  constructor(
    private database: DatabaseService
  ) {}

  ngOnInit() {
    this.shelters = this.database.getShelters();
  }

}
