import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from './dashboard/panel/panel.module';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    AppRoutingModule,
    CursosModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
