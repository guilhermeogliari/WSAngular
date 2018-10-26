import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroTransacaoComponent } from './cadastro-transacao/cadastro-transacao.component';
import { ConsultaTransacaoComponent } from './consulta-transacao/consulta-transacao.component';
import { TransacoesService } from "./transacoes.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroTransacaoComponent, ConsultaTransacaoComponent],
  exports:[
    ConsultaTransacaoComponent,
    CadastroTransacaoComponent
  ],
  providers:[TransacoesService]
})
export class TransacoesModule { }
