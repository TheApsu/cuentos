"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_visor_visor_module_ts"],{

/***/ 1254:
/*!*************************************************************!*\
  !*** ./src/app/pages/visor/components/components.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsVisorModule": () => (/* binding */ ComponentsVisorModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf/pdf.component */ 5114);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);





const declarations = [
    _pdf_pdf_component__WEBPACK_IMPORTED_MODULE_0__.PdfComponent
];
let ComponentsVisorModule = class ComponentsVisorModule {
};
ComponentsVisorModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: declarations
    })
], ComponentsVisorModule);



/***/ }),

/***/ 5114:
/*!*************************************************************!*\
  !*** ./src/app/pages/visor/components/pdf/pdf.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfComponent": () => (/* binding */ PdfComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf.component.html?ngResource */ 9075);
/* harmony import */ var _pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf.component.scss?ngResource */ 7505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ui.service */ 9846);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicio.service */ 4657);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);







let PdfComponent = class PdfComponent {
    // private audio: HTMLAudioElement = undefined;
    constructor(uiSv, servicio) {
        this.uiSv = uiSv;
        this.servicio = servicio;
        this.url = '';
        this.titulo = '';
        this.storieAudio = undefined;
        this._ctx = undefined;
        this._pageNumPending = null;
        this.pdfjsLib = undefined;
        this._durationData = [];
        this._durationPage = undefined;
        this.pdfDoc = null;
        this.pageRendering = false;
        this.pageNum = 1;
        this.totalPages = 1;
        this.audioUrl = undefined;
        this.fixedTitle = undefined;
        this._finished = false;
        this.controlAudioIcon = 'pause';
    }
    get storyAudio() {
        return this.storieAudio;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const fixedTitle = this.removeAccents(this.titulo);
            this.fixedTitle = fixedTitle;
            yield this.getData();
            this.audioUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.cuentosUrl}/cuentos/${fixedTitle}.mp3`;
            this.pdfjsLib = window['pdfjs-dist/build/pdf'];
            this.pdfjsLib.GlobalWorkerOptions.workerSrc =
                'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            this.getPdf();
        });
    }
    getData() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield this.servicio.consultarCuentos('db.json');
            const duration = data.audiosDuration;
            const audio = (_a = duration.find((item) => this.removeAccents(item.pdfName) === this.fixedTitle)) === null || _a === void 0 ? void 0 : _a.data;
            const audioPage = audio.find((x) => x.page === this.pageNum);
            if (audioPage) {
                this.renderPage(this.pageNum);
                //PARA PROBAR EL FINAL SOLAMENTE
                // audioPage.init = audioPage.end - 5;
            }
            this._durationData = audio;
        });
    }
    removeAccents(str) {
        return str
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase()
            .replace(/ /g, '_');
    }
    setAudio(pageNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const audioEl = this.storieAudio;
            if (!audioEl.paused) {
                audioEl.pause();
            }
            this._durationPage = this._durationData.find((x) => x.page === pageNum);
            if (this._durationPage) {
                audioEl.currentTime = this._durationPage.init;
                this.controlAudioIcon = 'pause';
                this._finished = false;
                yield audioEl.play();
            }
        });
    }
    checkTime(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const audioEl = (ev === null || ev === void 0 ? void 0 : ev.target) || this.storieAudio;
            if (this._durationPage && audioEl.currentTime > this._durationPage.end) {
                this.controlAudioIcon = 'play';
                this._finished = true;
                audioEl.pause();
            }
        });
    }
    getPdf() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.uiSv.showLoading();
            this._ctx = this.theCanvas.nativeElement.getContext('2d');
            this.pdfjsLib.getDocument(this.url).promise.then((pdfDoc_) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.pdfDoc = pdfDoc_;
                this.totalPages = this.pdfDoc.numPages;
                yield this.uiSv.dismissLoading();
                this.renderPage(this.pageNum);
            }));
        });
    }
    renderPage(num) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.pageRendering = true;
                // Using promise to fetch the page
                const canvas = this.theCanvas.nativeElement;
                yield this.uiSv.showLoading('');
                (_a = this.pdfDoc) === null || _a === void 0 ? void 0 : _a.getPage(num).then((page) => {
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
                        renderTask.promise.then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            this.pageRendering = false;
                            if (this._pageNumPending !== null) {
                                // New page rendering is pending
                                this.renderPage(this._pageNumPending);
                                this._pageNumPending = null;
                            }
                            yield this.uiSv.dismissLoading();
                            if (!this.storieAudio) {
                                yield this.uiSv.showLoading('');
                                this.storieAudio = new Audio(this.audioUrl);
                                // this.storieAudio.playbackRate = 2.0;
                                this.storieAudio.addEventListener('canplaythrough', () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                    this.storieAudio.addEventListener('timeupdate', () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                        // console.log('object :>> ', object);
                                        yield this.checkTime();
                                    }));
                                    yield this.uiSv.dismissLoading();
                                }));
                                this.setAudio(this.pageNum);
                            }
                            else {
                                this.setAudio(this.pageNum);
                            }
                        }));
                    }, 100);
                });
            }
            catch (err) {
                console.error(err);
                yield this.uiSv.dismissLoading();
            }
        });
    }
    nextPage(forward) {
        if (forward && this.pageNum < this.totalPages) {
            this.pageNum++;
        }
        else if (!forward && this.pageNum > 1) {
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
        }
        else {
            this.controlAudioIcon = 'play';
            this.storieAudio.pause();
        }
    }
};
PdfComponent.ctorParameters = () => [
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_2__.UiService },
    { type: src_app_servicio_service__WEBPACK_IMPORTED_MODULE_3__.ServicioService }
];
PdfComponent.propDecorators = {
    theCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['theCanvas', { static: true },] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
PdfComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-pdf',
        template: _pdf_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pdf_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PdfComponent);



/***/ }),

/***/ 2702:
/*!*****************************************************!*\
  !*** ./src/app/pages/visor/visor-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisorPageRoutingModule": () => (/* binding */ VisorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _visor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visor.page */ 2507);




const routes = [
    {
        path: '',
        component: _visor_page__WEBPACK_IMPORTED_MODULE_0__.VisorPage
    }
];
let VisorPageRoutingModule = class VisorPageRoutingModule {
};
VisorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisorPageRoutingModule);



/***/ }),

/***/ 9004:
/*!*********************************************!*\
  !*** ./src/app/pages/visor/visor.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisorPageModule": () => (/* binding */ VisorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _visor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visor-routing.module */ 2702);
/* harmony import */ var _visor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visor.page */ 2507);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ 1254);










let VisorPageModule = class VisorPageModule {
};
VisorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _visor_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisorPageRoutingModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsVisorModule
        ],
        declarations: [_visor_page__WEBPACK_IMPORTED_MODULE_1__.VisorPage]
    })
], VisorPageModule);



/***/ }),

/***/ 2507:
/*!*******************************************!*\
  !*** ./src/app/pages/visor/visor.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisorPage": () => (/* binding */ VisorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _visor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visor.page.html?ngResource */ 5445);
/* harmony import */ var _visor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visor.page.scss?ngResource */ 4791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);







let VisorPage = class VisorPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.titulo = 'Titulo';
        this.id = this.route.snapshot.paramMap.get('id');
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cuentosUrl;
    }
    ngOnInit() {
        this.titulo = this.route.snapshot.paramMap.get('titulo');
    }
    back() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            (_a = this.appPdf.storyAudio) === null || _a === void 0 ? void 0 : _a.pause();
            yield this.navCtrl.navigateBack('tab/principal/cuentos');
        });
    }
};
VisorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
VisorPage.propDecorators = {
    appPdf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['appPdf',] }]
};
VisorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-visor',
        template: _visor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_visor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VisorPage);



/***/ }),

/***/ 7505:
/*!**************************************************************************!*\
  !*** ./src/app/pages/visor/components/pdf/pdf.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".pager, #play-pause {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  align-items: center;\n}\n\n.canvas {\n  padding: 0.5rem;\n}\n\n.canvas canvas {\n  max-width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBkZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoicGRmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VyLCAjcGxheS1wYXVzZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYW52YXN7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgY2FudmFze1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4791:
/*!********************************************************!*\
  !*** ./src/app/pages/visor/visor.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".back-btn {\n  color: #fff;\n}\n\n.title {\n  font-size: 2.3rem;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc29yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoidmlzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnRue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 9075:
/*!**************************************************************************!*\
  !*** ./src/app/pages/visor/components/pdf/pdf.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"pager\">\r\n  <!-- <ion-buttons>\r\n    <ion-button (click)=\"getData()\">\r\n      <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons> -->\r\n  <ion-buttons>\r\n    <ion-button (click)=\"playOrPause()\">\r\n      <ion-icon slot=\"icon-only\" [name]=\"controlAudioIcon\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <ion-buttons>\r\n    <ion-button (click)=\"nextPage(false)\">\r\n      <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-label text-wrap> {{ pageNum }} / {{ totalPages }} </ion-label>\r\n  <ion-buttons>\r\n    <ion-button (click)=\"nextPage(true)\">\r\n      <ion-icon slot=\"icon-only\" name=\"chevron-forward\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</div>\r\n<div class=\"canvas\">\r\n  <canvas #theCanvas></canvas>\r\n</div>\r\n<!-- <div id=\"play-pause\">\r\n \r\n</div> -->\r\n\r\n<!-- <audio\r\n  *ngIf=\"audioUrl\"\r\n  controls \r\n  (timeupdate)=\"checkTime($event)\"\r\n  #storieAudio \r\n  preload=\"none\" \r\n  [src]=\"audioUrl\"\r\n></audio> -->\r\n";

/***/ }),

/***/ 5445:
/*!********************************************************!*\
  !*** ./src/app/pages/visor/visor.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <ion-buttons class=\"ion-margin\">\r\n    <ion-button class=\"back-btn\" (click)=\"back()\" fill=\"outline\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n      Retroceder\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <h2 class=\"title\">{{ titulo }}</h2>\r\n  <app-pdf #appPdf [url]=\"url | cuentos:titulo\" [titulo]=\"titulo\"></app-pdf>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_visor_visor_module_ts.js.map