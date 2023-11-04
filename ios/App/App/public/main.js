(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);




const routes = [
    {
        path: 'recovery',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_recovery-password_recovery-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/recovery-password/recovery-password.module */ 9693)).then((m) => m.RecoveryPasswordPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then((m) => m.LoginPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/registro/registro.module */ 8712)).then((m) => m.RegistroPageModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'tab',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tab/tab.module */ 369)).then((m) => m.TabPageModule),
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ 4120);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ui.service */ 9846);






let AppComponent = class AppComponent {
    constructor(loginSv, uiSv) {
        this.loginSv = loginSv;
        this.uiSv = uiSv;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // await this.uiSv.showLoading();
            yield this.loginSv.verifyUser();
            // await this.uiSv.dismissLoading();
            if (localStorage.getItem('token')) {
                yield this.loginSv.verifyPaypal(false);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-paypal */ 5210);








// import { PayPalScriptService } from 'ngx-paypal';

let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            ngx_paypal__WEBPACK_IMPORTED_MODULE_7__.NgxPayPalModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9661:
/*!*********************************************************************************!*\
  !*** ./src/app/components/paypal-subscription/paypal-subscription.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalSubscriptionComponent": () => (/* binding */ PaypalSubscriptionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _paypal_subscription_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal-subscription.component.html?ngResource */ 6443);
/* harmony import */ var _paypal_subscription_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypal-subscription.component.scss?ngResource */ 4816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ui.service */ 9846);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 4120);









let PaypalSubscriptionComponent = class PaypalSubscriptionComponent {
    constructor(httpSv, modalController, uiSv, loginSv) {
        this.httpSv = httpSv;
        this.modalController = modalController;
        this.uiSv = uiSv;
        this.loginSv = loginSv;
        this.req = true;
        this.config = undefined;
        this.idPaypal = '';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.req) {
                yield this.uiSv.showLoading();
                const res = yield this.httpSv.get('paypal/is-active');
                yield this.uiSv.dismissLoading();
                if (res.status) {
                    this.uiSv.showToast(res.msg);
                    return yield this.close();
                }
            }
            const planId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.paypalPlan;
            this.idPaypal = `paypal-button-container-${planId}`;
            // this.config = this.getConfig(environment.paypalPlan);
            setTimeout(() => {
                paypal
                    .Buttons({
                    style: {
                        shape: 'rect',
                        color: 'gold',
                        layout: 'vertical',
                        label: 'subscribe',
                    },
                    createSubscription: (data, actions) => {
                        return actions.subscription.create({
                            /* Creates the subscription */
                            plan_id: planId,
                            // custom_id: this.loginSv.user.id
                        });
                    },
                    onApprove: (data, actions) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        try {
                            const accesToken = this.b64EncodeUnicode();
                            console.log('accesToken :>> ', accesToken);
                            const headers = {
                                Authorization: `basic ${accesToken}`,
                                'Content-Type': 'application/json',
                            };
                            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
                                ? 'https://api-m.paypal.com/v1/billing/subscriptions'
                                : 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions';
                            const res = yield this.httpSv.getExternal(`${url}/${data.subscriptionID}`, headers);
                            console.log('billing :>> ', res);
                            yield this.httpSv.post('paypal/store-payment', {
                                payer_id: res.subscriber.payer_id,
                            });
                            this.modalController.dismiss(true);
                        }
                        catch (err) {
                            console.error(err);
                        }
                    }),
                })
                    .render(`#${this.idPaypal}`);
            });
        });
    }
    b64EncodeUnicode() {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        const str = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.paypalKey}:${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.paypalSecretKey}`;
        return btoa(str);
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.dismiss(false);
        });
    }
};
PaypalSubscriptionComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_4__.UiService },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService }
];
PaypalSubscriptionComponent.propDecorators = {
    basicSubscription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['basic',] }],
    req: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
PaypalSubscriptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-paypal-subscription',
        template: _paypal_subscription_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_paypal_subscription_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaypalSubscriptionComponent);

class ConvertToBaseUnicode {
    b64EncodeUnicode() {
        return '';
    }
}
// <div id="paypal-button-container-P-40025404DJ6808412MRCDZVA"></div>
// <script src="https://www.paypal.com/sdk/js?client-id=AZjJ5jQsnX_SBJDopiviU-EI1w5FS7iLI61hi1YlQUljWykH5-RMS6MWr3nzNL4p4gcUWERNXhcu7fxF&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
// <script>
//   paypal.Buttons({
//       style: {
//           shape: 'rect',
//           color: 'white',
//           layout: 'horizontal',
//           label: 'subscribe'
//       },
//       createSubscription: function(data, actions) {
//         return actions.subscription.create({
//           /* Creates the subscription */
//           plan_id: 'P-40025404DJ6808412MRCDZVA'
//         });
//       },
//       onApprove: function(data, actions) {
//         alert(data.subscriptionID); // You can add optional success message for the subscriber here
//       }
//   }).render('#paypal-button-container-P-40025404DJ6808412MRCDZVA'); // Renders the PayPal button
// </script>


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/login.service */ 4120);




let AuthGuard = class AuthGuard {
    constructor(loginSv, navCtrl) {
        this.loginSv = loginSv;
        this.navCtrl = navCtrl;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const can = yield this.loginSv.verifyUser(true);
            console.log(can);
            if (can)
                return this.navCtrl.navigateRoot('tab/principal');
            return !can;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let HttpService = class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this._token = undefined;
        this._token = localStorage.getItem('token') || 'no-value';
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
    get(uri, otherHeaders = {}) {
        return new Promise((resolve, reject) => {
            const headers = Object.assign({ 'x-auth-token': this._token }, otherHeaders);
            const url = `${this._apiUrl}/${uri}`;
            this.httpClient.get(url, { headers })
                .subscribe(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
        });
    }
    getExternal(url, otherHeaders = {}) {
        return new Promise((resolve, reject) => {
            const headers = Object.assign({ 'x-auth-token': this._token }, otherHeaders);
            this.httpClient.get(url, { headers })
                .subscribe(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
        });
    }
    post(uri, body) {
        return new Promise((resolve, reject) => {
            const headers = {
                'x-auth-token': this._token
            };
            this.httpClient.post(`${this._apiUrl}/${uri}`, body, { headers })
                .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.service */ 9846);
/* harmony import */ var _components_paypal_subscription_paypal_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/paypal-subscription/paypal-subscription.component */ 9661);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/app */ 3253);







let LoginService = class LoginService {
    constructor(httpSv, navCtrl, uiSv, platform) {
        this.httpSv = httpSv;
        this.navCtrl = navCtrl;
        this.uiSv = uiSv;
        this.platform = platform;
        this._user = undefined;
        this._isVerified = false;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            user.dateOfBirth = user.date_of_birth;
            this._user = user;
        }
        // this._token = localStorage.getItem('token') || 'no-value';
    }
    get isVerified() {
        return this._isVerified;
    }
    set isVerified(value) {
        this._isVerified = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    verifyUser(guard = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.httpSv.get('user/verify');
                return true;
            }
            catch (err) {
                console.log(err);
                if (err.error === 'denied' || err.error === 'Token invalido')
                    return yield this.logout(guard);
                return false;
            }
        });
    }
    verifyPaypal(showMsg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.httpSv.get('paypal/is-active');
                this.isVerified = true;
                if (showMsg)
                    yield this.uiSv.showToast('Ya puedes disfrutar de nuestro contenido.');
                return true;
            }
            catch (err) {
                console.error(err);
                if (err.error.msg) {
                    const { role } = yield this.uiSv.showAlert(err.error.msg, 'alert-modal', false, true);
                    if (role === 'accept') {
                        const { data } = yield this.uiSv.showModal(_components_paypal_subscription_paypal_subscription_component__WEBPACK_IMPORTED_MODULE_2__.PaypalSubscriptionComponent, 'paypal-component', { req: false }, false);
                        if (data) {
                            yield this.verifyPaypal(true);
                            return true;
                        }
                        ;
                    }
                }
                else if (err.name === 'HttpErrorResponse' && !err.ok && err.statusText === 'Unknown Error') {
                    yield this.uiSv.showAlert('Ha ocurrido un error, intenta mas tarde', 'alert-modal', false, false, false);
                    return;
                }
                if (this.platform.is('capacitor')) {
                    _capacitor_app__WEBPACK_IMPORTED_MODULE_3__.App.exitApp();
                }
                else {
                    yield this.verifyPaypal(false);
                }
                return false;
            }
        });
    }
    logout(guard) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // this._token = 'no-value';
            this.httpSv.token = 'no-value';
            if (!guard)
                yield this.navCtrl.navigateRoot('login');
            console.log('returning false');
            return false;
        });
    }
    auth(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const res = yield this.httpSv.post('user/auth', body);
                this.saveUser(res);
            }
            catch (err) {
                console.error(err);
                yield this.uiSv.showToast(err.error.data);
            }
        });
    }
    register(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.uiSv.showLoading();
                const res = yield this.httpSv.post('user/register', body);
                yield this.uiSv.dismissLoading();
                this.saveUser(res);
            }
            catch (err) {
                console.error(err);
                yield this.uiSv.dismissLoading();
                yield this.uiSv.showToast(err.error.data);
            }
        });
    }
    saveUser(res, update = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = res.data;
            user.dateOfBirth = user.date_of_birth;
            this._user = user;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', res.token);
            this.httpSv.token = res.token;
            if (!update)
                yield this.navCtrl.navigateRoot('tab/principal');
            yield this.verifyPaypal(false);
        });
    }
    updateUser(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const res = yield this.httpSv.post('user/update', body);
            yield this.saveUser(res, true);
            this.uiSv.showToast('Guardado exitosamente.');
        });
    }
    deleteAccount(body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const { role } = yield this.uiSv.showAlert('¿Estás seguro que deseas continuar?, Eliminar la cuenta es una acción irreversible.');
            if (role === 'accept') {
                const res = yield this.httpSv.post('user/destroy', body);
                if (res.status)
                    yield this.logout();
                console.log(res);
            }
            // await this.saveUser(res);
            // this.uiSv.showToast('Guardado exitosamente.');
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ui_service__WEBPACK_IMPORTED_MODULE_1__.UiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 9846:
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiService": () => (/* binding */ UiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let UiService = class UiService {
    constructor(loadingController, toastController, alertController, modalController) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this._loading = undefined;
    }
    showLoading(message = 'Cargando...') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this._loading = yield this.loadingController.create({
                message,
            });
            yield this._loading.present();
            return true;
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this._loading)
                yield this._loading.dismiss();
            return true;
        });
    }
    showToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 4000,
                cssClass: 'toastSv'
            });
            yield toast.present();
        });
    }
    showAlert(message, cssClass = 'alert-modal', backdropDismiss, showCancel, showAccept = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [];
            if (showAccept) {
                buttons.push({
                    text: 'Aceptar',
                    role: 'accept'
                });
            }
            if (showCancel) {
                buttons.push({
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                });
            }
            const alert = yield this.alertController.create({
                header: 'Alerta',
                message,
                buttons,
                cssClass,
                backdropDismiss,
            });
            yield alert.present();
            return yield alert.onDidDismiss();
        });
    }
    showModal(component, cssClass, componentProps, backdropDismiss) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component,
                cssClass,
                componentProps,
                backdropDismiss
            });
            yield modal.present();
            return yield modal.onDidDismiss();
        });
    }
};
UiService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController }
];
UiService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UiService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // baseUrl: 'https://theapsu.github.io/cuentos',
    baseUrl: '/assets/db',
    cuentosUrl: 'https://theapsu.github.io/cuentos',
    // apiUrl: 'http://localhost:3000',
    apiUrl: 'https://nodejs-railway-server.onrender.com',
    paypalKey: 'AepZr9uiwtcTOVyqrx5zdokXhvt3hiRdLUhY1A81N6lWiA8kkOOI-7K-JgaKGZ8D2Wgi9Sb-vehGlcKA',
    paypalSecretKey: 'EJDfqoMh3sBxS0bkYSC2nF7uNAkVP26ZO32nU5ApBzWTOOHosfBcC6R2j9mgmBaHxU8IMDzSg949eT9Q',
    paypalPlan: 'P-6JU57210X6245764KMU2BNAA',
    accessToken: 'A21AALl2zBcjAq7b0bquHKG6kkdWqYiRtJ0HpQHGeW-wz5DXio1WNiHzk6_FOrNiuy3HSPMYROK30S2Rttn32EdWgRQeCXt4w',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-decd0f85_js-node_modules_ionic_core_dist_esm_t-a92c48",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		2208,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".app {\n  background: var(--Fondo);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1Gb25kbyk7XHJcbn0iXX0= */";

/***/ }),

/***/ 4816:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/paypal-subscription/paypal-subscription.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".close-btn {\n  color: #000;\n  --color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXBhbC1zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6InBheXBhbC1zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2UtYnRue1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIC0tY29sb3I6ICMwMDA7XHJcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app class=\"app\">\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 6443:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/paypal-subscription/paypal-subscription.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid fixed class=\"max-hg\">\r\n    <ion-row class=\"max-hg ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <ion-item lines=\"none\" class=\"transparent ion-margin-bottom\">\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button class=\"close-btn\" (click)=\"close()\">\r\n              <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-item>\r\n        <div [id]=\"idPaypal\"></div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map