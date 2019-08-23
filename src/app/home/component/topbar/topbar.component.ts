import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-topbar',
	templateUrl: './topbar.component.html',
	styleUrls: [ './topbar.component.css' ]
})
export class TopbarComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	Salir() {
		localStorage.removeItem('secion');
		this.router.navigate([ 'login' ]);
	}
}
