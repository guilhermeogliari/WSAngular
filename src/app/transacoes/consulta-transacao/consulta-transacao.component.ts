import { TransacoesService } from './../transacoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-transacao',
  templateUrl: './consulta-transacao.component.html',
  styleUrls: ['./consulta-transacao.component.css']
})
export class ConsultaTransacaoComponent implements OnInit {

  transacoes: any;

  constructor(private transacaoService: TransacoesService) {

    this.transacoes = transacaoService.getTransacoes();

  }

  ngOnInit() {
  }

}
