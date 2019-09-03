import { Component, OnInit } from '@angular/core';
import { RolService } from './rol.service';

@Component({
	selector: 'app-rol',
	templateUrl: './rol.component.html',
	styleUrls: [ './rol.component.css' ]
})
export class RolComponent implements OnInit {
	constructor(protected rolService: RolService) {}

	ngOnInit() {
		console.log(this.rolService.GetRols());
	}
}
