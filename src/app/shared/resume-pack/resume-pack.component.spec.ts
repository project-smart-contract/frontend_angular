import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePackComponent } from './resume-pack.component';

describe('ResumePackComponent', () => {
  let component: ResumePackComponent;
  let fixture: ComponentFixture<ResumePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
