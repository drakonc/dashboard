import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Rol } from './rol';

@Injectable({
	providedIn: 'root'
})
export class RolService {
	API_URI = 'http://localhost3000/api';
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	GetRols() {
		return this.http.get(`${this.API_URI}/rol`);
	}
}
