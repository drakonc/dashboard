import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RolService } from './rol.service';
import { Rol } from './rol';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
	selector: 'app-rol',
	templateUrl: './rol.component.html',
	styleUrls: [ './rol.component.css' ]
})
export class RolComponent implements OnInit {
	roles: any = [];
	dataTable: any;
	rol: Rol = {
		IdRol: '',
		NombreRol: '',
		created_at: null
	};

	constructor(protected rolService: RolService, private chRef: ChangeDetectorRef, private route: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.GetRols();
	}

	GetRols() {
		this.rolService.GetRols().subscribe(
			(res) => {
				this.roles = res;
				this.chRef.detectChanges();
				const table: any = $('table');
				this.dataTable = table.DataTable({
					language: {
						decimal: '',
						emptyTable: 'No hay información',
						info: 'Mostrando _START_ a _END_ de _TOTAL_ Entradas',
						infoEmpty: 'Mostrando 0 to 0 of 0 Entradas',
						infoFiltered: '(Filtrado de _MAX_ total entradas)',
						infoPostFix: '',
						thousands: ',',
						lengthMenu: 'Mostrar _MENU_ Entradas',
						loadingRecords: 'Cargando...',
						processing: 'Procesando...',
						search: 'Buscar:',
						zeroRecords: 'Sin resultados encontrados',
						paginate: {
							first: 'Primero',
							last: 'Ultimo',
							next: 'Siguiente',
							previous: 'Anterior'
						}
					}
				});
			},
			(err) => console.log(err)
		);
	}

	SaveRol() {
		this.rolService.SaveRol(this.rol).subscribe(
			(res) => {
				console.log('Despues de Insertar');
				console.log(res);
				//this.route.navigate([ '/rol' ]);
			},
			(err) => {
				console.log(err.error);
				if (err.error == null) console.log('entro');
			}
		);
	}
}
