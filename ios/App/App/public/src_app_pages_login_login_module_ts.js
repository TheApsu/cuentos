"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);







let LoginPage = class LoginPage {
    constructor(fb, navCtrl, loginSv) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loginSv = loginSv;
    }
    ngOnInit() {
        this.formGroup = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]]
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loginSv.auth(this.formGroup.value);
            // await this.goTo('tab/principal');
        });
    }
    goTo(href) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward(href);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".login-container .container-img {\n  display: flex;\n}\n.login-container .col-w {\n  padding-top: 0.5rem;\n  color: #fff;\n}\n.login-container .col-w p, .login-container .col-w h2 {\n  font-weight: bold;\n  margin: 0;\n}\n.login-container .col-w h2 {\n  font-size: 2rem;\n}\n.login-container .col-w p {\n  font-size: 1rem;\n  width: 70%;\n  margin: auto;\n}\n.login-container .container-info {\n  padding: 0.5rem 1.5rem;\n}\n.login-container .container-info .login-btn, .login-container .container-info .secondary-btn {\n  width: 85%;\n  margin: auto;\n  text-transform: none;\n  --color: #fff;\n}\n.login-container .container-info .login-btn {\n  font-size: 1rem;\n  --box-shadow: none;\n  --border-radius: .5rem;\n  --padding-top: 1.5rem;\n  --padding-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n}\n.login-container .container-info .secondary-btn {\n  text-decoration: underline;\n}\n.login-container .white-row {\n  width: 100%;\n  height: 2rem;\n  position: relative;\n  overflow: hidden;\n}\n.login-container .white-row::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 5rem;\n  border-radius: 100%;\n  background-color: #fff;\n  transform: translateY(0.6rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQUNOO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFDSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNOO0FBR0U7RUFDRSxzQkFBQTtBQURKO0FBRUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUFOO0FBSUk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBRk47QUFLSTtFQUNFLDBCQUFBO0FBSE47QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KO0FBT0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUxOIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgLmNvbnRhaW5lci1pbWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuY29sLXd7XHJcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHAsIGgye1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWluZm97XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgLmxvZ2luLWJ0biwgLnNlY29uZGFyeS1idG57XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgIC8vIC13ZWJraXQtdGV4dC1zdHJva2U6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4tYnRue1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Vjb25kYXJ5LWJ0bntcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgfVxyXG4gIC53aGl0ZS1yb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNnJlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"default-bg login-container\">\r\n  <div class=\"container-img\">\r\n    <ion-img src=\"/assets/img/login-background.jpeg\" alt=\"\"></ion-img>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center col-w\">\r\n        <p>La niña que sueña con Jesús</p>\r\n        <h2>Ingresar</h2>\r\n      </ion-col>\r\n      <ion-col class=\"container-info\">\r\n        <form [formGroup]=\"formGroup\">\r\n          <ion-list class=\"transparent\">\r\n            <ion-item \r\n              lines=\"none\" \r\n              class=\"transparent ion-margin-bottom item-login default-font-color\"\r\n              \r\n            >\r\n              <ion-label class=\"item-login_label\" position=\"stacked\">\r\n                Correo electrónico\r\n              </ion-label>\r\n              <ion-input \r\n                formControlName=\"email\" \r\n                class=\"item-login_input input-bg\" \r\n                type=\"email\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" class=\"transparent ion-margin-bottom item-login\">\r\n              <ion-label class=\"item-login_label\" position=\"stacked\">\r\n                Contraseña\r\n              </ion-label>\r\n              <ion-input \r\n                class=\"item-login_input input-bg\" \r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-list>\r\n        </form>\r\n        <ion-button \r\n          class=\"login-btn input-bg\"\r\n          expand=\"block\" \r\n          [disabled]=\"formGroup.invalid\"\r\n          (click)=\"login()\"\r\n        >\r\n          Entrar\r\n        </ion-button>\r\n        <ion-button \r\n          class=\"secondary-btn\"\r\n          expand=\"block\" \r\n          fill=\"clear\"\r\n          (click)=\"goTo('/recovery')\"\r\n        >\r\n          ¿Olvidaste tu contraseña?\r\n        </ion-button>\r\n        <ion-button \r\n          class=\"secondary-btn\"\r\n          expand=\"block\" \r\n          (click)=\"goTo('/registro')\"\r\n          fill=\"clear\"\r\n\r\n        >\r\n          Registrate\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"white-row\">\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map