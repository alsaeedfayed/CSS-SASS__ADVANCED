import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTrilloComponent } from './sidebar-trillo.component';

describe('SidebarTrilloComponent', () => {
  let component: SidebarTrilloComponent;
  let fixture: ComponentFixture<SidebarTrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarTrilloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarTrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
