import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  titulo = "Titulo";

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
  }

  traerUrl(){
    let a = this.route.snapshot.paramMap.get('id');
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://sitiodepruebaproyecto.000webhostapp.com/cuentos/videos/'+a);
  }

}
