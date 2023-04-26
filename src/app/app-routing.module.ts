import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './dashboard/panel/panel.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoDetalleComponent } from './alumnos/pages/alumno-detalle/alumno-detalle.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PanelComponent,
    children: [
      {
        path: 'alumnos',
        children: [{
          path: '',
          component:AlumnosComponent,
        },
      {
        path: ':id',
        component: AlumnoDetalleComponent,
      }
      ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
