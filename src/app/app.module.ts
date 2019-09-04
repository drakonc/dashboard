import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { RolService } from './usuario/rol/rol.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, HomeModule, UsuarioModule, LoginModule, FormsModule ],
	providers: [ RolService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
