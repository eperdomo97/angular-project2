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

  constructor(private deviceService: DeviceService, private planService: PlanService) { }


  ngOnInit(): void {

    this.deviceService.getById(this.deviceService.planId).subscribe(result => {
      this.deviceList = result;
      console.log(this.deviceList);
    })

    this.planService.getAllPlans().subscribe(result => {
      this.planList = result;
      console.log(result);
    })

    this.planName = this.planService.planName

    console.log(this.deviceService.planId + " --" + this.planService.planName)

  }

  remove(value: String) {
    console.log(value);
    this.deviceService.deleteDevice(value).subscribe(result => {
      console.log(result);
    })

  }



}
