"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_videos_videos_module_ts"],{

/***/ 9215:
/*!*******************************************************!*\
  !*** ./src/app/pages/videos/videos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageRoutingModule": () => (/* binding */ VideosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.page */ 58);




const routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_0__.VideosPage
    }
];
let VideosPageRoutingModule = class VideosPageRoutingModule {
};
VideosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VideosPageRoutingModule);



/***/ }),

/***/ 9642:
/*!***********************************************!*\
  !*** ./src/app/pages/videos/videos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPageModule": () => (/* binding */ VideosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _videos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos-routing.module */ 9215);
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.page */ 58);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let VideosPageModule = class VideosPageModule {
};
VideosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _videos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VideosPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_1__.VideosPage]
    })
], VideosPageModule);



/***/ }),

/***/ 58:
/*!*********************************************!*\
  !*** ./src/app/pages/videos/videos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideosPage": () => (/* binding */ VideosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _videos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videos.page.html?ngResource */ 3855);
/* harmony import */ var _videos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.page.scss?ngResource */ 1578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 4657);





let VideosPage = class VideosPage {
    constructor(servicio) {
        this.servicio = servicio;
        this.videoUri = '/assets/videos/';
        this.items = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.items = yield this.servicio.ConsultarVideos();
        });
    }
};
VideosPage.ctorParameters = () => [
    { type: src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService }
];
VideosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-videos',
        template: _videos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_videos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VideosPage);



/***/ }),

/***/ 1578:
/*!**********************************************************!*\
  !*** ./src/app/pages/videos/videos.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  border-radius: 0.5rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n\n.title {\n  font-size: 2.3rem;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUdBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InZpZGVvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuIFxyXG4udGl0bGV7XHJcbiAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 3855:
/*!**********************************************************!*\
  !*** ./src/app/pages/videos/videos.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h2 class=\"title\">Videos en ingles y español </h2>\r\n      </ion-col>\r\n      <ion-col size=\"6\" *ngFor=\"let item of items;\">\r\n        <ion-card \r\n          color=\"primary\" \r\n          routerLink=\"reproductor/{{item.enlace}}/{{item.titulo}}\" \r\n          routerDirection=\"forward\"\r\n        >\r\n          <ion-img [src]=\"videoUri + item.enlace + '.png'\" alt=\"\"></ion-img>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_videos_videos_module_ts.js.map