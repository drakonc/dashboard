import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ilogin } from './ilogin';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	model: Ilogin = { username: '', password: '' };
	constructor(private router: Router) {}

	ngOnInit() {
		if (localStorage.getItem('secion')) this.router.navigate([ '' ]);
	}

	submit() {
		console.log(this.model);
		if (this.model.username === 'jcastro' && this.model.password === 'Passw0rd!!') {
			localStorage.setItem('secion', 'Activo');
			this.router.navigate([ '/' ]);
		} else console.log('Contraseña y usuario errado');
	}
}
