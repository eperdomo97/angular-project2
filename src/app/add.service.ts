import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Device } from './models/device';

@Injectable({
  providedIn: 'root'
})

export class AddService {

<<<<<<< HEAD
    url='http://localhost:8080/devices/add'
=======
  url = 'https://telecom-application-ma.azurewebsites.net/devices/add'
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933

  constructor(private httpClient: HttpClient) { }

  saveDevice(device: Device): Observable<any> {
    return this.httpClient.post(this.url, device)
  }

}
