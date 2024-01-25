import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosDetailsComponent } from './cargos-details.component';

describe('CargosDetailsComponent', () => {
  let component: CargosDetailsComponent;
  let fixture: ComponentFixture<CargosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
