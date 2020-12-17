import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAccesorioComponent } from './detalle-accesorio.component';

describe('DetalleAccesorioComponent', () => {
  let component: DetalleAccesorioComponent;
  let fixture: ComponentFixture<DetalleAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
