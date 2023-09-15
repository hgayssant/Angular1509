import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCitoyenComponent } from './gestion-citoyen.component';

describe('GestionCitoyenComponent', () => {
  let component: GestionCitoyenComponent;
  let fixture: ComponentFixture<GestionCitoyenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCitoyenComponent]
    });
    fixture = TestBed.createComponent(GestionCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
