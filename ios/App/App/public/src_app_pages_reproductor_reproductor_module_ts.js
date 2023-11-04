"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reproductor_reproductor_module_ts"],{

/***/ 4576:
/*!*****************************************************************!*\
  !*** ./src/app/pages/reproductor/reproductor-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReproductorPageRoutingModule": () => (/* binding */ ReproductorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reproductor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reproductor.page */ 8609);




const routes = [
    {
        path: '',
        component: _reproductor_page__WEBPACK_IMPORTED_MODULE_0__.ReproductorPage
    }
];
let ReproductorPageRoutingModule = class ReproductorPageRoutingModule {
};
ReproductorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReproductorPageRoutingModule);



/***/ }),

/***/ 7396:
/*!*********************************************************!*\
  !*** ./src/app/pages/reproductor/reproductor.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReproductorPageModule": () => (/* binding */ ReproductorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reproductor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reproductor-routing.module */ 4576);
/* harmony import */ var _reproductor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reproductor.page */ 8609);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/pipes.module */ 5503);









let ReproductorPageModule = class ReproductorPageModule {
};
ReproductorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _reproductor_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReproductorPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule
        ],
        declarations: [_reproductor_page__WEBPACK_IMPORTED_MODULE_1__.ReproductorPage]
    })
], ReproductorPageModule);



/***/ }),

/***/ 8609:
/*!*******************************************************!*\
  !*** ./src/app/pages/reproductor/reproductor.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReproductorPage": () => (/* binding */ ReproductorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reproductor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reproductor.page.html?ngResource */ 563);
/* harmony import */ var _reproductor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reproductor.page.scss?ngResource */ 7902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ReproductorPage = class ReproductorPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.title = "Titulo";
        this.url = '';
    }
    ngOnInit() {
        const lang = this.title = this.route.snapshot.queryParamMap.get('lang');
        this.url = `https://theapsu.github.io/videos/${lang}`;
        this.title = this.route.snapshot.paramMap.get('titulo');
    }
    back() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navCtrl.navigateBack('tab/principal/videos');
        });
    }
};
ReproductorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ReproductorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reproductor',
        template: _reproductor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reproductor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReproductorPage);



/***/ }),

/***/ 7902:
/*!********************************************************************!*\
  !*** ./src/app/pages/reproductor/reproductor.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".back-btn {\n  color: #fff;\n}\n\n.title {\n  color: #fff;\n  font-size: 2.3rem;\n  text-align: center;\n}\n\n.container-video {\n  padding: 1rem;\n}\n\n.container-video #video {\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcHJvZHVjdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJyZXByb2R1Y3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idG57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIuM3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItdmlkZW97XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICAjdmlkZW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 563:
/*!********************************************************************!*\
  !*** ./src/app/pages/reproductor/reproductor.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <ion-buttons class=\"ion-margin\">\r\n    <ion-button class=\"back-btn\" (click)=\"back()\" fill=\"outline\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n      Retroceder\r\n    </ion-button>\r\n  </ion-buttons>\r\n\r\n  <!-- <h2 class=\"title\">{{ titulo }}</h2> -->\r\n  <div class=\"container-video\" *ngIf=\"url\">\r\n    <video id=\"video\" [src]=\"url | domSanitizer:title\" controls></video>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reproductor_reproductor_module_ts.js.map