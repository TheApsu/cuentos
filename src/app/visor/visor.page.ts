import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })

@Component({
  selector: 'app-visor',
  templateUrl: './visor.page.html',
  styleUrls: ['./visor.page.scss'],
})
export class VisorPage implements OnInit {

  

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  traerUrl(){
    let a = this.route.snapshot.paramMap.get('id');
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://sitiodepruebaproyecto.000webhostapp.com/cuentos/pdf/'+a);
  }

  

  

}
