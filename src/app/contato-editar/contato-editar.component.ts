import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contato-editar',
  templateUrl: './contato-editar.component.html',
  styleUrls: ['./contato-editar.component.scss']
})
export class ContatoEditarComponent implements OnInit {
  [x: string]: any;

  _id: String = '';
  contactsForm!: FormGroup;
  nome_contato: String = '';
  cel_contato: number = 0;
  email_contato: String = '';
  dt_nascimento: String = '';
  endereco: string = '';
  fone_contato: number = 0;
  fone2_contato: number = 0;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this['getContato'](this.route.snapshot.params['id']);
    this.contactsForm = this.formBuilder.group({
   'nome_contato' : [null, Validators.required],
   'cel_contato' : [null, Validators.required],
   'email_contato' : [null, Validators.required],
   'dt_nascimento': [null, Validators.required],
   'endereco': [null, Validators.required],
   'fone_contato': [null, Validators.required],
   'fone2_contato': [null, Validators.required]
 });
 }

 getProduto(id: number) {
  this.api.getContato(id).subscribe(data => {
    this._id = data._id;
    this.contactsForm.setValue({
      nome_produto: data.nome_contato,
      cel_contato: data.cel_contato,
      email_contato: data.email_contato,
      dt_nascimento: data.dt_nascimento,
      endereco: data.endereco,
      fone_contato: data.fone_contato,
      fone2_contato: data.fone2_contato,
    });
  });
}

updateProduto(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateContato(this._id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/contato-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
