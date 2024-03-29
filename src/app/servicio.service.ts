import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UiService } from './services/ui.service';
import { ApiResult } from './interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  

  constructor(
    private http: HttpClient,
    private uiSv: UiService
  ) { }

  consultarCuentos(uri?): Promise<any> {
    return new Promise(async resolve => {
      await this.uiSv.showLoading();
      this.http.get<ApiResult[]>(
        `${environment.baseUrl}/${uri}`
      ).subscribe(async res => {
        await this.uiSv.dismissLoading();
        resolve(res);
      })
    })
  }

  ConsultarVideos(): Promise<any> {
    return new Promise(async (resolve) => {
      await this.uiSv.showLoading();
      this.http.get<ApiResult[]>(`${environment.baseUrl}/db.json`)
        .subscribe(async res => {
          await this.uiSv.dismissLoading();
          resolve(res);
        })
    })
  }
}
