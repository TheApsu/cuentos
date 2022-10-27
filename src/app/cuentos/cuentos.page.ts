import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../servicio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})
export class CuentosPage implements OnInit {

  constructor(
    private servicio: ServicioService,
  ) { }

  ngOnInit() {
    this.servicio.ConsultarCuentos().subscribe((res) => {
      console.log(res);
    });
  }



}
