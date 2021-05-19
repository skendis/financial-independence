import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authUrl = `${environment.api}/auth`;

  login(user, password): Observable<any> {
    const body = {
      username: user,
      password: password
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.post(`${this.authUrl}/login`, body, { headers });
  }

  register(user, password): Observable<any> {
    const body = {
      username: user,
      password: password
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.post(`${this.authUrl}/register`, body, { headers });
  }


}
