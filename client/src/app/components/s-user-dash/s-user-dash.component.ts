import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DatabaseService } from 'app/services/database.service';
import { AuthService } from 'app/services/auth.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-s-user-dash',
  templateUrl: './s-user-dash.component.html',
  styleUrls: ['./s-user-dash.component.css']
})
export class SUserDashComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('signinForm') signinForm;
  shelter;
  date;
  displayedColumns = ['id', 'name'];
  dataSource;
  credentials = {
      email: '',
      password: ''
  };

  userCounter;


  constructor(
    private database: DatabaseService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.date = Date.now();
    this.shelter = this.auth.getShelter();
    this.dataSource = new MatTableDataSource(this.shelter.checkedIn);
    this.userCounter = this.database.getHUsers().length;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onSubmit() {
    this.userCounter++;
    this.shelter.checkedIn.push({id: this.userCounter, name: this.credentials.email});
    this.dataSource = new MatTableDataSource(this.shelter.checkedIn);
    this.signinForm.reset();
  }

  onSkip() {
    this.userCounter++;
    this.shelter.checkedIn.push({id: this.userCounter, name: 'Person ' + this.userCounter});
    this.dataSource = new MatTableDataSource(this.shelter.checkedIn);
    this.signinForm.reset();
  }
}
