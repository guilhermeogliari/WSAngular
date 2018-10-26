import { TransacoesService } from './../transacoes.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cadastro-transacao',
  templateUrl: './cadastro-transacao.component.html',
  styleUrls: ['./cadastro-transacao.component.css']
})
export class CadastroTransacaoComponent implements OnInit {

  transacao: any[];

  constructor(private transacaoService: TransacoesService) {
  }

  ngOnInit() {
  }

}
