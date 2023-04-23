import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DataDuration } from 'src/app/interfaces/interface';
import { UiService } from 'src/app/services/ui.service';
import { ServicioService } from 'src/app/servicio.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss'],
})
export class PdfComponent implements OnInit {
  @ViewChild('theCanvas', { static: true }) theCanvas: ElementRef<HTMLCanvasElement>;
  // @ViewChild('storieAudio', { static: true }) storieAudio: ElementRef<HTMLAudioElement>;
  @Input() url = '';
  @Input() titulo = '';

  private storieAudio: HTMLAudioElement = undefined;
  private _scale = 0.8;
  private _ctx = undefined;
  private _pageNumPending = null;
  private pdfjsLib = undefined;
  private _durationData: DataDuration[] = [];
  private _durationPage: DataDuration = undefined;

  public pdfDoc = null;
  public pageRendering = false;
  public pageNum = 1;
  public totalPages = 1;
  public audioUrl = undefined;
  private fixedTitle: string = undefined;
  // private audio: HTMLAudioElement = undefined;


  constructor(
    private uiSv: UiService,
    private servicio: ServicioService
  ) { }

  async ngOnInit() {
    const fixedTitle = this.removeAccents(this.titulo); 
    this.fixedTitle = fixedTitle;
    await this.getData();
    this.audioUrl = `${environment.cuentosUrl}/${fixedTitle}.mp3`;
    this.pdfjsLib = window['pdfjs-dist/build/pdf'];
    this.pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    this.getPdf();
  }

  async getData(){
    const data: any = await this.servicio.consultarCuentos('db');
    const duration = data.audiosDuration;
    this._durationData = duration.find(item => this.removeAccents(item.pdfName) === this.fixedTitle)?.data;
  }

  removeAccents(str: string){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().replace(/ /g, '_');
  }

  async setAudio(pageNum){
    const audioEl = this.storieAudio;
    if(!audioEl.paused){
      audioEl.pause();
    }
    this._durationPage = this._durationData.find((x) => x.page === pageNum);
    if(this._durationPage){
      audioEl.currentTime = this._durationPage.init;
      await audioEl.play();
    }
  }

  async checkTime(ev?){
    const audioEl = ev?.target || this.storieAudio;
    console.log(`Pagina: ${this.pageNum} audioEl.currentTime :>> `, audioEl.currentTime);
    if(this._durationPage && audioEl.currentTime > this._durationPage.end){
      audioEl.pause();
    }
  }

  async getPdf(){
    await this.uiSv.showLoading();
    this._ctx = this.theCanvas.nativeElement.getContext('2d');
    this.pdfjsLib.getDocument(this.url).promise.then(async ( pdfDoc_: any ) => {
      this.pdfDoc = pdfDoc_;
      this.totalPages = this.pdfDoc.numPages;
      await this.uiSv.dismissLoading();
      this.renderPage(this.pageNum);
    });
  }

  async renderPage(num) {
    try{

      this.pageRendering = true;
      // Using promise to fetch the page
      const canvas = this.theCanvas.nativeElement;
      await this.uiSv.showLoading('Cargando PDF.');
      this.pdfDoc.getPage(num).then((page) => {
        const viewport = page.getViewport({scale: 1});
        console.log(viewport);
        canvas.height = viewport.height;
        canvas.width = viewport.width;
    
        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: this._ctx,
          viewport: viewport
        };
  
        setTimeout(() => {
          const renderTask = page.render(renderContext);
      
          // Wait for rendering to finish
          renderTask.promise.then(async () => {
            this.pageRendering = false;
            if (this._pageNumPending !== null) {
              // New page rendering is pending
              this.renderPage(this._pageNumPending);
              this._pageNumPending = null;
            }
            await this.uiSv.dismissLoading();
            
            if(!this.storieAudio){
              
              await this.uiSv.showLoading('Cargando Audio.');
              this.storieAudio = new Audio(this.audioUrl);
              this.storieAudio.addEventListener('canplaythrough', async () => {
                this.storieAudio.addEventListener('timeupdate', async () => {
                  // console.log('object :>> ', object);
                  await this.checkTime();
                });
                await this.uiSv.dismissLoading();
              })

            }else{
              this.setAudio(this.pageNum);
            }
  
          });
        }, 100)
      });
    }catch(err){
      console.error(err);
      await this.uiSv.dismissLoading();

    }
  
    // Update page counters
    // document.getElementById('page_num').textContent = num;
  }

  nextPage(forward){
    if(forward && this.pageNum < this.totalPages){
      this.pageNum++;
    }else if(!forward && this.pageNum > 1){
      this.pageNum--;
    }
    this.renderPage(this.pageNum);
  }
}
