import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url : string =   "http://localhost:3000/user";

  constructor(private httpclient : HttpClient) { }
  adduser(Revan : User):Observable<any>{
    return this.httpclient.post(this._url, Revan);
  }
  getuserlist():Observable<any>{
  return this.httpclient.get(this._url)
  }
  getuser(id : number):Observable<any>{
    return this.httpclient.get(this._url+'/'+id)
  }
  EditUser(user : User):Observable<any>{
    return this.httpclient.put(this._url+'/'+user.id,user)
  }
  Delateuser(userDelate : User):Observable<any>{
    return this.httpclient.delete(this._url+'/'+userDelate.id)

  }
 // getUserEmail(Email:string):Observable<any>{
  // return this.httpclient.get(this._url+'/'+Email)
 // }
}
