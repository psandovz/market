import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccesorioComponent } from './card-accesorio.component';

describe('CardAccesorioComponent', () => {
  let component: CardAccesorioComponent;
  let fixture: ComponentFixture<CardAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
