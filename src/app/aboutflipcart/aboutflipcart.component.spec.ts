import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutflipcartComponent } from './aboutflipcart.component';

describe('AboutflipcartComponent', () => {
  let component: AboutflipcartComponent;
  let fixture: ComponentFixture<AboutflipcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutflipcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutflipcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
