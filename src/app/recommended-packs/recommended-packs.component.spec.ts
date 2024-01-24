import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedPacksComponent } from './recommended-packs.component';

describe('RecommendedPacksComponent', () => {
  let component: RecommendedPacksComponent;
  let fixture: ComponentFixture<RecommendedPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedPacksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
