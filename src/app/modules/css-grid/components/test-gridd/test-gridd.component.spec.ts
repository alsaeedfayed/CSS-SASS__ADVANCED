import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGriddComponent } from './test-gridd.component';

describe('TestGriddComponent', () => {
  let component: TestGriddComponent;
  let fixture: ComponentFixture<TestGriddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestGriddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestGriddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
