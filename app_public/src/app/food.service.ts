import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Food } from './food';

@Injectable()
export class FoodService {
    
  private apiBaseUrl =  'http://localhost:3000/api/myfood';
  constructor(private http: Http) { }
    
  public getFood(): Promise<Food[]> {
     return this.http
                 .get(this.apiBaseUrl)
                 .toPromise()
                 .then(response => response.json() as Food[])
                 .catch(this.handleError);
  } 
    
  createFood(newFood: Food): Promise<void | Food> {
	  return this.http.post(this.apiBaseUrl, newFood)
				.toPromise()
				.then(response => response.json() as Food)
				.catch(this.handleError);
  }
                                     
  deleteFood(delFoodId: String): Promise<void | String> {
	  return this.http.delete(this.apiBaseUrl+'/'+delFoodId)
				 .toPromise()
				 .then(response => response.json() as String)
				 .catch(this.handleError);
  }
                                     
  updateFood(putFood: Food): Promise<void | Food> {
	  var putUrl = this.apiBaseUrl + '/' + putFood._id;
	  return this.http.put(putUrl, putFood)
				 .toPromise()
				 .then(response => response.json() as Food)
				 .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
     console.error('Something has gone wrong', error);
     return Promise.reject(error.message || error);
  }

}
