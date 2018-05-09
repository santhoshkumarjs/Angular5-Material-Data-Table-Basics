import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserModels } from '../models/usermodels';

@Injectable()
export class UserlistservicesService {
  private serviceurl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http: HttpClient) { }

  getUserList():Observable<UserModels[]>{
    return this._http.get<UserModels[]>(this.serviceurl);
  }

}
