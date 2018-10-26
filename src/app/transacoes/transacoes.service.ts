import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  transacao: any[];

  constructor() {

    this.transacao = [
      {
        "nome": "Saque Diurno",
        "referencialTransacao": "SAQUE_DIURNO"
      },
      {
        "nome": "Saque Noturno",
        "referencialTransacao": "SAQUE_NOTURNO"
      },
      {
        "nome": "Saque Poupança",
        "referencialTransacao": "SAQUE_POUPANCA"
      }
    ]

  }

  getTransacoes() {
    return this.transacao;
  }

  setTransacao(nome: string, referencial: string) {
    this.transacao.push({
      "nome": nome,
      "referencialTransacao": referencial
    });
  }

  deleteTransacao(index){
    this.transacao.splice(index);
  }

}