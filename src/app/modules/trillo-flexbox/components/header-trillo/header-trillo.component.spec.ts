import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTrilloComponent } from './header-trillo.component';

describe('HeaderTrilloComponent', () => {
  let component: HeaderTrilloComponent;
  let fixture: ComponentFixture<HeaderTrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderTrilloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
