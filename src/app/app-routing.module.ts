import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { RolComponent } from './usuario/rol/rol.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [ { path: '', component: DashboardComponent }, { path: 'rol', component: RolComponent } ]
	},
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
