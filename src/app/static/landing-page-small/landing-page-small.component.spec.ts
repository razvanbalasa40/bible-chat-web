import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSmallComponent } from './landing-page-small.component';

describe('LandingPageSmallComponent', () => {
  let component: LandingPageSmallComponent;
  let fixture: ComponentFixture<LandingPageSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
