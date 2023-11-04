"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7364);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 2581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 9846);







let ProfilePage = class ProfilePage {
    constructor(loginSv, fb, uiSv) {
        this.loginSv = loginSv;
        this.fb = fb;
        this.uiSv = uiSv;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            // email: [{ value: '' }, [ Validators.required, Validators.pattern(/^[\w\.g]+@+[\w]+[.]+[\D]{2,10}$/) ]],
            // password: [{value: '' }, [ Validators.required, Validators.minLength(5) ]],
            dateOfBirth: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.registerForm.patchValue(this.loginSv.user);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loginSv.logout();
        });
    }
    updateUser() {
        this.loginSv.updateUser(this.registerForm.value);
    }
    deleteAccount() {
        this.loginSv.deleteAccount(this.registerForm.value);
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 2581:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".txt {\n  color: #fff;\n}\n\n.register-btn {\n  --color: #fff;\n  --box-shadow: none;\n  --border-radius: .5rem;\n  --padding-top: 1.5rem;\n  --padding-bottom: 1.5rem;\n  border-radius: 0.5rem;\n  width: 85%;\n  margin: auto;\n  text-transform: none;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50eHR7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1idG57XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAuNXJlbTtcclxuICAtLXBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";

/***/ }),

/***/ 7364:
/*!************************************************************!*\
  !*** ./src/app/pages/profile/profile.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content class=\"default-bg\">\r\n  <app-header></app-header>\r\n  <form action=\"\" [formGroup]=\"registerForm\" class=\"ion-text-center\">\r\n    <ion-list class=\"transparent\">\r\n      <ion-item \r\n        lines=\"none\" \r\n        class=\"ion-margin-bottom transparent item-login default-font-color\"\r\n      >\r\n        <ion-label \r\n          class=\"item-login_label\" \r\n          position=\"stacked\"\r\n        >\r\n          Nombre\r\n        </ion-label>\r\n        <ion-input formControlName=\"name\" type=\"name\" class=\"item-login_input input-bg\"></ion-input>\r\n      </ion-item>\r\n      <!-- <ion-item \r\n        lines=\"none\" \r\n        class=\"ion-margin-bottom transparent item-login\"\r\n      >\r\n        <ion-label \r\n          class=\"item-login_label\" \r\n          position=\"stacked\"\r\n        >\r\n          Correo electrónico\r\n        </ion-label>\r\n        <ion-input formControlName=\"email\" type=\"email\" class=\"item-login_input input-bg\"></ion-input>\r\n      </ion-item> -->\r\n      <!-- <ion-item \r\n        lines=\"none\" \r\n        class=\"ion-margin-bottom transparent item-login\"\r\n      >\r\n        <ion-label \r\n          class=\"item-login_label\" \r\n          position=\"stacked\"\r\n        >\r\n          Contraseña\r\n        </ion-label>\r\n        <ion-input formControlName=\"password\" type=\"password\" class=\"item-login_input input-bg\"></ion-input>\r\n      </ion-item> -->\r\n      <ion-item \r\n        lines=\"none\" \r\n        class=\"ion-margin-bottom transparent item-login\"\r\n      >\r\n        <ion-label \r\n          class=\"item-login_label\" \r\n          position=\"stacked\"\r\n        >\r\n          Fecha de nacimiento\r\n        </ion-label>\r\n        <ion-input formControlName=\"dateOfBirth\" type=\"date\" class=\"item-login_input input-bg\"></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button \r\n      [disabled]=\"registerForm.invalid\"\r\n      (click)=\"updateUser()\"\r\n      class=\"register-btn input-bg\"\r\n    >\r\n      Guardar\r\n    </ion-button>\r\n  </form>\r\n  <ion-list class=\"transparent\">\r\n    <ion-item button class=\"transparent\" (click)=\"deleteAccount()\">\r\n      <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\r\n      <ion-label class=\"txt\"> Eliminar cuenta </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item button class=\"transparent\" (click)=\"logout()\">\r\n      <ion-icon slot=\"start\" name=\"exit-outline\"></ion-icon>\r\n      <ion-label class=\"txt\"> Cerrar sesión </ion-label>\r\n    </ion-item>\r\n   \r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map