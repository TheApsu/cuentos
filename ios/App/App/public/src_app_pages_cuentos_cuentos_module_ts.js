"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cuentos_cuentos_module_ts"],{

/***/ 692:
/*!*********************************************************!*\
  !*** ./src/app/pages/cuentos/cuentos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentosPageRoutingModule": () => (/* binding */ CuentosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cuentos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuentos.page */ 6201);




const routes = [
    {
        path: '',
        component: _cuentos_page__WEBPACK_IMPORTED_MODULE_0__.CuentosPage
    }
];
let CuentosPageRoutingModule = class CuentosPageRoutingModule {
};
CuentosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuentosPageRoutingModule);



/***/ }),

/***/ 9290:
/*!*************************************************!*\
  !*** ./src/app/pages/cuentos/cuentos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentosPageModule": () => (/* binding */ CuentosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cuentos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuentos-routing.module */ 692);
/* harmony import */ var _cuentos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuentos.page */ 6201);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let CuentosPageModule = class CuentosPageModule {
};
CuentosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cuentos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentosPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_cuentos_page__WEBPACK_IMPORTED_MODULE_1__.CuentosPage]
    })
], CuentosPageModule);



/***/ }),

/***/ 6201:
/*!***********************************************!*\
  !*** ./src/app/pages/cuentos/cuentos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentosPage": () => (/* binding */ CuentosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cuentos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuentos.page.html?ngResource */ 9677);
/* harmony import */ var _cuentos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuentos.page.scss?ngResource */ 6171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicio.service */ 4657);





let CuentosPage = class CuentosPage {
    constructor(servicio) {
        this.servicio = servicio;
        this.items = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.items = yield this.servicio.consultarCuentos('pdf');
            console.log(this.items);
        });
    }
};
CuentosPage.ctorParameters = () => [
    { type: src_app_servicio_service__WEBPACK_IMPORTED_MODULE_2__.ServicioService }
];
CuentosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cuentos',
        template: _cuentos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cuentos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CuentosPage);



/***/ }),

/***/ 6171:
/*!************************************************************!*\
  !*** ./src/app/pages/cuentos/cuentos.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  border: solid 0.04rem var(--letra);\n  box-shadow: 7px 10px 8px -6px rgba(0, 0, 0, 0.75);\n}\n\nion-card-header ion-card-title {\n  color: var(--FondoStrong);\n  font-family: StarBlast;\n  font-size: 1.5rem;\n  -webkit-text-stroke: 0.08rem var(--letra);\n}\n\nion-card-header ion-card-subtitle, ion-card-content {\n  color: var(--letraLight);\n  font-size: 0.9rem;\n}\n\nion-icon {\n  font-size: 5rem;\n  color: var(--letra);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFHQSxpREFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImN1ZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBib3JkZXI6IHNvbGlkIC4wNHJlbSB2YXIoLS1sZXRyYSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDdweCAxMHB4IDhweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDdweCAxMHB4IDhweCAtNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiA3cHggMTBweCA4cHggLTZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIH1cclxuICBcclxuaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IHZhcigtLUZvbmRvU3Ryb25nKTtcclxuICAgIGZvbnQtZmFtaWx5OiBTdGFyQmxhc3Q7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IC4wOHJlbSB2YXIoLS1sZXRyYSk7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSwgaW9uLWNhcmQtY29udGVudHtcclxuICAgIGNvbG9yOiB2YXIoLS1sZXRyYUxpZ2h0KTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1sZXRyYSk7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 9677:
/*!************************************************************!*\
  !*** ./src/app/pages/cuentos/cuentos.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" *ngFor=\"let item of items;\">\r\n        <app-stories [data]=\"item\"></app-stories>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuentos_cuentos_module_ts.js.map