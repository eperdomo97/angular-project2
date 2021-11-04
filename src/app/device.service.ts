import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DeviceService {
<<<<<<< HEAD
  
   url='http://localhost:8080/'

   planId: any
   numbLines: any
=======

  url = 'https://telecom-application-ma.azurewebsites.net'

  planId: any
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933

  constructor(private httpClient: HttpClient) { }

  getById(value: any): Observable<any> {
    return this.httpClient.get(this.url + '/devices/' + value);
  }

  deleteDevice(value: String): Observable<any> {
    console.log(value + "---deviceservice")
    return this.httpClient.delete(this.url + '/devices/' + value)
  }

}


