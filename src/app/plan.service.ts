import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlanService {

  url = 'https://telecom-application-ma.azurewebsites.net'

<<<<<<< HEAD
      url='http://localhost:8080/'
=======
  planName: any
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933

  constructor(private httpClient: HttpClient) { }

  getAllPlans(): Observable<any> {
    return this.httpClient.get(this.url + '/plans');
  }

  deletePlan(value: number): Observable<any> {
    console.log(value + "---deviceservice")
    return this.httpClient.delete(this.url + '/plans/' + value)
  }

}
