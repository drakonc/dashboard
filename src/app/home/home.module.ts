import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

@NgModule({
	declarations: [ HomeComponent, DashboardComponent, FooterComponent, TopbarComponent, SidebarComponent ],
	exports: [ HomeComponent ],
	imports: [ CommonModule, AppRoutingModule ]
})
export class HomeModule {}
