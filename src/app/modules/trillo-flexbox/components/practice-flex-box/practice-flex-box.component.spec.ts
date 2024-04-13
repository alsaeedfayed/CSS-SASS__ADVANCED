import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFlexBoxComponent } from './practice-flex-box.component';

describe('PracticeFlexBoxComponent', () => {
  let component: PracticeFlexBoxComponent;
  let fixture: ComponentFixture<PracticeFlexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeFlexBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeFlexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
