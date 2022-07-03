import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativiListaComponent } from './normativi-lista.component';

describe('NormativiListaComponent', () => {
  let component: NormativiListaComponent;
  let fixture: ComponentFixture<NormativiListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativiListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativiListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
