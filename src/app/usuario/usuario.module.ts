import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RolComponent } from './rol/rol.component';

@NgModule({
	declarations: [ RolComponent ],
	exports: [ RolComponent ],
	imports: [ CommonModule, AppRoutingModule ]
})
export class UsuarioModule {}
