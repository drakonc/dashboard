import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [ HomeComponent, DashboardComponent ],
	exports: [ HomeComponent ],
	imports: [ CommonModule, AppRoutingModule ]
})
export class HomeModule {}
