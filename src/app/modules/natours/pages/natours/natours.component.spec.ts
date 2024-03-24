import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatoursComponent } from './natours.component';

describe('NatoursComponent', () => {
  let component: NatoursComponent;
  let fixture: ComponentFixture<NatoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NatoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
