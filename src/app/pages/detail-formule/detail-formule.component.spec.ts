import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormuleComponent } from './detail-formule.component';

describe('DetailFormuleComponent', () => {
  let component: DetailFormuleComponent;
  let fixture: ComponentFixture<DetailFormuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFormuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
