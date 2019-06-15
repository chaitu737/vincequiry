import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": undefined })
}

@Injectable({
  providedIn: 'root' 
})
export class StudentService {
  domain = "http://localhost:3000/";
  formData;
   selectedFile: File = null;

  constructor(
    private http: HttpClient
  ) { }


  



getDetails(student){
  let headers = new HttpHeaders()
  return this.http.post(this.domain + 'authentication/register',student ).map(res =>res)
}


}
