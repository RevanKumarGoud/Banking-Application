import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankUserService {

  constructor(private http:HttpClient) { }
  url:string= 'http://localhost:3000/Users';
  // getuserlist():Observable<any>{
  //   return this.http.get(this.url)
  //   }

}
