import { Component, Input } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details-component',
  templateUrl: './food-details-component.component.html',
  styleUrls: ['./food-details-component.component.css']
})
export class FoodDetailsComponent   {
    
  @Input()
  food: Food;
    
  @Input()
  createHandler: Function;
  
  @Input()
  updateHandler: Function;
  
  @Input()
  deleteHandler: Function;

  constructor(private foodService: FoodService) { }

  createFood(food: Food) {
	  this.foodService.createFood(food)
		  .then((newFood: Food) => {
			  this.createHandler(newFood);
		  });
  }
  updateFood(food: Food): void {
	  this.foodService.updateFood(food)
		  .then((updatedFood: Food) => {
			  this.updateHandler(updatedFood);
		  });
  }
  deleteFood(food: Food): void {
	  this.foodService.deleteFood(food._id)
		  .then((deletedFoodId: String) => {
			  this.deleteHandler(deletedFoodId, food);
		  });
  } 

}
