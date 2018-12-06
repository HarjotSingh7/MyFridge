webpackJsonp([1,4],{0:function(t,e,o){t.exports=o("x35b")},"53OA":function(t,e,o){"use strict";var n=o("3j3K"),r=o("IvA6");o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){var e=this;this.foodService=t,this.getIndexOfFood=function(t){return e.foods.findIndex(function(e){return e._id===t})},this.deleteFood=function(t,o){var n=e.getIndexOfFood(t);if(+o.quantity>1){var r=+o.quantity-1;o.quantity=""+r,e.ngOnInit(),e.selectFood(o)}else e.foods.splice(n,1),e.selectFood(null),e.ngOnInit();return e.foods},this.addFood=function(t){return""!==t.name&&""!==t.date&&""!==t.expiry&&""!==t.left_overs&&""!==t.quantity&&(e.foods.push(t),e.selectFood(t)),e.foods},this.updateFood=function(t){var o=e.getIndexOfFood(t._id);return-1!==o&&(e.foods[o]=t,e.selectFood(t)),e.foods}}return t.prototype.ngOnInit=function(){var t=this;this.foodService.getFood().then(function(e){t.foods=e.map(function(t){return t})})},t.prototype.selectFood=function(t){this.selectedFood=t},t.prototype.createNewFood=function(){var t={name:"",date:"",expiry:"",left_overs:"",quantity:""};this.selectFood(t)},t}();c=i([o.i(n._14)({selector:"app-home-list",template:o("l0FM"),styles:[o("8l0Z")],providers:[r.a]}),a("design:paramtypes",["function"==typeof(d=void 0!==r.a&&r.a)&&d||Object])],c);var d},"5xMp":function(t,e){t.exports="<h1>\n  {{title}}\n</h1>\n"},"8l0Z":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},Iksp:function(t,e,o){"use strict";var n=o("Qbdm"),r=o("3j3K"),i=o("NVOs"),a=o("Fzro"),c=o("YWx4"),d=o("53OA"),f=o("5oXY"),s=o("zHBK"),l=o("tayH");o.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},p=function(){function t(){}return t}();p=u([o.i(r.b)({declarations:[c.a,d.a,s.a,l.a],imports:[n.a,i.a,a.a,f.a.forRoot([{path:"",component:d.a}])],providers:[],bootstrap:[s.a]})],p)},IvA6:function(t,e,o){"use strict";var n=o("3j3K"),r=o("Fzro"),i=o("eErF");o.n(i);o.d(e,"a",function(){return d});var a=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t){this.http=t,this.apiBaseUrl="http://localhost:3000/api/myfood"}return t.prototype.getFood=function(){return this.http.get(this.apiBaseUrl).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.createFood=function(t){return this.http.post(this.apiBaseUrl,t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.deleteFood=function(t){return this.http.delete(this.apiBaseUrl+"/"+t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.updateFood=function(t){var e=this.apiBaseUrl+"/"+t._id;return this.http.put(e,t).toPromise().then(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("Something has gone wrong",t),Promise.reject(t.message||t)},t}();d=a([o.i(n.v)(),c("design:paramtypes",["function"==typeof(f=void 0!==r.b&&r.b)&&f||Object])],d);var f},JvNc:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},MOVZ:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="MOVZ"},P321:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=function(){function t(){}return t}()},YWx4:function(t,e,o){"use strict";var n=o("3j3K");o.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},i=function(){function t(){this.title="app works!"}return t}();i=r([o.i(n._14)({selector:"app-root",template:o("5xMp"),styles:[o("okgc")]})],i)},kZql:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={production:!0}},l0FM:function(t,e){t.exports='<div class="card">\n    <h3>Food in My Fridge:</h3>\n\x3c!--    <div class="card-block col-md-5 ">\n        <ul class="list-group">\n            <li  *ngFor="let food of food" class="list-group-item">\n                <h4><a>{{food.name}}</a></h4>\n                <h5>Date: {{food.date|date}} </h5> <h5> Expiry Date: {{food.expiry|date}}</h5>\n                <h5>Left Over: {{food.left_overs}} &nbsp; Quantity: {{food.quantity}}</h5>\n                <button class="btn btn-info" (click)="updateContact(contact)">Edit</button>\n\t\t        <button class="btn btn-danger" (click)="deleteContact(contact._id)">Delete</button>\n            </li>\n        </ul>\n    </div> --\x3e\t\n    \n    <div class="col-md-5">\n    <button class="btn btn-warning" (click)="createNewFood()">New</button>\n    <br/>\n\t<ul class="list-group" >\n\t\t<li class="list-group-item"\n\t\t\t*ngFor="let food of foods"\n            [ngClass]="{\'active\': selectedItem == item}"\n\t\t\t(click)="selectFood(food,$event, item)">\n\t\t\t{{food.name}}\n\t\t</li>\n\t</ul>\n    </div>\n\t<div class="col-md-5 col-md-offset-2">\n\t\t<app-food-details-component\n\t\t\t[food]="selectedFood"\n\t\t\t[createHandler]="addFood"\n\t\t\t[updateHandler]="updateFood"\n\t\t\t[deleteHandler]="deleteFood">\n\t\t</app-food-details-component>\n\t</div>\n</div>\n        '},okgc:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},p1YF:function(t,e){t.exports='<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse"> \n    <div class="container">\n         \n        <a href="/ " class="navbar-brand">MyFridge Project</a>\n         \n    </div>\n</nav>\n<router-outlet></router-outlet>\n<div class="container"> \n    <footer> \n        <div class="row">\n            <div class="col-12"><small>&copy; Harjot Singh 8256984 </small></div>\n        </div>\n    </footer>\n</div>\n\n'},tayH:function(t,e,o){"use strict";var n=o("3j3K"),r=o("P321"),i=o("IvA6");o.d(e,"a",function(){return d});var a=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t){this.foodService=t}return t.prototype.createFood=function(t){var e=this;this.foodService.createFood(t).then(function(t){e.createHandler(t)})},t.prototype.updateFood=function(t){var e=this;this.foodService.updateFood(t).then(function(t){e.updateHandler(t)})},t.prototype.deleteFood=function(t){var e=this;this.foodService.deleteFood(t._id).then(function(o){e.deleteHandler(o,t)})},t}();a([o.i(n.m)(),c("design:type","function"==typeof(f=void 0!==r.a&&r.a)&&f||Object)],d.prototype,"food",void 0),a([o.i(n.m)(),c("design:type",Object)],d.prototype,"createHandler",void 0),a([o.i(n.m)(),c("design:type",Object)],d.prototype,"updateHandler",void 0),a([o.i(n.m)(),c("design:type",Object)],d.prototype,"deleteHandler",void 0),d=a([o.i(n._14)({selector:"app-food-details-component",template:o("uZAf"),styles:[o("vagh")]}),c("design:paramtypes",["function"==typeof(s=void 0!==i.a&&i.a)&&s||Object])],d);var f,s},uZAf:function(t,e){t.exports='<div *ngIf="food" class="row">\n\t<div class="col-md-12">\n\t\t<h2 *ngIf="food._id">Contact Details</h2>\n\t\t<h2 *ngIf="!food._id">New Contact</h2>\n\t</div>\n</div>\n<div *ngIf="food" class="row">\n\t<form class="col-md-12">\n\t\t<div class="form-group">\n\t\t\t<label for="food-name">Name</label>\n\t\t\t<input class="form-control" name="food-name" [(ngModel)]="food.name" placeholder="Name"/>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label for="food-date">Date</label>\n\t\t\t<input class="form-control" name="food-date" [(ngModel)]="food.date" placeholder="Date"/>\n\t\t</div>\n        <div class="form-group">\n\t\t\t<label for="food-dateExp">Expiry Date</label>\n\t\t\t<input class="form-control" name="food-dateExp" [(ngModel)]="food.expiry" placeholder="Expiry Date"/>\n\t\t</div>\n        <div class="form-group">\n\t\t\t<label for="food-leftOver">Left Over</label>\n\t\t\t<input class="form-control" name="food-leftOver" [(ngModel)]="food.left_overs" placeholder="Left Over"/>\n\t\t</div>\n        <div class="form-group">\n\t\t\t<label for="food-quantity">Quantity</label>\n\t\t\t<input class="form-control" name="food-quantity" [(ngModel)]="food.quantity" placeholder="Quantity"/>\n\t\t</div>        \n        \n\t\t<button class="btn btn-primary" *ngIf="!food._id" (click)="createFood(food)">Add Food Item</button>\n\t\t<button class="btn btn-info" *ngIf="food._id" (click)="updateFood(food)">Update Food Item</button>\n\t\t<button class="btn btn-danger" *ngIf="food._id" (click)="deleteFood(food)">Delete Food Item </button>\n\t</form>\n</div>'},vagh:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},x35b:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("3j3K"),r=o("O61y"),i=o("Iksp");o("kZql").a.production&&o.i(n.a)(),o.i(r.a)().bootstrapModule(i.a)},zHBK:function(t,e,o){"use strict";var n=o("3j3K");o.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=r([o.i(n._14)({selector:"app-framework",template:o("p1YF"),styles:[o("JvNc")]}),i("design:paramtypes",[])],a)}},[0]);