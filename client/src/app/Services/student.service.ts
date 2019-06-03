import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  domain = "http://localhost:3000/";

  constructor(
    private http: HttpClient
  ) { }



getDetails(user){
  return this.http.post(this.domain + 'authentication/register', user).map(res =>res)
}


}
