import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrilloComponent } from './main-trillo.component';

describe('MainTrilloComponent', () => {
  let component: MainTrilloComponent;
  let fixture: ComponentFixture<MainTrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTrilloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
