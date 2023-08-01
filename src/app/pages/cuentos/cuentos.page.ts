import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})
export class CuentosPage implements OnInit {

  items = []

  constructor(
    private servicio: ServicioService,
  ) { }

  async ngOnInit() {
    this.items = (await this.servicio.consultarCuentos('db.json')).pdf;
    console.log(this.items);
  }

}
