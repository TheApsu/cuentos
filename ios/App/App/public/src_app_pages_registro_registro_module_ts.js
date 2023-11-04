"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 6138:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1044);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 6138);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1044);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 1044:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 4144);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 2079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);







let RegistroPage = class RegistroPage {
    constructor(navCtrl, fb, loginSv) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.loginSv = loginSv;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            dateOfBirth: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loginSv.register(this.registerForm.value);
        });
    }
    hasAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.navCtrl.navigateBack('login');
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



/***/ }),

/***/ 2079:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".row-back-btn {\n  padding: 3rem 1rem;\n}\n\n.row-container-register {\n  border-radius: 4rem 1rem 0 0;\n}\n\n.row-container-register .col-b {\n  margin-top: 1rem;\n}\n\n.row-container-register .cab-login {\n  margin: auto;\n  padding: 0.5rem 1.5rem;\n}\n\n.row-container-register .cab-login .register-title {\n  font-weight: 800;\n  font-size: 2rem;\n  color: #fff;\n  margin-bottom: 0;\n}\n\n.row-container-register .cab-login .has-account-btn {\n  font-size: 0.7rem;\n  white-space: break-spaces;\n  color: #fff;\n  margin: 0;\n}\n\n.row-container-register .col-form {\n  padding: 0.5rem 1.5rem;\n}\n\n.row-container-register .col-form .register-btn {\n  --color: #fff;\n  --box-shadow: none;\n  --border-radius: .5rem;\n  --padding-top: 1.5rem;\n  --padding-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  width: 85%;\n  margin: auto;\n  text-transform: none;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUFFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRU47O0FBQ0k7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDTjs7QUFFRTtFQUNFLHNCQUFBO0FBQUo7O0FBQ0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNOIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjay1idG57XHJcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xyXG59XHJcblxyXG4ucm93LWNvbnRhaW5lci1yZWdpc3RlcntcclxuICBib3JkZXItcmFkaXVzOiA0cmVtIDFyZW0gMCAwO1xyXG4gIC5jb2wtYntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gIC5jYWItbG9naW57XHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuXHJcbiAgICAucmVnaXN0ZXItdGl0bGV7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oYXMtYWNjb3VudC1idG57XHJcbiAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2wtZm9ybXtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAucmVnaXN0ZXItYnRue1xyXG4gICAgICAtLWNvbG9yOiAjZmZmO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgICAgIC0tcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4144:
/*!**************************************************************!*\
  !*** ./src/app/pages/registro/registro.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-grid class=\"max-hg ion-no-padding\">\r\n    <ion-row class=\"row-back-btn\">\r\n      <ion-buttons class=\"default-font-color\">\r\n        <ion-button routerLink=\"/login\" routerDirection=\"back\">\r\n          <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-row>\r\n    <ion-row class=\"row-container-register default-bg max-hg\">\r\n      <ion-col size=\"12\" class=\"col-b\">\r\n        <div class=\"ion-margin-bottom ion-text-center cab-login\">\r\n          <h2 class=\"register-title\">Crea tu nueva cuenta</h2>\r\n          <ion-button \r\n            class=\"has-account-btn secondary-btn\" \r\n            (click)=\"hasAccount()\" \r\n            expand=\"block\" \r\n            fill=\"clear\"\r\n          >\r\n            ¿Ya tienes una cuenta? Inicia sesión aquí\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"col-form\">\r\n        <form action=\"\" [formGroup]=\"registerForm\">\r\n          <ion-list class=\"transparent\">\r\n            <ion-item \r\n              lines=\"none\" \r\n              class=\"ion-margin-bottom transparent item-login default-font-color\"\r\n            >\r\n              <ion-label \r\n                class=\"item-login_label\" \r\n                position=\"stacked\"\r\n              >\r\n                Nombre\r\n              </ion-label>\r\n              <ion-input formControlName=\"name\" type=\"name\" class=\"item-login_input input-bg\"></ion-input>\r\n            </ion-item>\r\n            <ion-item \r\n              lines=\"none\" \r\n              class=\"ion-margin-bottom transparent item-login\"\r\n            >\r\n              <ion-label \r\n                class=\"item-login_label\" \r\n                position=\"stacked\"\r\n              >\r\n                Correo electrónico\r\n              </ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" class=\"item-login_input input-bg\"></ion-input>\r\n            </ion-item>\r\n            <ion-item \r\n              lines=\"none\" \r\n              class=\"ion-margin-bottom transparent item-login\"\r\n            >\r\n              <ion-label \r\n                class=\"item-login_label\" \r\n                position=\"stacked\"\r\n              >\r\n                Contraseña\r\n              </ion-label>\r\n              <ion-input formControlName=\"password\" type=\"password\" class=\"item-login_input input-bg\"></ion-input>\r\n            </ion-item>\r\n            <ion-item \r\n              lines=\"none\" \r\n              class=\"ion-margin-bottom transparent item-login\"\r\n            >\r\n              <ion-label \r\n                class=\"item-login_label\" \r\n                position=\"stacked\"\r\n              >\r\n                Fecha de nacimiento\r\n              </ion-label>\r\n              <ion-input formControlName=\"dateOfBirth\" type=\"date\" class=\"item-login_input input-bg\"></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-button \r\n            expand=\"block\" \r\n            [disabled]=\"registerForm.invalid\"\r\n            (click)=\"register()\"\r\n            class=\"register-btn input-bg\"\r\n          >\r\n            Registrarme\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map