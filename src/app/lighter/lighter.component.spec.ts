import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LighterComponent } from './lighter.component';

describe('LighterComponent', () => {
  let component: LighterComponent;
  let fixture: ComponentFixture<LighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LighterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
