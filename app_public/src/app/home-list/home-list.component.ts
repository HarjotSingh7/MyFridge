import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { FoodDetailsComponent } from '../food-details-component/food-details-component.component';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [FoodService]
})
export class HomeListComponent implements OnInit {

  foods: Food[]; 
  selectedFood: Food
  

  constructor(private foodService: FoodService) { }
    
 /* private getFood(): void { 
     this.foodService 
     .getFood() 
     .then(foundFood => {
     this.food = foundFood; 
     });
  }*/
  

  ngOnInit() {
    this.foodService
        .getFood()
        .then((foods: Food[]) => {
            this.foods = foods.map((food) => {
                return food;
            });
        });
  }
    
  private getIndexOfFood = (foodId: String) => {
    return this.foods.findIndex((food) => {
       return food._id === foodId;
    });
  }
    
  selectFood(food: Food) {
	this.selectedFood = food;
  }
    
   createNewFood() {
	   
	   var food: Food = {
		   name: '',
		   date: '',
           expiry: '',
           left_overs: '',
           quantity: ''
	   };
    this.selectFood(food);
  }
    
  deleteFood = (foodId: String, food: Food) => {
    
    var idx = this.getIndexOfFood(foodId);
	   
      if( +food.quantity > 1 ){
          var foodQuantity = +food.quantity - 1 ;
          food.quantity = ""+foodQuantity;
          this.ngOnInit(); 
          this.selectFood(food);
      } else {
			this.foods.splice(idx, 1);
			this.selectFood(null);
            this.ngOnInit();
	   }
       
       
	   return this.foods;
   }
    
  addFood = (food: Food) => {
	   if (food.name !== "" && food.date !== "" 
           && food.expiry !== ""  && food.left_overs !== "" 
           && food.quantity !== "" ){
			this.foods.push(food);
			this.selectFood(food);
	   }
	   return this.foods;
  }

  updateFood = (food: Food) => {
	   var idx = this.getIndexOfFood(food._id);
	   if (idx !== -1) {
		this.foods[idx] = food;
		this.selectFood(food);
	   }
	   return this.foods;
  }

}
