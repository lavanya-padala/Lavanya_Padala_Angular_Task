import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedInfoComponent } from './submitted-info.component';

describe('SubmittedInfoComponent', () => {
  let component: SubmittedInfoComponent;
  let fixture: ComponentFixture<SubmittedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmittedInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmittedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
