import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  titulo: string,
  descripcion: string,
  enlace: string,
  miniatura: string,
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  ConsultarCuentos(): Observable<ApiResult[]> {
    return this.http.get<ApiResult[]>(
      `${environment.baseUrl}/pdf`
    );
  }
}
