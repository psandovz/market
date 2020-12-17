import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConsolaComponent } from './detalle-consola.component';

describe('DetalleConsolaComponent', () => {
  let component: DetalleConsolaComponent;
  let fixture: ComponentFixture<DetalleConsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleConsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
