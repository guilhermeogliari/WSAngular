import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTransacaoComponent } from './consulta-transacao.component';

describe('ConsultaTransacaoComponent', () => {
  let component: ConsultaTransacaoComponent;
  let fixture: ComponentFixture<ConsultaTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
