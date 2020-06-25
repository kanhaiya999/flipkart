import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicContentComponent } from './pic-content.component';

describe('PicContentComponent', () => {
  let component: PicContentComponent;
  let fixture: ComponentFixture<PicContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
