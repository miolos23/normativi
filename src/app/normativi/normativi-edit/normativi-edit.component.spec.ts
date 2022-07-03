import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativiEditComponent } from './normativi-edit.component';

describe('NormativiEditComponent', () => {
  let component: NormativiEditComponent;
  let fixture: ComponentFixture<NormativiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
