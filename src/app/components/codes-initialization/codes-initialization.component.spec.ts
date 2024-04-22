import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesInitializationComponent } from './codes-initialization.component';

describe('CodesInitializationComponent', () => {
  let component: CodesInitializationComponent;
  let fixture: ComponentFixture<CodesInitializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodesInitializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodesInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
