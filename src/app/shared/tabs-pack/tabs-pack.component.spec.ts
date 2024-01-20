import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPackComponent } from './tabs-pack.component';

describe('TabsPackComponent', () => {
  let component: TabsPackComponent;
  let fixture: ComponentFixture<TabsPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
