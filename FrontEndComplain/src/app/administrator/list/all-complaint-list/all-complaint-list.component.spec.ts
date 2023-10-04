import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComplaintListComponent } from './all-complaint-list.component';

describe('AllComplaintListComponent', () => {
  let component: AllComplaintListComponent;
  let fixture: ComponentFixture<AllComplaintListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComplaintListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComplaintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
