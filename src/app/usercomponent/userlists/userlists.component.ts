import { Component, OnInit } from '@angular/core';
import { UserlistservicesService } from '../services/userlistservices.service';
import { Observable } from 'rxjs/observable';
import { DataSource } from '@angular/cdk/collections';
import { UserModels } from '../models/usermodels'

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.css']
})
export class UserlistsComponent implements OnInit {
  dataSource = new UserDataSource(this.userlistservice);
  displayedColumns = ['name','email','phone','company'];
  constructor(private userlistservice: UserlistservicesService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any>{
  constructor(private userlistservice: UserlistservicesService){
    super();
  }

  connect():Observable<UserModels[]>{
    return this.userlistservice.getUserList();
  }
  disconnect(){}
}
