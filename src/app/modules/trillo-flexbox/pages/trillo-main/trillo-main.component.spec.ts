import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilloMainComponent } from './trillo-main.component';

describe('TrilloMainComponent', () => {
  let component: TrilloMainComponent;
  let fixture: ComponentFixture<TrilloMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrilloMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrilloMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
