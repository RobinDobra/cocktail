import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCocktailsComponent } from './input-cocktails.component';

describe('InputCocktailsComponent', () => {
  let component: InputCocktailsComponent;
  let fixture: ComponentFixture<InputCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCocktailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
