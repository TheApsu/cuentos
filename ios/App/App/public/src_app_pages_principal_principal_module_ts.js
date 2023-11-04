"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_principal_principal_module_ts"],{

/***/ 5147:
/*!*************************************************************!*\
  !*** ./src/app/pages/principal/principal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageRoutingModule": () => (/* binding */ PrincipalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.page */ 209);




const routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_0__.PrincipalPage,
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ 3960:
/*!*****************************************************!*\
  !*** ./src/app/pages/principal/principal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageModule": () => (/* binding */ PrincipalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-routing.module */ 5147);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page */ 209);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_1__.PrincipalPage]
    })
], PrincipalPageModule);



/***/ }),

/***/ 209:
/*!***************************************************!*\
  !*** ./src/app/pages/principal/principal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPage": () => (/* binding */ PrincipalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.page.html?ngResource */ 7739);
/* harmony import */ var _principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page.scss?ngResource */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);






let PrincipalPage = class PrincipalPage {
    constructor(alertController, loginSv) {
        this.alertController = alertController;
        this.loginSv = loginSv;
        this.video = '/assets/principal/video.jpeg';
        this.stories = '/assets/img/login-background.jpeg';
        this.games = '/assets/principal/games.jpeg';
    }
    ngOnInit() {
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'This is an alert!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    openGames() {
        window.open('https://arbolabc.com/');
    }
};
PrincipalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
PrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-principal',
        template: _principal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_principal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrincipalPage);



/***/ }),

/***/ 9306:
/*!****************************************************************!*\
  !*** ./src/app/pages/principal/principal.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".card-type-section {\n  background: transparent;\n  box-shadow: none;\n}\n.card-type-section .card-type-section_header .type {\n  width: max-content;\n  border-radius: 2rem;\n  padding: 0.2rem 1rem;\n  margin: auto;\n  background-color: var(--yellow-color);\n  color: #fff;\n}\n.card-type-section .card-type-section_img {\n  aspect-ratio: 4/6;\n  object-fit: cover;\n  border-radius: 9px;\n  overflow: hidden;\n}\n.card-game {\n  background-color: var(--yellow-color);\n  border-radius: 1rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n}\n.card-game .card-game_col-img {\n  padding: 0.5rem;\n}\n.card-game .card-game_text {\n  padding: 0.5rem 0;\n  color: #fff;\n}\n.card-game .card-game_text .text {\n  font-size: 0.7rem;\n}\n.badge {\n  white-space: normal;\n  background-color: var(--yellow-color);\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBREY7QUFHSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7QUFETjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQU1BO0VBQ0UscUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBSEY7QUFJRTtFQUNFLGVBQUE7QUFGSjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBRko7QUFHSTtFQUNFLGlCQUFBO0FBRE47QUFNQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoicHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNhcmQtdHlwZS1zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLmNhcmQtdHlwZS1zZWN0aW9uX2hlYWRlcntcclxuICAgIC50eXBle1xyXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC10eXBlLXNlY3Rpb25faW1ne1xyXG4gICAgYXNwZWN0LXJhdGlvOiA0LzY7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1nYW1le1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gIC5jYXJkLWdhbWVfY29sLWltZ3tcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gIH1cclxuICAuY2FyZC1nYW1lX3RleHR7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAudGV4dHtcclxuICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYWRnZXtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn0iXX0= */";

/***/ }),

/***/ 7739:
/*!****************************************************************!*\
  !*** ./src/app/pages/principal/principal.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <ion-grid class=\"ion-no-padding\">\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-card class=\"card-type-section\" routerLink=\"videos\">\r\n          <ion-card-header class=\"card-type-section_header\">\r\n            <ion-card-title class=\"type\">Videos</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-img class=\"card-type-section_img\" [src]=\"video\"></ion-img>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-card class=\"card-type-section\" routerLink=\"cuentos\">\r\n          <ion-card-header class=\"card-type-section_header\">\r\n            <ion-card-title class=\"type\">Cuentos</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-img class=\"card-type-section_img\" [src]=\"stories\"></ion-img>\r\n        </ion-card>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"12\" class=\"ion-padding\" (click)=\"openGames()\">\r\n        <ion-grid>\r\n          <ion-row class=\"card-game\">\r\n            <ion-col size=\"4\" class=\"card-game_col-img card-type-section\">\r\n              <ion-img class=\"card-type-section_img\" [src]=\"games\"></ion-img>\r\n            </ion-col>\r\n            <ion-col size=\"8\" class=\"card-game_text\">\r\n              <ion-label>Juegos</ion-label>\r\n              <p class=\"text\"> Disfruta de divertidos juegos solo dale clic </p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col> -->\r\n      <ion-col \r\n        *ngIf=\"!loginSv.isVerified\" \r\n        size=\"12\" \r\n        class=\"ion-padding ion-text-center\"\r\n      >\r\n        <ion-badge class=\"badge\" color=\"primary\" mode=\"ios\">\r\n          Disfruta de 2 dias gratuitos. Membresia USD 1.99\r\n        </ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_principal_principal_module_ts.js.map