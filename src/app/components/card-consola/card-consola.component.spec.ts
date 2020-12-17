import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsolaComponent } from './card-consola.component';

describe('CardConsolaComponent', () => {
  let component: CardConsolaComponent;
  let fixture: ComponentFixture<CardConsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
