import { Component, OnInit } from '@angular/core';
import { RolService } from './rol.service';
import { Rol } from './rol';

@Component({
	selector: 'app-rol',
	templateUrl: './rol.component.html',
	styleUrls: [ './rol.component.css' ]
})
export class RolComponent implements OnInit {
	rol: any = [];
	constructor(protected rolService: RolService) {}

	ngOnInit() {
		this.GetRols();
		console.log(this.rol);
	}

	GetRols() {
		this.rolService.GetRols().subscribe(
			(res) => {
				this.rol = res;
			},
			(err) => console.log(err)
		);
	}
}
