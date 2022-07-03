import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativiToolbarComponent } from './normativi-toolbar.component';

describe('NormativiToolbarComponent', () => {
  let component: NormativiToolbarComponent;
  let fixture: ComponentFixture<NormativiToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativiToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativiToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
