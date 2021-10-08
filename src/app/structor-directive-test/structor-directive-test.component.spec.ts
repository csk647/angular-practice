import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructorDirectiveTestComponent } from './structor-directive-test.component';

describe('StructorDirectiveTestComponent', () => {
  let component: StructorDirectiveTestComponent;
  let fixture: ComponentFixture<StructorDirectiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructorDirectiveTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructorDirectiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
