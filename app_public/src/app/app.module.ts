import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';

import { RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { FoodDetailsComponent } from './food-details-component/food-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    FrameworkComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
 RouterModule.forRoot([
         {
             path: '',
             component: HomeListComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
