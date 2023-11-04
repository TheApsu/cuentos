import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('theCanvas', { static: true })
  theCanvas: ElementRef<HTMLCanvasElement>;
  // @ViewChild('storieAudio', { static: true }) storieAudio: ElementRef<HTMLAudioElement>;
  @Input() url = '';
  @Input() titulo = '';

  private storieAudio: HTMLAudioElement = undefined;
  private _ctx = undefined;
  private _pageNumPending = null;
  private pdfjsLib = undefined;
  private _durationData: DataDuration[] = [];
  private _durationPage: DataDuration = undefined;

  get storyAudio() {
    return this.storieAudio;
  }

  public pdfDoc = null;
  public pageRendering = false;
  public pageNum = 1;
  public totalPages = 1;
  public audioUrl = undefined;
  private fixedTitle: string = undefined;
  private _finished = false;
  public controlAudioIcon = 'pause';
  // private audio: HTMLAudioElement = undefined;

  constructor(private uiSv: UiService, private servicio: ServicioService) {}

  async ngOnInit() {
    const fixedTitle = this.removeAccents(this.titulo);
    this.fixedTitle = fixedTitle;
    await this.getData();
    this.audioUrl = `${environment.cuentosUrl}/cuentos/${fixedTitle}.mp3`;
    this.pdfjsLib = window['pdfjs-dist/build/pdf'];
    this.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    this.getPdf();
  }

  async getData() {
    const data: any = await this.servicio.consultarCuentos('db.json');
    const duration = data.audiosDuration;
    const audio: DataDuration[] = duration.find(
      (item) => this.removeAccents(item.pdfName) === this.fixedTitle
    )?.data;
    const audioPage = audio.find((x) => x.page === this.pageNum);
    if (audioPage) {
      this.renderPage(this.pageNum);
      //PARA PROBAR EL FINAL SOLAMENTE
      // audioPage.init = audioPage.end - 5;
    }
    this._durationData = audio;
  }

  removeAccents(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()
      .replace(/ /g, '_');
  }

  async setAudio(pageNum) {
    const audioEl = this.storieAudio;
    if (!audioEl.paused) {
      audioEl.pause();
    }
    this._durationPage = this._durationData.find((x) => x.page === pageNum);
    if (this._durationPage) {
      audioEl.currentTime = this._durationPage.init;
      this.controlAudioIcon = 'pause';
      this._finished = false;
      await audioEl.play();
    }
  }

  async checkTime(ev?) {
    const audioEl = ev?.target || this.storieAudio;
    if (this._durationPage && audioEl.currentTime > this._durationPage.end) {
      this.controlAudioIcon = 'play';
      this._finished = true;
      audioEl.pause();
    }
  }

  async getPdf() {
    await this.uiSv.showLoading();
    this._ctx = this.theCanvas.nativeElement.getContext('2d');
    this.pdfjsLib.getDocument(this.url).promise.then(async (pdfDoc_: any) => {
      this.pdfDoc = pdfDoc_;
      this.totalPages = this.pdfDoc.numPages;
      await this.uiSv.dismissLoading();
      this.renderPage(this.pageNum);
    });
  }

  async renderPage(num) {
    try {
      this.pageRendering = true;
      // Using promise to fetch the page
      const canvas = this.theCanvas.nativeElement;
      await this.uiSv.showLoading('');
      this.pdfDoc?.getPage(num).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: this._ctx,
          viewport: viewport,
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

            if (!this.storieAudio) {
              await this.uiSv.showLoading('');
              this.storieAudio = new Audio(this.audioUrl);
              // this.storieAudio.playbackRate = 2.0;
              this.storieAudio.addEventListener('canplaythrough', async () => {
                this.storieAudio.addEventListener('timeupdate', async () => {
                  // console.log('object :>> ', object);
                  await this.checkTime();
                });
                await this.uiSv.dismissLoading();
              });
              this.setAudio(this.pageNum);
            } else {
              this.setAudio(this.pageNum);
            }
          });
        }, 100);
      });
    } catch (err) {
      console.error(err);
      await this.uiSv.dismissLoading();
    }

    // Update page counters
    // document.getElementById('page_num').textContent = num;
  }

  nextPage(forward) {
    if (forward && this.pageNum < this.totalPages) {
      this.pageNum++;
    } else if (!forward && this.pageNum > 1) {
      this.pageNum--;
    }
    this.renderPage(this.pageNum);
  }

  playOrPause() {
    // this.controlAudioIcon = this.storieAudio.paused ? 'play' : 'pause';
    if (this.storieAudio.paused) {
      this.controlAudioIcon = 'pause';
      if (this._finished) {
        this.setAudio(this.pageNum);
      }
      this.storieAudio.play();
    } else {
      this.controlAudioIcon = 'play';
      this.storieAudio.pause();
    }
  }
}
