import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTransacaoComponent } from './cadastro-transacao.component';

describe('CadastroTransacaoComponent', () => {
  let component: CadastroTransacaoComponent;
  let fixture: ComponentFixture<CadastroTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
