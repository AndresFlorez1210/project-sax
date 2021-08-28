import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url = 'https://api.mailjet.com/v3.1/send';

  constructor(public http: HttpClient) { }

  sendEmail(email: any): Observable<any>{
    let json = JSON.stringify(email);
    let params = "json="+json;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", "Basic " + btoa("fcbe7e2af2e8e50c1a1963048ca385ee:cb3cdf211019fc9cfa0c9dcb7c274d2c"));

     
    return this.http.post(this.url+'productos', params, {headers: headers});
}

}
