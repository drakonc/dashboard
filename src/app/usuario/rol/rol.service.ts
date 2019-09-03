import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Rol } from './rol';

@Injectable({
	providedIn: 'root'
})
export class RolService {
	baseurl: string = 'http://localhost3000/api';
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	GetRols(): Observable<Rol> {
		return this.http.get<Rol>(this.baseurl + '/rol/');
	}
}
