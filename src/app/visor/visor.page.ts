import { Component, OnInit } from '@angular/core';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.page.html',
  styleUrls: ['./visor.page.scss'],
})
export class VisorPage implements OnInit {

  constructor(private document: DocumentViewer) { }

  ngOnInit() {

    const options = {
       title: 'My PDF'
     }
    
    this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)
  }

  

}
