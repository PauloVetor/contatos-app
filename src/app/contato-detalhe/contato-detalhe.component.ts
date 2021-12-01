import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Contato } from 'src/model/contato';

@Component({
  selector: 'app-contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.scss']
})
export class ContatoDetalheComponent implements OnInit {

  produto: Contato = { _id: '', nome_contato: '', cel_contato: 0 , email_contato: '', dt_nascimento: '', endereco: '', fone_contato: 0, fone2_contato: 0, };
  isLoadingResults = true;
  contato: Contato = new Contato;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getContato(this.route.snapshot.params['id']);
  }

  getContato(id: number) {
    this.api.getContato(id)
      .subscribe(data => {
        this.contato = data;
        console.log(this.contato);
        this.isLoadingResults = false;
      });
  }

  deleteContato(id: any) {
    this.isLoadingResults = true;
    this.api.deleteContato(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/contatos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
