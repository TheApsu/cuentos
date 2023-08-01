"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tab_tab_module_ts"],{

/***/ 2857:
/*!*************************************************!*\
  !*** ./src/app/pages/tab/tab-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageRoutingModule": () => (/* binding */ TabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page */ 3049);




const routes = [
    {
        path: '',
        component: _tab_page__WEBPACK_IMPORTED_MODULE_0__.TabPage,
        children: [
            {
                path: 'principal',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_principal_principal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../principal/principal.module */ 3960)).then(m => m.PrincipalPageModule)
                    },
                    {
                        path: 'videos',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_videos_videos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../videos/videos.module */ 9642)).then(m => m.VideosPageModule)
                            },
                            {
                                path: 'reproductor/:id/:titulo',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_reproductor_reproductor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../reproductor/reproductor.module */ 7396)).then(m => m.ReproductorPageModule)
                            },
                        ]
                    },
                    {
                        path: 'cuentos',
                        children: [
                            {
                                path: '',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cuentos_cuentos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../cuentos/cuentos.module */ 9290)).then(m => m.CuentosPageModule)
                            },
                            {
                                path: 'visor/:id/:titulo',
                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_visor_visor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../visor/visor.module */ 9004)).then(m => m.VisorPageModule)
                            },
                        ]
                    },
                ],
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'principal',
                pathMatch: 'full'
            }
        ]
    }
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabPageRoutingModule);



/***/ }),

/***/ 369:
/*!*****************************************!*\
  !*** ./src/app/pages/tab/tab.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageModule": () => (/* binding */ TabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-routing.module */ 2857);
/* harmony import */ var _tab_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page */ 3049);







let TabPageModule = class TabPageModule {
};
TabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabPageRoutingModule
        ],
        declarations: [_tab_page__WEBPACK_IMPORTED_MODULE_1__.TabPage]
    })
], TabPageModule);



/***/ }),

/***/ 3049:
/*!***************************************!*\
  !*** ./src/app/pages/tab/tab.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPage": () => (/* binding */ TabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.page.html?ngResource */ 3262);
/* harmony import */ var _tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.page.scss?ngResource */ 5160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_components_paypal_subscription_paypal_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/paypal-subscription/paypal-subscription.component */ 9661);
/* harmony import */ var src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ui.service */ 9846);









let TabPage = class TabPage {
    constructor(route, router, uiSv) {
        this.route = route;
        this.router = router;
        this.uiSv = uiSv;
        this.routeObs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.homeIcon = 'home';
        this.userIcon = 'person-outline';
    }
    ngOnInit() {
        const routerObs = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => this.route), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(route => route.outlet === 'primary')).subscribe(() => {
            const routeObs = this.route.data.subscribe(() => {
                const location = window.location.pathname;
                if (location === '/tab/principal') {
                    this.homeIcon = 'home';
                    this.userIcon = 'person-outline';
                }
                else if (location === '/tab/profile') {
                    this.homeIcon = 'home-outline';
                    this.userIcon = 'person';
                }
                else {
                    this.userIcon = 'person-outline';
                    this.homeIcon = 'home-outline';
                }
            });
            this.routeObs.add(routeObs);
        });
        this.routeObs.add(routerObs);
    }
    ngOnDestroy() {
        this.routeObs.unsubscribe();
    }
    openPaypal() {
        console.log('paypal');
        this.uiSv.showModal(src_app_components_paypal_subscription_paypal_subscription_component__WEBPACK_IMPORTED_MODULE_2__.PaypalSubscriptionComponent, 'paypal-component');
    }
};
TabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_ui_service__WEBPACK_IMPORTED_MODULE_3__.UiService }
];
TabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab',
        template: _tab_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabPage);



/***/ }),

/***/ 5160:
/*!****************************************************!*\
  !*** ./src/app/pages/tab/tab.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".tab-bar {\n  position: relative;\n  --background: transparent;\n  --border: 0;\n  height: 7rem;\n}\n.tab-bar::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: var(--yellow-color);\n  border-radius: 100% 100% 0 0;\n  transform: translateY(10px) scale(1.1);\n}\n.tab-bar .tab-btn {\n  display: flex;\n  justify-content: flex-start;\n  padding-top: 1rem;\n}\n.tab-bar .tab-btn:nth-child(1), .tab-bar .tab-btn:nth-child(3) {\n  border-radius: 3rem 3rem 0 0;\n}\n.tab-bar .tab-btn .icon {\n  color: #272727;\n  font-size: 2rem;\n}\n.tab-bar .tab-btn .badge-paypal {\n  font-size: 0.7rem;\n  --background: #fff;\n  padding: 0.3em;\n  border: 1px solid #000;\n}\n.tab-bar .tab-btn ion-label {\n  font-size: 0.7rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURJO0VBQ0UsNEJBQUE7QUFHTjtBQURJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFHTjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQUdOO0FBREk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFHTiIsImZpbGUiOiJ0YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1iYXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1ib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiA3cmVtO1xyXG4gICY6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlIDAgMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KSBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICAudGFiLWJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICY6bnRoLWNoaWxkKDEpLCAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3JlbSAzcmVtIDAgMDtcclxuICAgIH1cclxuICAgIC5pY29ue1xyXG4gICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXBheXBhbHtcclxuICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 3262:
/*!****************************************************!*\
  !*** ./src/app/pages/tab/tab.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <ion-tab-bar class=\"tab-bar\" slot=\"bottom\">\n    <ion-tab-button class=\"tab-btn\" tab=\"principal\">\n      <ion-icon class=\"icon\" [name]=\"homeIcon\"></ion-icon>\n      <ion-label>Inicio</ion-label>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab-btn\" tab=\"principal\" (click)=\"openPaypal()\">\n      <ion-icon class=\"icon\" name=\"logo-paypal\"></ion-icon>\n      <ion-label text-wrap>Pagos por paypal cada tres meses</ion-label>\n      <ion-badge class=\"badge-paypal\" mode=\"ios\">$1.99</ion-badge>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab-btn\" tab=\"profile\">\n      <ion-icon class=\"icon\" [name]=\"userIcon\"></ion-icon>\n      <ion-label>Perfil</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tab_tab_module_ts.js.map