import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://portal-ow-a75186b77f0c.herokuapp.com'; // Reemplaza con la URL de tu API Django

  constructor(private http: HttpClient) {}

  // Traer toda la informacion
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }
  // Traer toda la informacion segun parametro
  getDataBy(endpoint: string, parameter: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}/${parameter}`);
  }

  // enviar informacion
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }
  // modifcacion total
  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }
  
  // Borrar un elemento
  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
  // Modificacion parcial
  patchData(endpoint: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${endpoint}`, data);
  }

}
