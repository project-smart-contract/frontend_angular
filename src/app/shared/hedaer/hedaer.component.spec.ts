import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedaerComponent } from './hedaer.component';

describe('HedaerComponent', () => {
  let component: HedaerComponent;
  let fixture: ComponentFixture<HedaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HedaerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HedaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
