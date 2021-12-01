import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Contato } from 'src/model/contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  displayedColumns: string[] = [ 'nome', 'celular', 'email', 'acao'];
  dataSource: Contato[] = [];
  isLoadingResults = true;
  constructor( private _api: ApiService) { }

  ngOnInit() {
    this._api.getContatos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
