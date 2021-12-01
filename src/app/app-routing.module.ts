import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ContatoDetalheComponent } from './contato-detalhe/contato-detalhe.component';
import { ContatoNovoComponent } from './contato-novo/contato-novo.component';
import { ContatoEditarComponent } from './contato-editar/contato-editar.component';

const routes: Routes = [{
  path: 'contatos',
  component: ContatosComponent,
  data: { title: 'Lista de Contatos' }
},
{
  path: 'contato-detalhe/:id',
  component: ContatoDetalheComponent,
  data: { title: 'Detalhe do Contato' }
},
{
  path: 'contato-novo',
  component: ContatoNovoComponent,
  data: { title: 'Adicionar Contato' }
},
{
  path: 'contato-editar/:id',
  component: ContatoEditarComponent,
  data: { title: 'Editar o Contato' }
},
{ path: '',
  redirectTo: '/contatos',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
