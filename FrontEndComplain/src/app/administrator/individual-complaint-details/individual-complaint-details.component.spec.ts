import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualComplaintDetailsComponent } from './individual-complaint-details.component';

describe('IndividualComplaintDetailsComponent', () => {
  let component: IndividualComplaintDetailsComponent;
  let fixture: ComponentFixture<IndividualComplaintDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualComplaintDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualComplaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
