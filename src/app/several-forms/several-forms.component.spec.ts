import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveralFormsComponent } from './several-forms.component';

describe('SeveralFormsComponent', () => {
  let component: SeveralFormsComponent;
  let fixture: ComponentFixture<SeveralFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeveralFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveralFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
