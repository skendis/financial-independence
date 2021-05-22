import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authUrl = `${environment.api}/auth`;
  private loggedIn = new BehaviorSubject(false);

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

  disconenct() {
    window.location.href = `/${this.authUrl}/logout`;
    this.setLoggedInState(false);
  }

  setLoggedInState(value) {
    this.loggedIn.next(value);
    localStorage.setItem('loggedIn', value);
  }

  getLoggedInState() {
    const status = localStorage.getItem('loggedIn');
    if (status === 'true') {
      this.loggedIn.next(true);
    }
    return this.loggedIn;
  }

}
