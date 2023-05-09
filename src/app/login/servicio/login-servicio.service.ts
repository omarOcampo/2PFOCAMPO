import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject, map} from 'rxjs';
import { Usuario } from '../models';
import { HttpClient } from '@angular/common/http';




export interface LoginFormValue {
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {
   
  private loginUser$ = new BehaviorSubject<Usuario | null>(null);

  constructor(private router: Router,
              private httpClient: HttpClient ) { }
  
  obtenerUsuarioAutenticado() : Observable<Usuario| null > {
    return this.loginUser$.asObservable();
  }

  login (formValue: LoginFormValue):void {
    //this.loginUser$.next(usuario);
    //const usuario = {
     // id:1,
     // nombre:'pepe',
     // apellido:'argento',
     // email: formValue.email,
   // }
   // this.loginUser$.next(usuario);
   // this.router.navigate(['dashboard'])
   this.httpClient.get <Usuario []>(
    'http://localhost:3000/usuarios',
    {
      params:{
        ...formValue
      },
    }
   ).subscribe({
    next: (usuarios) =>{
      const usuarioAutenticado = usuarios [0];
      if (usuarioAutenticado){
        localStorage.setItem('token', usuarioAutenticado.token)
        this.loginUser$.next (usuarioAutenticado)
        this.router.navigate(['dashboard'])
      } else{
        alert ('Usuario y/o contraseña incorrectos')
      }
    }
   })
  }

  verificarToken(): Observable <Boolean>{
    const token= localStorage.getItem ('token');
     return this.httpClient.get <Usuario []> (
      `http://localhost:3000/usuarios?token=${token}
      `)
    .pipe(
      map ((usuarios) =>{
        const usuarioAutenticado = usuarios [0];
        if (usuarioAutenticado){
          localStorage.setItem('token', usuarioAutenticado.token)
          this.loginUser$.next (usuarioAutenticado)
         }
      return !!usuarioAutenticado;
        })
      );

 }
}
