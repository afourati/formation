import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormsComponent } from './formation-forms.component';

describe('FormationFormsComponent', () => {
  let component: FormationFormsComponent;
  let fixture: ComponentFixture<FormationFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
