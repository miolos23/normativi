import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativiArtikalListaComponent } from './normativi-artikal-lista.component';

describe('NormativiArtikalListaComponent', () => {
  let component: NormativiArtikalListaComponent;
  let fixture: ComponentFixture<NormativiArtikalListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativiArtikalListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativiArtikalListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
