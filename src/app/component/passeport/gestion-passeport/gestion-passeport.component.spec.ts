import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPasseportComponent } from './gestion-passeport.component';

describe('GestionPasseportComponent', () => {
  let component: GestionPasseportComponent;
  let fixture: ComponentFixture<GestionPasseportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPasseportComponent]
    });
    fixture = TestBed.createComponent(GestionPasseportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
