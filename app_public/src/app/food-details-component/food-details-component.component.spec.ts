import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsComponentComponent } from './food-details-component.component';

describe('FoodDetailsComponentComponent', () => {
  let component: FoodDetailsComponentComponent;
  let fixture: ComponentFixture<FoodDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
