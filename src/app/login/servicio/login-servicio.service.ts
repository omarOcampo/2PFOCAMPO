import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Usuario } from '../models';




export interface LoginFormValue {
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {
   
  private loginUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(private router: Router) { }
  
  obtenerUsuarioAutenticado() : Observable<Usuario| null > {
    return this.loginUser$.asObservable();
  }

  login (formValue: LoginFormValue):void {
    //this.loginUser$.next(usuario);
    const usuario = {
      id:1,
      nombre:'pepe',
      apellido:'argento',
      email: formValue.email,
    }
    this.loginUser$.next(usuario);
    this.router.navigate(['dashboard'])
  }
}
