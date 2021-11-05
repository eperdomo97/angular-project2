import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { Plan } from '../models/plan'; 
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  planList!: Plan[];
  


  constructor(private planService: PlanService, private cartService : CartService){}

  ngOnInit(): void {

		this.planService.getAllPlans().subscribe(result => {
			this.planList = result;	
      console.log(result);
		})


	}


  basicPlan = {  
    "planName" : "Basic Plan",
    "planPrice" : 50.00,
    "planNumLines" : 1,
    };
 
  planA(){
    console.log("clicked A")

    this.cartService.a = "true";
    this.cartService.b = "false";
    this.cartService.c = "false";

  }

  standardPlan = {  
    "planName" : "Standard Plan",
    "planPrice" : 100.00,
    "planNumLines" : 2,
  };

  planB(){
    console.log("clicked B")

    this.cartService.a = "false";
    this.cartService.b = "true";
    this.cartService.c = "false";    
  }


  familyPlan = {  
    "planName" : "Family Plan",
    "planPrice" : 150.00,
    "planNumLines" : 4
  };  
  planC(){
    console.log("clicked C")
    this.cartService.a = "false";
    this.cartService.b = "false";
    this.cartService.c = "true";    

  }





}
