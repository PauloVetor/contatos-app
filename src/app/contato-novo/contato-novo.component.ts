import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contato-novo',
  templateUrl: './contato-novo.component.html',
  styleUrls: ['./contato-novo.component.scss']
})
export class ContatoNovoComponent implements OnInit {
  contactForm!: FormGroup;
  contact_name: String = '';
  contact_cel: number = 0;
  contact_email: String = '';
  data_nascimento: String = '';
  contact_endereco: String = '';
  contact_fone: number = 0;
  contact_fone2: number = 0;

  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'nome_contato' : [null, Validators.required],
      'cel_contato' : [null, Validators.required],
      'email_contato' : [null, Validators.required],
      'dt_nascimento': [null, Validators.required],
      'endereco': [null, Validators.required],
      'fone_contato': [null, Validators.required],
      'fone2_contato': [null, Validators.required]

    });
  }
  addContato(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addContato(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/contato-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
