import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCocktailsComponent } from './output-cocktails.component';

describe('CocktailsComponent', () => {
  let component: OutputCocktailsComponent;
  let fixture: ComponentFixture<OutputCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputCocktailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
