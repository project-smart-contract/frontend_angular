import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenderFormComponent } from './recommender-form.component';

describe('RecommenderFormComponent', () => {
  let component: RecommenderFormComponent;
  let fixture: ComponentFixture<RecommenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommenderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
