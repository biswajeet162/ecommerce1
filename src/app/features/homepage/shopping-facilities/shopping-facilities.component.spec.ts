import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFacilitiesComponent } from './shopping-facilities.component';

describe('ShoppingFacilitiesComponent', () => {
  let component: ShoppingFacilitiesComponent;
  let fixture: ComponentFixture<ShoppingFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingFacilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
