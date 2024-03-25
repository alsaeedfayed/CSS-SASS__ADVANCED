import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssPractiseComponent } from './scss-practise.component';

describe('ScssPractiseComponent', () => {
  let component: ScssPractiseComponent;
  let fixture: ComponentFixture<ScssPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssPractiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScssPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
