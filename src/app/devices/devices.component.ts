import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../models/device';
import { Plan } from '../models/plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
  template: ''
})
export class DevicesComponent implements OnInit {

  deviceList!: Device[];
  planList!: Plan[];
  planName: any

<<<<<<< HEAD

  constructor(private deviceService: DeviceService, private planService : PlanService  ){ }
=======
  constructor(private deviceService: DeviceService, private planService: PlanService) { }
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933


  ngOnInit(): void {

<<<<<<< HEAD
		this.deviceService.getById(this.deviceService.planId).subscribe(result => {
			this.deviceList = result;	

      if(this.deviceList.length >= this.deviceService.numbLines ){
        (document.getElementById('addDevice') as HTMLElement).hidden = true

      }
      else{
        (document.getElementById('addDevice') as HTMLElement).hidden = false
      }

      console.log(this.deviceList.length);
		})
=======
    this.deviceService.getById(this.deviceService.planId).subscribe(result => {
      this.deviceList = result;
      console.log(this.deviceList);
    })
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933

    

    this.planService.getAllPlans().subscribe(result => {
      this.planList = result;
      console.log(result);
    })

    this.planName = this.planService.planName
<<<<<<< HEAD
    
    
    console.log(this.deviceService.planId + " --" + this.planService.planName + " ---" + this.deviceService.numbLines)
=======

    console.log(this.deviceService.planId + " --" + this.planService.planName)
>>>>>>> f8f5bcc0c1f0138af40b2eb10dbc486e855ed933

  }

  remove(value: String) {
    console.log(value);
    this.deviceService.deleteDevice(value).subscribe(result => {
      console.log(result);
    })

  }



}
