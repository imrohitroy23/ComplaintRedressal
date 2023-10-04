import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEngineerComponent } from './create-engineer.component';

describe('CreateEngineerComponent', () => {
  let component: CreateEngineerComponent;
  let fixture: ComponentFixture<CreateEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
