import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit() {
		if (!localStorage.getItem('secion')) this.router.navigate([ 'login' ]);
	}
}
