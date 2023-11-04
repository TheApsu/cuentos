"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_recovery-password_recovery-password_module_ts"],{

/***/ 8482:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/recovery-password/recovery-password-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPasswordPageRoutingModule": () => (/* binding */ RecoveryPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _recovery_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-password.page */ 9620);




const routes = [
    {
        path: '',
        component: _recovery_password_page__WEBPACK_IMPORTED_MODULE_0__.RecoveryPasswordPage
    }
];
let RecoveryPasswordPageRoutingModule = class RecoveryPasswordPageRoutingModule {
};
RecoveryPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecoveryPasswordPageRoutingModule);



/***/ }),

/***/ 9693:
/*!*********************************************************************!*\
  !*** ./src/app/pages/recovery-password/recovery-password.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPasswordPageModule": () => (/* binding */ RecoveryPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recovery_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-password-routing.module */ 8482);
/* harmony import */ var _recovery_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery-password.page */ 9620);







let RecoveryPasswordPageModule = class RecoveryPasswordPageModule {
};
RecoveryPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recovery_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPasswordPageRoutingModule
        ],
        declarations: [_recovery_password_page__WEBPACK_IMPORTED_MODULE_1__.RecoveryPasswordPage]
    })
], RecoveryPasswordPageModule);



/***/ }),

/***/ 9620:
/*!*******************************************************************!*\
  !*** ./src/app/pages/recovery-password/recovery-password.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPasswordPage": () => (/* binding */ RecoveryPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recovery_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-password.page.html?ngResource */ 8104);
/* harmony import */ var _recovery_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery-password.page.scss?ngResource */ 7644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RecoveryPasswordPage = class RecoveryPasswordPage {
    constructor() { }
    ngOnInit() {
    }
    send() {
    }
};
RecoveryPasswordPage.ctorParameters = () => [];
RecoveryPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-recovery-password',
        template: _recovery_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recovery_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoveryPasswordPage);



/***/ }),

/***/ 7644:
/*!********************************************************************************!*\
  !*** ./src/app/pages/recovery-password/recovery-password.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".content-recovery {\n  --overflow: hidden;\n}\n.content-recovery .white-row {\n  background-color: #fff;\n  width: 100%;\n  height: 7rem;\n  border-radius: 0 0 50% 50%;\n}\n.content-recovery .row-recovery .col-w {\n  padding: 0.5rem 1.5rem;\n}\n.content-recovery .row-recovery .col-w h2, .content-recovery .row-recovery .col-w p {\n  color: #fff;\n  font-weight: bold;\n}\n.content-recovery .row-recovery .col-w h2 {\n  font-size: 2.3rem;\n}\n.content-recovery .row-recovery .col-w .info .principal-btn {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXJ5LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUVKO0FBQ0k7RUFDRSxzQkFBQTtBQUNOO0FBQU07RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFNO0VBQ0UsaUJBQUE7QUFFUjtBQUNRO0VBQ0UsV0FBQTtBQUNWIiwiZmlsZSI6InJlY292ZXJ5LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXJlY292ZXJ5e1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAud2hpdGUtcm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbiAgfVxyXG4gIC5yb3ctcmVjb3Zlcnl7XHJcbiAgICAuY29sLXd7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgIGgyLCBwe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmZve1xyXG4gICAgICAgIC5wcmluY2lwYWwtYnRue1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 8104:
/*!********************************************************************************!*\
  !*** ./src/app/pages/recovery-password/recovery-password.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg content-recovery\">\r\n  <ion-grid fixed class=\"ion-no-padding max-hg\">\r\n    <ion-row class=\"white-row\">\r\n    </ion-row>\r\n    <ion-row class=\"row-recovery max-hg\">\r\n      <ion-col size=\"12\" class=\"ion-text-center col-w\">\r\n        <h2>\r\n          ¿Has olvidado la contraseña?\r\n        </h2>\r\n        <p>\r\n          Nueva contraseña\r\n        </p>\r\n        <div class=\"info ion-margin-top\">\r\n          <ion-item class=\"transparent item-login\" lines=\"none\">\r\n            <ion-label position=\"stacked\" class=\"item-login_label\">Correo electrónico</ion-label>\r\n            <ion-input class=\"item-login_input\" type=\"email\"></ion-input>\r\n          </ion-item>\r\n          <ion-button expand=\"block\" class=\"principal-btn\" (click)=\"send()\">\r\n            Enviar\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recovery-password_recovery-password_module_ts.js.map