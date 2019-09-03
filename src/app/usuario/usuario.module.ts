import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RolComponent } from './rol/rol.component';
import { RolService } from './rol/rol.service';

@NgModule({
	declarations: [ RolComponent ],
	exports: [ RolComponent ],
	providers: [ RolService ],
	imports: [ CommonModule, AppRoutingModule,FormsModule ]
})
export class UsuarioModule {}
