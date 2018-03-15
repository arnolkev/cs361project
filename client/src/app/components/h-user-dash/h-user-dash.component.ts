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
  savedshelters
  search:string;



  constructor(
    private database: DatabaseService
  ) {}

  ngOnInit() {
    this.shelters = this.database.getShelters();
    this.savedshelters = this.database.getShelters();

    


  }

  searchChanged(Text) {
    
    this.shelters = this.savedshelters;
    this.shelters = this.shelters.filter((shelter) => {
      
    if (shelter.location.toLowerCase().includes(Text.toLowerCase())){
      return true;
    }
    if (shelter.name.toLowerCase().includes(Text.toLowerCase())){
      return true;
    }
    });
    
    
    
  }


}
