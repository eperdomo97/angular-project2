import { Component, OnInit } from '@angular/core';
import { Plan } from '../models/plan';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  subTotal = 0;
  taxTotal = 0;
  grandTotal = 0;

  planList!: Plan[];

  constructor(private planService : PlanService) { }

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe(result => {
			this.planList = result;	

      this.planList.forEach(plan => {
        this.subTotal += plan.planPrice;
      })

      this.taxTotal = this.subTotal * .05;

      this.grandTotal = this.subTotal + this.taxTotal;

		})

  }

  remove(value: number){
    console.log(value);
    this.planService.deletePlan(value).subscribe(result => {
      console.log(result);
    })

  }

}
