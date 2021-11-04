    import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs';
    import { HttpClient } from '@angular/common/http';
    import { Plan } from './models/plan';

    @Injectable({
      providedIn: 'root'
    })


    export class PlanService {

      url='http://localhost:8080/'

      planName: any
 

      constructor(private httpClient : HttpClient) { }


      getAllPlans(): Observable<any> {
        return this.httpClient.get(this.url + '/plans');
      }

      deletePlan(value : number): Observable<any>{
        console.log(value+ "---deviceservice")
        return this.httpClient.delete(this.url + '/plans/'+ value)
      }

      



    }
