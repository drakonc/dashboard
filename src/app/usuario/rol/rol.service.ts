import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
	providedIn: 'root'
})
export class RolService {
	API_URI = 'http://localhost:3000';
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	GetRols() {
		return this.http.get(`${this.API_URI}/rol`);
	}

	GetRol(IdRol: string) {
		return this.http.get(`${this.API_URI}/rol/${IdRol}`);
	}

	SaveRol(rol: Rol) {
		return this.http.post(`${this.API_URI}/rol`, rol);
	}
}
