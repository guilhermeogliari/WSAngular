import { RelatoriosModule } from './relatorios/relatorios.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroTransacaoComponent } from './transacoes/cadastro-transacao/cadastro-transacao.component';
import { TransacionalComponent } from './relatorios/transacional/transacional.component';

const routes: Routes = [
  { path: '', component: CadastroTransacaoComponent },
  { path: 'transacao', component: CadastroTransacaoComponent },
  { path: 'relatorio/transacional', component: TransacionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
