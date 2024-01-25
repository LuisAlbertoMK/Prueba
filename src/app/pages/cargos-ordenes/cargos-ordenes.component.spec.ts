import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosOrdenesComponent } from './cargos-ordenes.component';

describe('CargosOrdenesComponent', () => {
  let component: CargosOrdenesComponent;
  let fixture: ComponentFixture<CargosOrdenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosOrdenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
