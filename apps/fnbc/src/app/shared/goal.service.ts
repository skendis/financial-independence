import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goalUrl = `${environment.api}/goals`;
  constructor(private http: HttpClient) { }

  getGoalTypes(){
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.http.get(`${this.goalUrl}/types`,{headers})
  }
}
