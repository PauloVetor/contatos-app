import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contato } from 'src/model/contato';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/contatos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContatos (): Observable<Contato[]> {
    return this.http.get<Contato[]>(apiUrl)
      .pipe(
        tap(contato => console.log('leu os contatos')),
        catchError(this.handleError('getContatos', []))
      );
  }

  getContato(id: number): Observable<Contato> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Contato>(url).pipe(
      tap(_ => console.log(`leu o contato id=${id}`)),
      catchError(this.handleError<Contato>(`getContato id=${id}`))
    );
  }

  addContato (contato: NgForm): Observable<Contato> {
    return this.http.post<Contato>(apiUrl, contato, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((contato: Contato) => console.log(`adicionou o conta com w/ id=${contato._id}`)),
      catchError(this.handleError<Contato>('addContato'))
    );
  }

  updateContato(id: String, contato: NgForm): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, contato, httpOptions).pipe(
      tap(_ => console.log(`atualiza o contato com id=${id}`)),
      catchError(this.handleError<any>('updatecontato'))
    );
  }

  deleteContato (id: any): Observable<Contato> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Contato>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o produto com id=${id}`)),
      catchError(this.handleError<Contato>('deleteContato'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
