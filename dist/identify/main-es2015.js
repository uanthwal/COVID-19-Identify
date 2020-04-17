(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_new_tracker_create_new_tracker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-new-tracker/create-new-tracker.component */ "./src/app/create-new-tracker/create-new-tracker.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.auth.guard */ "./src/app/app.auth.guard.ts");









const routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'create-new-tracker', component: _create_new_tracker_create_new_tracker_component__WEBPACK_IMPORTED_MODULE_4__["CreateNewTrackerComponent"], canActivate: [_app_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.auth.guard.ts":
/*!***********************************!*\
  !*** ./src/app/app.auth.guard.ts ***!
  \***********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");




class AuthGuard {
    constructor(router, _appService) {
        this.router = router;
        this._appService = _appService;
    }
    canActivate(route, state) {
        if (this._appService.getSessionId()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/register']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'identify';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: APP_CONFIG, URL_CONFIG, getConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CONFIG", function() { return URL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigs", function() { return getConfigs; });
let protocol = location.protocol + '//' + location.host;
var APP_CONFIG = {};
var URL_CONFIG = {
    BASE_URL: getConfigs()['BASE_URL'],
    LOGIN: '/login',
    SIGNUP: '/signup',
    GET_QUESTIONS_BY_DAY: '/get-questions-by-day',
    CREATE_NEW_TRACKER: '/create-new-tracker',
    GET_HEALTH_TRACKER: '/get-health-tracker',
    SAVE_DATA_FOR_DAY: '/save-data-for-day',
    GET_USER_INFO: '/get-user-info',
    LOGOUT: '/logout'
};
function getConfigs() {
    if (protocol == 'http://localhost:4200') {
        return {
            BASE_URL: 'http://localhost:5000',
        };
    }
    else {
        return {
            BASE_URL: 'http://3.86.171.251:5000',
        };
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_new_tracker_create_new_tracker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-new-tracker/create-new-tracker.component */ "./src/app/create-new-tracker/create-new-tracker.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.auth.guard */ "./src/app/app.auth.guard.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _app_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _create_new_tracker_create_new_tracker_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewTrackerComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _create_new_tracker_create_new_tracker_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewTrackerComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
                ],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _app_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");







const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
};
class AppService {
    constructor(http) {
        this.http = http;
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    setSessionId(session_Id) {
        localStorage.setItem('s_id', JSON.stringify(session_Id));
    }
    getSessionId() {
        return JSON.parse(localStorage.getItem('s_id'));
    }
    setUserId(session_Id) {
        localStorage.setItem('u_id', JSON.stringify(session_Id));
    }
    getUserId() {
        return JSON.parse(localStorage.getItem('u_id'));
    }
    getTokenHeaders() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                SESSION_TOKEN: JSON.parse(localStorage.getItem('s_id')),
                USER_ID: JSON.parse(localStorage.getItem('u_id')),
            }),
        };
    }
    getQuestionByDay(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].GET_QUESTIONS_BY_DAY, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getQuestionByDay')));
    }
    createNewTracker(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].CREATE_NEW_TRACKER, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('createNewTracker')));
    }
    getUserHealthTracker(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].GET_HEALTH_TRACKER, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserHealthTracker')));
    }
    saveDataForDay(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].SAVE_DATA_FOR_DAY, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('saveDataForDay')));
    }
    registerUser(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].SIGNUP, JSON.stringify(payload), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('registerUser')));
    }
    login(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].LOGIN, JSON.stringify(payload), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')));
    }
    getUserInfo(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].GET_USER_INFO, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserInfo')));
    }
    logout(payload) {
        return this.http
            .post(_app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].BASE_URL + _app_config__WEBPACK_IMPORTED_MODULE_4__["URL_CONFIG"].LOGOUT, JSON.stringify(payload), this.getTokenHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logout')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/create-new-tracker/create-new-tracker.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-new-tracker/create-new-tracker.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateNewTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewTrackerComponent", function() { return CreateNewTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function CreateNewTrackerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " to update your health status. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your response has already been recorded for Day ", ctx_r13.day, ". We will send a reminder to your registered ");
} }
function CreateNewTrackerComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", q_r16.question, " ");
} }
function CreateNewTrackerComponent_div_1_div_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewTrackerComponent_div_1_div_5_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const oIndex_r24 = ctx.index; const qIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onClickRadioItem(oIndex_r24, qIndex_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", o_r23.selected ? "fa-check-circle" : "fa-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r23.name, " ");
} }
function CreateNewTrackerComponent_div_1_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateNewTrackerComponent_div_1_div_5_div_2_div_1_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", q_r16.options);
} }
function CreateNewTrackerComponent_div_1_div_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewTrackerComponent_div_1_div_5_div_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const oIndex_r31 = ctx.index; const qIndex_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.onClickCheckboxItem(oIndex_r31, qIndex_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", o_r30.selected ? "fa-check-square" : "fa-square");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", o_r30.name, " ");
} }
function CreateNewTrackerComponent_div_1_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateNewTrackerComponent_div_1_div_5_div_3_div_1_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", q_r16.options);
} }
function CreateNewTrackerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateNewTrackerComponent_div_1_div_5_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateNewTrackerComponent_div_1_div_5_div_2_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateNewTrackerComponent_div_1_div_5_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const q_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r16.q_type != "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r16.q_type == "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", q_r16.q_type == "M");
} }
function CreateNewTrackerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please answer the following questions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateNewTrackerComponent_div_1_div_5_Template, 4, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Additional Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewTrackerComponent_div_1_Template_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.additionalComments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewTrackerComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onClickSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Day ", ctx_r14.day, ": Health Tracker for: James Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.questionsList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.additionalComments);
} }
class CreateNewTrackerComponent {
    constructor(_appService, _router, _route) {
        this._appService = _appService;
        this._router = _router;
        this._route = _route;
        this.questionsList = [];
        this.day = 1;
        this._route.queryParams.subscribe((params) => {
            this.day = params['d'];
            this.newTracker = params['n'];
            if (this.day == undefined || this.newTracker == undefined) {
                this._router.navigate(['/home']);
                return;
            }
        });
    }
    ngOnInit() {
        this.responseSubmitted = false;
        this._appService
            .getQuestionByDay({ day: this.day, userId: this._appService.getUserId() })
            .subscribe((data) => {
            if (null != data && data['code'] == 200) {
                this.questionsList = data['data'];
            }
            else {
                this.responseSubmitted = true;
            }
        });
    }
    onClickCheckboxItem(oIndex, qIndex) {
        let option = this.questionsList[qIndex]['options'][oIndex];
        option.selected = !option.selected;
        this.questionsList[qIndex]['options'][oIndex] = option;
    }
    onClickRadioItem(oIndex, qIndex) {
        let options = this.questionsList[qIndex]['options'];
        options.forEach((e, index) => {
            if (index == oIndex)
                e.selected = true;
            else
                e.selected = false;
        });
        this.questionsList[qIndex]['options'] = options;
    }
    onClickSubmit() {
        let questionAndAnswersInfo = [];
        this.questionsList.forEach((question) => {
            let tempQAObj = JSON.parse(JSON.stringify(question));
            let options = question.options;
            let answers = [];
            options.forEach((option) => {
                if (option.selected) {
                    answers.push(option.name);
                }
            });
            delete tempQAObj['options'];
            if (question.q_type == 'O') {
                let answerString = this.additionalComments;
                tempQAObj['answer'] = answerString;
            }
            else {
                let answerString = answers.join(',');
                tempQAObj['answer'] = answerString;
            }
            questionAndAnswersInfo.push(tempQAObj);
        });
        let payload = {
            userId: this._appService.getUserId(),
            questionAndAnswersInfo: questionAndAnswersInfo,
        };
        if (this.newTracker == '0') {
            this._appService.saveDataForDay(payload).subscribe((data) => {
                if (null != data && data['code'] == 200) {
                    alert(data['message']);
                    this._router.navigate(['/home']);
                }
                else {
                    alert(data['message']);
                }
            });
        }
        else {
            this._appService.createNewTracker(payload).subscribe((data) => {
                if (null != data && data['code'] == 200) {
                    alert(data['message']);
                    this._router.navigate(['/home']);
                }
                else {
                    alert(data['message']);
                }
            });
        }
    }
}
CreateNewTrackerComponent.ɵfac = function CreateNewTrackerComponent_Factory(t) { return new (t || CreateNewTrackerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CreateNewTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateNewTrackerComponent, selectors: [["app-create-new-tracker"]], decls: 2, vars: 2, consts: [["class", "res-submitted-block", 4, "ngIf"], ["class", "q-container", 4, "ngIf"], [1, "res-submitted-block"], [1, "fa", "fa-check-circle"], [1, "q-container"], [1, "h-text"], [1, "h-text-2"], ["class", "question", 4, "ngFor", "ngForOf"], [1, "add-comments"], [3, "ngModel", "ngModelChange"], [1, "button-block"], [3, "click"], [1, "question"], ["class", "q-text", 4, "ngIf"], ["class", "options", 4, "ngIf"], [1, "q-text"], [1, "options"], ["class", "option", 3, "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"]], template: function CreateNewTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateNewTrackerComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateNewTrackerComponent_div_1_Template, 13, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.responseSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.responseSubmitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@media screen and (min-width: 414px) and (max-width: 1445px) {\n  .res-submitted-block[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 5%;\n    border: 1px solid gray;\n    width: 80%;\n    text-align: center;\n    font-size: 25px;\n    margin-top: 15%;\n  }\n  .res-submitted-block[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: seagreen;\n    font-size: 150px;\n  }\n}\n@media screen and (min-width: 0px) and (max-width: 414px) {\n  .res-submitted-block[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding: 5%;\n    border: 1px solid gray;\n    width: 80%;\n    text-align: center;\n    font-size: 25px;\n    margin-top: 30%;\n  }\n  .res-submitted-block[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: seagreen;\n    font-size: 100px;\n  }\n}\n@media screen and (min-width: 414px) and (max-width: 1445px) {\n  .q-container[_ngcontent-%COMP%] {\n    margin: 5% 16%;\n    padding: 2% 4%;\n    background: #0000000f;\n  }\n  .q-container[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .q-container[_ngcontent-%COMP%]   .h-text-2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 30px;\n    margin-bottom: -20px;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n  .q-container[_ngcontent-%COMP%]   .add-comments[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .q-container[_ngcontent-%COMP%]   .add-comments[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 399px;\n  }\n  .q-container[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .q-container[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 25px;\n    background: #4caf50;\n    margin: 6%;\n    border-radius: 3px;\n    color: white;\n    font-size: 13px;\n  }\n  .q-container[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n}\n@media screen and (min-width: 0px) and (max-width: 414px) {\n  .q-container[_ngcontent-%COMP%] {\n    margin: 2%;\n    padding: 3%;\n    background: #0000000f;\n  }\n  .q-container[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .q-container[_ngcontent-%COMP%]   .h-text-2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 30px;\n    margin-bottom: -20px;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n  }\n  .q-container[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n  .q-container[_ngcontent-%COMP%]   .add-comments[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .q-container[_ngcontent-%COMP%]   .add-comments[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 359px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy9pZGVudGlmeS9zcmMvYXBwL2NyZWF0ZS1uZXctdHJhY2tlci9jcmVhdGUtbmV3LXRyYWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1uZXctdHJhY2tlci9jcmVhdGUtbmV3LXRyYWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFERjtJQUVJLGNBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQ0NGO0VEQUU7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0VKO0FBQ0Y7QURBRTtFQWZGO0lBZ0JJLGNBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQ0dGO0VERkU7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ0lKO0FBQ0Y7QURBRTtFQURGO0lBRUksY0FBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtFQ0lGO0VERkU7SUFDRSxlQUFBO0VDSUo7RURGRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDSUo7RURESTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUNHTjtFRERJO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VDR047RURGTTtJQUNFLGtCQUFBO0VDSVI7RURBRTtJQUNFLGdCQUFBO0VDRUo7RURESTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDR047RURBRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ0VKO0VEREk7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNHTjtFREZNO0lBQ0UsZUFBQTtFQ0lSO0FBQ0Y7QURBRTtFQWxERjtJQW1ESSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VDR0Y7RURERTtJQUNFLGVBQUE7RUNHSjtFRERFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUNHSjtFREFJO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQ0VOO0VEQUk7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUNFTjtFRERNO0lBQ0Usa0JBQUE7RUNHUjtFRENFO0lBQ0UsZ0JBQUE7RUNDSjtFREFJO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUNFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLW5ldy10cmFja2VyL2NyZWF0ZS1uZXctdHJhY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXMtc3VibWl0dGVkLWJsb2NrIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWF4LXdpZHRoOiAxNDQ1cHgpIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgY29sb3I6IHNlYWdyZWVuO1xuICAgICAgZm9udC1zaXplOiAxNTBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgaSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgY29sb3I6IHNlYWdyZWVuO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG4gIH1cbn1cbi5xLWNvbnRhaW5lciB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0NXB4KSB7XG4gICAgbWFyZ2luOiA1JSAxNiU7XG4gICAgcGFkZGluZzogMiUgNCU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDBmO1xuXG4gICAgLmgtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oLXRleHQtMiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgfVxuICAgIC5xdWVzdGlvbiB7XG4gICAgICAucS10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5vcHRpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFkZC1jb21tZW50cyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMzk5cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5idXR0b24tYmxvY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gICAgICAgIG1hcmdpbjogNiU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIG1hcmdpbjogMiU7XG4gICAgcGFkZGluZzogMyU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDBmO1xuXG4gICAgLmgtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oLXRleHQtMiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgfVxuICAgIC5xdWVzdGlvbiB7XG4gICAgICAucS10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIC5vcHRpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFkZC1jb21tZW50cyB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgdGV4dGFyZWEge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMzU5cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDE0NDVweCkge1xuICAucmVzLXN1Ym1pdHRlZC1ibG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogNSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICB9XG4gIC5yZXMtc3VibWl0dGVkLWJsb2NrIGkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6IHNlYWdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIC5yZXMtc3VibWl0dGVkLWJsb2NrIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gIH1cbiAgLnJlcy1zdWJtaXR0ZWQtYmxvY2sgaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogc2VhZ3JlZW47XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDE0NDVweCkge1xuICAucS1jb250YWluZXIge1xuICAgIG1hcmdpbjogNSUgMTYlO1xuICAgIHBhZGRpbmc6IDIlIDQlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAwZjtcbiAgfVxuICAucS1jb250YWluZXIgLmgtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuaC10ZXh0LTIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLnEtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLm9wdGlvbnMgLm9wdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuYWRkLWNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuYWRkLWNvbW1lbnRzIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAzOTlweDtcbiAgfVxuICAucS1jb250YWluZXIgLmJ1dHRvbi1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5xLWNvbnRhaW5lciAuYnV0dG9uLWJsb2NrIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gICAgbWFyZ2luOiA2JTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAucS1jb250YWluZXIgLmJ1dHRvbi1ibG9jayBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLnEtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIlO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAwZjtcbiAgfVxuICAucS1jb250YWluZXIgLmgtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuaC10ZXh0LTIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLnEtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5xLWNvbnRhaW5lciAucXVlc3Rpb24gLm9wdGlvbnMgLm9wdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuYWRkLWNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5xLWNvbnRhaW5lciAuYWRkLWNvbW1lbnRzIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAzNTlweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateNewTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-new-tracker',
                templateUrl: './create-new-tracker.component.html',
                styleUrls: ['./create-new-tracker.component.scss'],
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HomeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickCreateNewTracker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a health tracker ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_30_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_30_span_12_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const day_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onClickDay(day_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.isDayInList(day_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r5, "");
} }
function HomeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Created Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Days: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_30_span_12_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.healthTrackerData == null ? null : ctx_r1.healthTrackerData.tracker_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.healthTrackerData == null ? null : ctx_r1.healthTrackerData.created_dt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", "1 2 3 4 5 6 7 8 9 10 11 12 13 14".split(" "));
} }
class HomeComponent {
    constructor(_router, _appService) {
        this._router = _router;
        this._appService = _appService;
        this.hasActiveHT = false;
        this.healthTrackerCount = 0;
        this.daysCompleted = [];
        this.daysMissed = [];
    }
    ngOnInit() {
        this._appService.getUserInfo({}).subscribe((data) => {
            if (data['code'] == 200) {
                this.userInfo = data['data'];
            }
            this._appService
                .getUserHealthTracker({ userId: this._appService.getUserId() })
                .subscribe((data) => {
                if (data['code'] == 200) {
                    this.hasActiveHT = true;
                    this.healthTrackerData = data['data'];
                    this.healthTrackerCount = 1;
                    this.trackerId = this.healthTrackerData['tracker_id'];
                    this.initializeTrackerDays();
                }
            });
        });
    }
    onClickCreateNewTracker() {
        this._router.navigate(['/create-new-tracker'], {
            queryParams: { d: 1, n: 1 },
        });
    }
    onClickDay(day) {
        this._router.navigate(['/create-new-tracker'], {
            queryParams: { d: day, n: 0 },
        });
    }
    initializeTrackerDays() {
        this.daysCompleted = [];
        this.daysMissed = [];
        this.daysCompleted = this.healthTrackerData.days;
        let numberOfDaysTrackerCreated = this.healthTrackerData.tracker_days;
        for (let i = 1; i < 15; i++) {
            if (i <= numberOfDaysTrackerCreated &&
                this.daysCompleted.indexOf('' + i) == -1)
                this.daysMissed.push('' + i);
        }
    }
    isDayInList(day) {
        let index = -1;
        index = this.daysCompleted.indexOf(day);
        if (index == -1) {
            if (this.daysMissed.indexOf('' + day) != -1)
                return 'red';
            return 'gray';
        }
        else
            return 'green';
    }
    onClickLogoutBtn() {
        this._appService.logout({}).subscribe((data) => {
            if (data['code'] == 200) {
                localStorage.clear();
                this._router.navigate(['/login']);
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 31, vars: 8, consts: [[1, "home-page-container"], [1, "profile-section"], [1, "p-block-1"], [1, "icon-block"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], [1, "data-block"], [1, "separator"], [1, "p-block-2"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "p-block-3"], ["aria-hidden", "true", 1, "fa", "fa-id-card"], [1, "logout-btn-section"], [3, "click"], [1, "tracker-section"], [1, "tracker-header"], ["class", "create-new-ht", 3, "click", 4, "ngIf"], ["class", "active-ht-block", 4, "ngIf"], [1, "create-new-ht", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], [1, "active-ht-block"], [1, "first-block"], [1, "lbl"], [1, "lbl-val"], ["class", "lbl-val", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "lbl-val", 3, "ngClass", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_24_listener() { return ctx.onClickLogoutBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LOGOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_29_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 13, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userInfo == null ? null : ctx.userInfo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userInfo == null ? null : ctx.userInfo.mobile_number, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userInfo == null ? null : ctx.userInfo.postal_code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Age: ", ctx.userInfo == null ? null : ctx.userInfo.date_of_birth, " Gender: ", ctx.userInfo == null ? null : ctx.userInfo.gender, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Health Assesments: You have ", ctx.healthTrackerCount, " health assesment(s) in progress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasActiveHT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasActiveHT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".home-page-container[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #8080806b;\n  width: 100%;\n}\n.home-page-container[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: green;\n}\n.home-page-container[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n.home-page-container[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: red;\n}\n@media screen and (min-width: 414px) and (max-width: 1445px) {\n  .home-page-container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%] {\n    font-size: 20px;\n    position: relative;\n    width: 20%;\n    height: 100vh;\n    background: #80808026;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-1[_ngcontent-%COMP%] {\n    background-color: #1fc8db;\n    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);\n    display: flex;\n    align-items: center;\n    height: 150px;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-1[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: center;\n    font-size: 50px;\n    padding-right: 10px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-2[_ngcontent-%COMP%] {\n    display: flex;\n    height: 60px;\n    align-items: center;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-2[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-2[_ngcontent-%COMP%]:hover {\n    background: #80808026;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-3[_ngcontent-%COMP%] {\n    display: flex;\n    height: 60px;\n    align-items: center;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-3[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-3[_ngcontent-%COMP%]:hover {\n    background: #80808026;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .logout-btn-section[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .logout-btn-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 25px;\n    background: #4caf50;\n    margin: 6%;\n    border-radius: 3px;\n    color: white;\n    font-size: 13px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .logout-btn-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .tracker-header[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid gray;\n    margin: 0.2%;\n    background: #8080803b;\n    font-size: 24px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid gray;\n    margin: 0.2%;\n    display: flex;\n    align-items: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: #4caf50;\n    color: white;\n    border: 1px solid #4caf50;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid gray;\n    margin: 0.2%;\n    font-size: 19px;\n    display: flex;\n    align-items: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   .lbl-val[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: 600;\n    padding-right: 8px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%]   .lbl-val[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n}\n@media screen and (min-width: 0px) and (max-width: 414px) {\n  .home-page-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 96%;\n    margin: 2%;\n    height: auto;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-1[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    height: 40px;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-1[_ngcontent-%COMP%]   .icon-block[_ngcontent-%COMP%] {\n    width: 20%;\n    text-align: center;\n    font-size: 30px;\n    padding-right: 0px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-2[_ngcontent-%COMP%] {\n    display: flex;\n    height: 25px;\n    align-items: center;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .p-block-3[_ngcontent-%COMP%] {\n    display: flex;\n    height: 25px;\n    align-items: center;\n    padding: 5px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .profile-section[_ngcontent-%COMP%]   .logout-btn-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%] {\n    width: 96%;\n    margin: 2%;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .tracker-header[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid gray;\n    margin: 0.2%;\n    background: #8080803b;\n    font-size: 18px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%] {\n    border: 1px solid gray;\n    margin-top: 1.5%;\n    display: flex;\n    align-items: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .create-new-ht[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 1px solid gray;\n    margin: 1% 0.2%;\n    font-size: 19px;\n    display: flex;\n    align-items: center;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .first-block[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .home-page-container[_ngcontent-%COMP%]   .tracker-section[_ngcontent-%COMP%]   .active-ht-block[_ngcontent-%COMP%]   .second-block[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy9pZGVudGlmeS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUU7RUFDRSxZQUFBO0FDQUo7QURFRTtFQUNFLFdBQUE7QUNBSjtBREVFO0VBQ0UsVUFBQTtBQ0FKO0FERUU7RUFmRjtJQWdCSSxhQUFBO0VDQ0Y7RURBRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7RUNFSjtFRERJO0lBQ0UseUJBQUE7SUFDQSwrRUFBQTtJQU1BLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDRk47RURHTTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ0RSO0VESUk7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQ0ZOO0VER007SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUNEUjtFREdNO0lBQ0UscUJBQUE7RUNEUjtFRElJO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUNGTjtFREdNO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VDRFI7RURHTTtJQUNFLHFCQUFBO0VDRFI7RURJSTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQ0ZOO0VER007SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNEUjtFREVRO0lBQ0UsZUFBQTtFQ0FWO0VES0U7SUFDRSxVQUFBO0VDSEo7RURJSTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7RUNGTjtFRElJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ0ZOO0VER007SUFDRSxlQUFBO0VDRFI7RURHTTtJQUNFLGtCQUFBO0VDRFI7RURHTTtJQUNFLGVBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtFQ0RSO0VES0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ0hKO0VESUk7SUFDRSxPQUFBO0VDRk47RURHTTtJQUNFLGVBQUE7RUNEUjtFREdNO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNEUjtFREVRO0lBQ0UsZUFBQTtFQ0FWO0VESUk7SUFDRSxrQkFBQTtFQ0ZOO0FBQ0Y7QURLRTtFQTdJRjtJQThJSSxjQUFBO0VDRkY7RURHRTtJQUNFLGVBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUNESjtFREVJO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNBTjtFRENNO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDQ1I7RURFSTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDQU47RURFSTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDQU47RURFSTtJQUNFLGFBQUE7RUNBTjtFREdFO0lBQ0UsVUFBQTtJQUNBLFVBQUE7RUNESjtFREVJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtFQ0FOO0VERUk7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VDQU47RURDTTtJQUNFLGVBQUE7RUNDUjtFRENNO0lBQ0Usa0JBQUE7RUNDUjtFRENNO0lBQ0UsZUFBQTtFQ0NSO0VERUk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ0FOO0VEQ007SUFDRSxPQUFBO0VDQ1I7RURDTTtJQUNFLGtCQUFBO0VDQ1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2UtY29udGFpbmVyIHtcbiAgLnNlcGFyYXRvciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDZiO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ncmVlbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG4gIC5ncmF5IHtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAucmVkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0NXB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucHJvZmlsZS1zZWN0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgYmFja2dyb3VuZDogIzgwODA4MDI2O1xuICAgICAgLnAtYmxvY2stMSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmM4ZGI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAxNDFkZWcsXG4gICAgICAgICAgIzlmYjhhZCAwJSxcbiAgICAgICAgICAjMWZjOGRiIDUxJSxcbiAgICAgICAgICAjMmNiNWU4IDc1JVxuICAgICAgICApO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIC5pY29uLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnAtYmxvY2stMiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAuaWNvbi1ibG9jayB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzgwODA4MDI2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucC1ibG9jay0zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIC5pY29uLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjODA4MDgwMjY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5sb2dvdXQtYnRuLXNlY3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzRjYWY1MDtcbiAgICAgICAgICBtYXJnaW46IDYlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudHJhY2tlci1zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAudHJhY2tlci1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW46IDAuMiU7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4MDgwODAzYjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmNyZWF0ZS1uZXctaHQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW46IDAuMiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Y2FmNTA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFjdGl2ZS1odC1ibG9jayB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgIG1hcmdpbjogMC4yJTtcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmZpcnN0LWJsb2NrIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLmxibCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmwtdmFsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc2Vjb25kLWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC5wcm9maWxlLXNlY3Rpb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgd2lkdGg6IDk2JTtcbiAgICAgIG1hcmdpbjogMiU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAucC1ibG9jay0xIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIC5pY29uLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucC1ibG9jay0yIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgICAucC1ibG9jay0zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgICAubG9nb3V0LWJ0bi1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRyYWNrZXItc2VjdGlvbiB7XG4gICAgICB3aWR0aDogOTYlO1xuICAgICAgbWFyZ2luOiAyJTtcbiAgICAgIC50cmFja2VyLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIG1hcmdpbjogMC4yJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzgwODA4MDNiO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAuY3JlYXRlLW5ldy1odCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNSU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWN0aXZlLWh0LWJsb2NrIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgbWFyZ2luOiAxJSAwLjIlO1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5maXJzdC1ibG9jayB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgICAuc2Vjb25kLWJsb2NrIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5ob21lLXBhZ2UtY29udGFpbmVyIC5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogIzgwODA4MDZiO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ob21lLXBhZ2UtY29udGFpbmVyIC5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5ob21lLXBhZ2UtY29udGFpbmVyIC5ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG4uaG9tZS1wYWdlLWNvbnRhaW5lciAucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0NXB4KSB7XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5wcm9maWxlLXNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6ICM4MDgwODAyNjtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5wLWJsb2NrLTEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZmM4ZGI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzlmYjhhZCAwJSwgIzFmYzhkYiA1MSUsICMyY2I1ZTggNzUlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAucC1ibG9jay0xIC5pY29uLWJsb2NrIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5wLWJsb2NrLTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5wcm9maWxlLXNlY3Rpb24gLnAtYmxvY2stMiAuaWNvbi1ibG9jayB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAucC1ibG9jay0yOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwMjY7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAucC1ibG9jay0zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5wLWJsb2NrLTMgLmljb24tYmxvY2sge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5wcm9maWxlLXNlY3Rpb24gLnAtYmxvY2stMzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDI2O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5wcm9maWxlLXNlY3Rpb24gLmxvZ291dC1idG4tc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAubG9nb3V0LWJ0bi1zZWN0aW9uIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gICAgbWFyZ2luOiA2JTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5sb2dvdXQtYnRuLXNlY3Rpb24gYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnRyYWNrZXItc2VjdGlvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAudHJhY2tlci1zZWN0aW9uIC50cmFja2VyLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbjogMC4yJTtcbiAgICBiYWNrZ3JvdW5kOiAjODA4MDgwM2I7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW46IDAuMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQgaSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQgc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGNhZjUwO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5hY3RpdmUtaHQtYmxvY2sge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW46IDAuMiU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAuYWN0aXZlLWh0LWJsb2NrIC5maXJzdC1ibG9jayB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAuYWN0aXZlLWh0LWJsb2NrIC5maXJzdC1ibG9jayAubGJsIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLmFjdGl2ZS1odC1ibG9jayAuZmlyc3QtYmxvY2sgLmxibC12YWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAuYWN0aXZlLWh0LWJsb2NrIC5maXJzdC1ibG9jayAubGJsLXZhbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5hY3RpdmUtaHQtYmxvY2sgLnNlY29uZC1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuaG9tZS1wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luOiAyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAucC1ibG9jay0xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5wLWJsb2NrLTEgLmljb24tYmxvY2sge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnByb2ZpbGUtc2VjdGlvbiAucC1ibG9jay0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAucHJvZmlsZS1zZWN0aW9uIC5wLWJsb2NrLTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC5wcm9maWxlLXNlY3Rpb24gLmxvZ291dC1idG4tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAudHJhY2tlci1zZWN0aW9uIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMiU7XG4gIH1cbiAgLmhvbWUtcGFnZS1jb250YWluZXIgLnRyYWNrZXItc2VjdGlvbiAudHJhY2tlci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW46IDAuMiU7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDNiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAudHJhY2tlci1zZWN0aW9uIC5jcmVhdGUtbmV3LWh0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbi10b3A6IDEuNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQgaSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQgc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmNyZWF0ZS1uZXctaHQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAudHJhY2tlci1zZWN0aW9uIC5hY3RpdmUtaHQtYmxvY2sge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBtYXJnaW46IDElIDAuMiU7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaG9tZS1wYWdlLWNvbnRhaW5lciAudHJhY2tlci1zZWN0aW9uIC5hY3RpdmUtaHQtYmxvY2sgLmZpcnN0LWJsb2NrIHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5ob21lLXBhZ2UtY29udGFpbmVyIC50cmFja2VyLXNlY3Rpb24gLmFjdGl2ZS1odC1ibG9jayAuc2Vjb25kLWJsb2NrIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.f.mobile.errors.required);
} }
function LoginComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_13_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_13_div_2_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.f.password.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, _router, _appService) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._appService = _appService;
    }
    ngOnInit() {
        localStorage.clear();
        this.registerForm = this.formBuilder.group({
            mobile: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    onClickLoginBtn() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        let payload = {
            password: this.registerForm.controls['password'].value,
            mobile_number: this.registerForm.controls['mobile'].value
        };
        this._appService.login(payload).subscribe((data) => {
            if (data['code'] == 200) {
                this._appService.setSessionId(data['session_id']);
                this._appService.setUserId(data['user_id']);
                this.onClickSignup();
            }
            else {
                alert(data['message']);
            }
        });
    }
    onClickSignup() {
        this._router.navigate(['/home']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 9, consts: [[1, "register-box"], ["id", "register-heading"], [2, "font-size", "1.25em"], [1, "reg-form"], [3, "formGroup"], [1, "form-group"], ["placeholder", "Mobile Number*", "type", "text", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Password*", "type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "register-btn", 3, "click"], [1, "signin-text", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to Identify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.onClickLoginBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Not registered with us? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_19_listener() { return ctx.onClickSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Signup now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.mobile.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.mobile.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".invalid-feedback[_ngcontent-%COMP%] {\n  text-align: left;\n  color: red;\n  margin: 10px 0px;\n}\n\n.signin-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h7[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n\n#register-heading[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: thin;\n  background-color: white;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  border: 1px solid #00000057;\n}\n\n.register-btn[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 15px 50px;\n  border-radius: 25px;\n  color: white;\n  background-color: #0366fc;\n}\n\n\n\n\n\n.col-1[_ngcontent-%COMP%] {\n  width: 8.33%;\n}\n\n.col-2[_ngcontent-%COMP%] {\n  width: 16.66%;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  width: 41.66%;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.col-7[_ngcontent-%COMP%] {\n  width: 58.33%;\n}\n\n.col-8[_ngcontent-%COMP%] {\n  width: 66.66%;\n}\n\n.col-9[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.col-10[_ngcontent-%COMP%] {\n  width: 83.33%;\n}\n\n.col-11[_ngcontent-%COMP%] {\n  width: 91.66%;\n}\n\n.col-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n[class*=col-][_ngcontent-%COMP%] {\n  float: left;\n}\n\n\n\n.row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n\n\n\n@media screen and (max-width: 760px) {\n  [class*=col-][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 414px) and (max-width: 1445px) {\n  .register-box[_ngcontent-%COMP%] {\n    border: 1px solid;\n    width: 30%;\n    margin: 0 auto;\n    box-shadow: 0px 0px 9px #888888;\n    margin-top: 10%;\n    text-align: center;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    width: 70%;\n    height: 25px;\n    padding: 10px;\n    font-size: 1em;\n  }\n}\n\n@media screen and (min-width: 0px) and (max-width: 414px) {\n  .invalid-feedback[_ngcontent-%COMP%] {\n    margin: 5px 10px;\n    padding-left: 10px;\n  }\n\n  .register-box[_ngcontent-%COMP%] {\n    border: 1px solid;\n    width: 80%;\n    margin: 0 auto;\n    text-align: center;\n    margin-top: 40%;\n  }\n\n  .form-control[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 25px;\n    padding: 10px;\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy9pZGVudGlmeS9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTs7Ozs7OztFQU9FLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0dGOztBRERBOztFQUVFLDJCQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0tGOztBREhBLGlDQUFBOztBQUNBLHdCQUFBOztBQUNBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtBQ09GOztBRExBO0VBQ0UsVUFBQTtBQ1FGOztBRE5BO0VBQ0UsYUFBQTtBQ1NGOztBRFBBO0VBQ0UsYUFBQTtBQ1VGOztBRFJBO0VBQ0UsVUFBQTtBQ1dGOztBRFRBO0VBQ0UsYUFBQTtBQ1lGOztBRFZBO0VBQ0UsYUFBQTtBQ2FGOztBRFhBO0VBQ0UsVUFBQTtBQ2NGOztBRFpBO0VBQ0UsYUFBQTtBQ2VGOztBRGJBO0VBQ0UsYUFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7QUNpQkY7O0FEZEEsNERBQUE7O0FBQ0E7RUFDRSxXQUFBO0FDaUJGOztBRGZBLGdJQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGhCQTsrQ0FBQTs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtFQ21CRjtBQUNGOztBRGhCQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDa0JGOztFRGhCQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUNtQkY7QUFDRjs7QURqQkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNtQkY7O0VEakJBO0lBQ0UsaUJBQUE7SUFDQSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ29CRjs7RURsQkE7SUFDRSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VDcUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnNpZ25pbi10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaDcge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4jcmVnaXN0ZXItaGVhZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IHRoaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNTc7XG59XG4ucmVnaXN0ZXItYnRuIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2NmZjO1xufVxuLyoqKioqKipSZXNwb25zaXZlIGxheW91dCAqKioqKioqL1xuLyoxMi1jb2x1bW4gZ3JpZCBsYXlvdXQqL1xuLmNvbC0xIHtcbiAgd2lkdGg6IDguMzMlO1xufVxuLmNvbC0yIHtcbiAgd2lkdGg6IDE2LjY2JTtcbn1cbi5jb2wtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG4uY29sLTQge1xuICB3aWR0aDogMzMuMzMlO1xufVxuLmNvbC01IHtcbiAgd2lkdGg6IDQxLjY2JTtcbn1cbi5jb2wtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29sLTcge1xuICB3aWR0aDogNTguMzMlO1xufVxuLmNvbC04IHtcbiAgd2lkdGg6IDY2LjY2JTtcbn1cbi5jb2wtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG4uY29sLTEwIHtcbiAgd2lkdGg6IDgzLjMzJTtcbn1cbi5jb2wtMTEge1xuICB3aWR0aDogOTEuNjYlO1xufVxuLmNvbC0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKkRlZmF1bHQgY29sdW1uIGxheW91dCBvZiBlbGVtZW50cyBpcyB0byBmbG9hdCBvbiB0aGUgbGVmdCovXG5bY2xhc3MqPVwiY29sLVwiXSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLypDbGFzcyByb3c6IGNsZWFyIGVsZW1lbnRzIG9uIGJvdGggc2lkZXMgb2YgdGhlIGN1cnJlbnQgZWxlbWVudCBhbmQgZGlzcGxheSB0aGF0IGVsZW1lbnQgYXMgYSBibG9jayAodGFrZXMgdXAgdGhlIHdob2xlIHdpZHRoKSovXG4ucm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi8qQnJlYWsgcG9pbnQgNzY4cHg6IHdoZW4gdGhlIHdpZHRoIG9mIGJyb3dzZXIgY29tZXMgZG93biB0byA3NjhweCwgYWxsIGVsZW1lbnRzIGFyZSBzdXBwb3NlZCB0byByZXNwb25kIHRvIGNoYW5nZXMgYW5kIGFkYXB0XG4gIHJlc3BvbnNpdmUgZGVzaWducyAoYnJlYWsgdG8gbmV3IGxpbmUsIGV0Yy4pKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDE0NDVweCkge1xuICAucmVnaXN0ZXItYm94IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOXB4ICM4ODg4ODg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZm9ybS1jb250cm9sIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnJlZ2lzdGVyLWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbiIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnNpZ25pbi10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaDcge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbiNyZWdpc3Rlci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IHRoaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNTc7XG59XG5cbi5yZWdpc3Rlci1idG4ge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZmM7XG59XG5cbi8qKioqKioqUmVzcG9uc2l2ZSBsYXlvdXQgKioqKioqKi9cbi8qMTItY29sdW1uIGdyaWQgbGF5b3V0Ki9cbi5jb2wtMSB7XG4gIHdpZHRoOiA4LjMzJTtcbn1cblxuLmNvbC0yIHtcbiAgd2lkdGg6IDE2LjY2JTtcbn1cblxuLmNvbC0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmNvbC00IHtcbiAgd2lkdGg6IDMzLjMzJTtcbn1cblxuLmNvbC01IHtcbiAgd2lkdGg6IDQxLjY2JTtcbn1cblxuLmNvbC02IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbC03IHtcbiAgd2lkdGg6IDU4LjMzJTtcbn1cblxuLmNvbC04IHtcbiAgd2lkdGg6IDY2LjY2JTtcbn1cblxuLmNvbC05IHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbC0xMCB7XG4gIHdpZHRoOiA4My4zMyU7XG59XG5cbi5jb2wtMTEge1xuICB3aWR0aDogOTEuNjYlO1xufVxuXG4uY29sLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qRGVmYXVsdCBjb2x1bW4gbGF5b3V0IG9mIGVsZW1lbnRzIGlzIHRvIGZsb2F0IG9uIHRoZSBsZWZ0Ki9cbltjbGFzcyo9Y29sLV0ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLypDbGFzcyByb3c6IGNsZWFyIGVsZW1lbnRzIG9uIGJvdGggc2lkZXMgb2YgdGhlIGN1cnJlbnQgZWxlbWVudCBhbmQgZGlzcGxheSB0aGF0IGVsZW1lbnQgYXMgYSBibG9jayAodGFrZXMgdXAgdGhlIHdob2xlIHdpZHRoKSovXG4ucm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypCcmVhayBwb2ludCA3NjhweDogd2hlbiB0aGUgd2lkdGggb2YgYnJvd3NlciBjb21lcyBkb3duIHRvIDc2OHB4LCBhbGwgZWxlbWVudHMgYXJlIHN1cHBvc2VkIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBhbmQgYWRhcHRcbiAgcmVzcG9uc2l2ZSBkZXNpZ25zIChicmVhayB0byBuZXcgbGluZSwgZXRjLikqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgW2NsYXNzKj1jb2wtXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogMTQ0NXB4KSB7XG4gIC5yZWdpc3Rlci1ib3gge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggIzg4ODg4ODtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLmludmFsaWQtZmVlZGJhY2sge1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLnJlZ2lzdGVyLWJveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function RegisterComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_16_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.f.username.errors.required);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.f.email.errors.required);
} }
function RegisterComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_22_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r41.f.mobile.errors.required);
} }
function RegisterComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_25_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.f.password.errors.minlength);
} }
function RegisterComponent_div_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal Code must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_28_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_28_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.f.postalcode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r43.f.postalcode.errors.minlength);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(formBuilder, _router, _appService) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._appService = _appService;
    }
    ngOnInit() {
        localStorage.clear();
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/),
                ],
            ],
            mobile: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(10),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            postalcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    onClickAgreementCheckbox(value) {
        this.agreementCheckbox = value;
    }
    onClickRegisterBtn() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (!this.agreementCheckbox)
            return;
        let payload = {
            name: this.registerForm.controls['username'].value,
            email: this.registerForm.controls['email'].value,
            password: this.registerForm.controls['password'].value,
            mobile_number: this.registerForm.controls['mobile'].value,
            postal_code: this.registerForm.controls['postalcode'].value,
        };
        this._appService.registerUser(payload).subscribe((data) => {
            if (data['code'] == 200) {
                alert(data['message']);
                this.onClickSignIn();
            }
            else {
                alert(data['message']);
            }
        });
    }
    onClickSignIn() {
        this._router.navigate(['/login']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["ng-component"]], decls: 43, vars: 22, consts: [["id", "map", 1, "col-8"], [2, "font-size", "3em"], ["id", "cover", "src", "../../assets/covid.png", "alt", "Covid-map"], ["id", "register-box", 1, "col-3"], ["id", "register-heading"], [2, "font-size", "1.25em"], [1, "reg-form"], [3, "formGroup"], [1, "form-group"], ["placeholder", "Full Name*", "type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["placeholder", "Email*", "type", "text", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["placeholder", "Mobile Number*", "type", "text", "formControlName", "mobile", "maxlength", "10", 1, "form-control", 3, "ngClass"], ["placeholder", "Password*", "type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["placeholder", "Postal Code*", "type", "text", "formControlName", "postalcode", 1, "form-control", 3, "ngClass"], ["type", "checkbox", 3, "checked", "change"], ["agreementCheckboxx", ""], ["for", "text"], ["href", ""], [1, "register-btn", 3, "click"], [1, "signin-text", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COVID-19 Map (Worldwide)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stay Home. Fight Together.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " COVID-19 Symptoms? We will help you and you help us save others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register Yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.onClickAgreementCheckbox(_r44.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " I have read and accepted the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_37_listener() { return ctx.onClickRegisterBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_41_listener() { return ctx.onClickSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && ctx.f.mobile.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.mobile.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.postalcode.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.postalcode.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.agreementCheckbox);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]], styles: [".invalid-feedback[_ngcontent-%COMP%] {\n  text-align: left;\n  color: red;\n  margin: 10px 0px;\n}\n\n.signin-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], h7[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 25px;\n  padding: 10px;\n  font-size: 1em;\n}\n\n#register-heading[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.5em;\n}\n\n#map[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#cover[_ngcontent-%COMP%] {\n  max-width: 80%;\n}\n\n#register-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: thin;\n  background-color: white;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  border: 1px solid #00000057;\n}\n\n.register-btn[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 15px 50px;\n  border-radius: 25px;\n  color: white;\n  background-color: #0366fc;\n}\n\n\n\n\n\n.col-1[_ngcontent-%COMP%] {\n  width: 8.33%;\n}\n\n.col-2[_ngcontent-%COMP%] {\n  width: 16.66%;\n}\n\n.col-3[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n\n.col-5[_ngcontent-%COMP%] {\n  width: 41.66%;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.col-7[_ngcontent-%COMP%] {\n  width: 58.33%;\n}\n\n.col-8[_ngcontent-%COMP%] {\n  width: 66.66%;\n}\n\n.col-9[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.col-10[_ngcontent-%COMP%] {\n  width: 83.33%;\n}\n\n.col-11[_ngcontent-%COMP%] {\n  width: 91.66%;\n}\n\n.col-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n[class*=col-][_ngcontent-%COMP%] {\n  float: left;\n}\n\n\n\n.row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: block;\n}\n\n\n\n@media screen and (max-width: 760px) {\n  [class*=col-][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 0px) and (max-width: 414px) {\n  .invalid-feedback[_ngcontent-%COMP%] {\n    margin: 5px 10px;\n    padding-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGVuZHJhL0Rvd25sb2Fkcy9pZGVudGlmeS9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTs7Ozs7OztFQU9FLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7QUNPRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDT0Y7O0FETEE7O0VBRUUsMkJBQUE7QUNRRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDU0Y7O0FEUEEsaUNBQUE7O0FBQ0Esd0JBQUE7O0FBQ0E7RUFDRSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxhQUFBO0FDV0Y7O0FEVEE7RUFDRSxVQUFBO0FDWUY7O0FEVkE7RUFDRSxhQUFBO0FDYUY7O0FEWEE7RUFDRSxhQUFBO0FDY0Y7O0FEWkE7RUFDRSxVQUFBO0FDZUY7O0FEYkE7RUFDRSxhQUFBO0FDZ0JGOztBRGRBO0VBQ0UsYUFBQTtBQ2lCRjs7QURmQTtFQUNFLFVBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsYUFBQTtBQ21CRjs7QURqQkE7RUFDRSxhQUFBO0FDb0JGOztBRGxCQTtFQUNFLFdBQUE7QUNxQkY7O0FEbEJBLDREQUFBOztBQUNBO0VBQ0UsV0FBQTtBQ3FCRjs7QURuQkEsZ0lBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNzQkY7O0FEcEJBOzZDQUFBOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0VDdUJGO0FBQ0Y7O0FEcEJBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VDc0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnNpZ25pbi10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaDcge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDFlbTtcbn1cbiNyZWdpc3Rlci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbiNtYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY292ZXIge1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbiNyZWdpc3Rlci1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogdGhpbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA1Nztcbn1cbi5yZWdpc3Rlci1idG4ge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMTVweCA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzY2ZmM7XG59XG4vKioqKioqKlJlc3BvbnNpdmUgbGF5b3V0ICoqKioqKiovXG4vKjEyLWNvbHVtbiBncmlkIGxheW91dCovXG4uY29sLTEge1xuICB3aWR0aDogOC4zMyU7XG59XG4uY29sLTIge1xuICB3aWR0aDogMTYuNjYlO1xufVxuLmNvbC0zIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5jb2wtNCB7XG4gIHdpZHRoOiAzMy4zMyU7XG59XG4uY29sLTUge1xuICB3aWR0aDogNDEuNjYlO1xufVxuLmNvbC02IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb2wtNyB7XG4gIHdpZHRoOiA1OC4zMyU7XG59XG4uY29sLTgge1xuICB3aWR0aDogNjYuNjYlO1xufVxuLmNvbC05IHtcbiAgd2lkdGg6IDc1JTtcbn1cbi5jb2wtMTAge1xuICB3aWR0aDogODMuMzMlO1xufVxuLmNvbC0xMSB7XG4gIHdpZHRoOiA5MS42NiU7XG59XG4uY29sLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qRGVmYXVsdCBjb2x1bW4gbGF5b3V0IG9mIGVsZW1lbnRzIGlzIHRvIGZsb2F0IG9uIHRoZSBsZWZ0Ki9cbltjbGFzcyo9XCJjb2wtXCJdIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4vKkNsYXNzIHJvdzogY2xlYXIgZWxlbWVudHMgb24gYm90aCBzaWRlcyBvZiB0aGUgY3VycmVudCBlbGVtZW50IGFuZCBkaXNwbGF5IHRoYXQgZWxlbWVudCBhcyBhIGJsb2NrICh0YWtlcyB1cCB0aGUgd2hvbGUgd2lkdGgpKi9cbi5yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLypCcmVhayBwb2ludCA3NjhweDogd2hlbiB0aGUgd2lkdGggb2YgYnJvd3NlciBjb21lcyBkb3duIHRvIDc2OHB4LCBhbGwgZWxlbWVudHMgYXJlIHN1cHBvc2VkIHRvIHJlc3BvbmQgdG8gY2hhbmdlcyBhbmQgYWRhcHRcbnJlc3BvbnNpdmUgZGVzaWducyAoYnJlYWsgdG8gbmV3IGxpbmUsIGV0Yy4pKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbiIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnNpZ25pbi10ZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaDcge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNyZWdpc3Rlci1oZWFkaW5nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuI21hcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvdmVyIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbiNyZWdpc3Rlci1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiB0aGluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDU3O1xufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2NmZjO1xufVxuXG4vKioqKioqKlJlc3BvbnNpdmUgbGF5b3V0ICoqKioqKiovXG4vKjEyLWNvbHVtbiBncmlkIGxheW91dCovXG4uY29sLTEge1xuICB3aWR0aDogOC4zMyU7XG59XG5cbi5jb2wtMiB7XG4gIHdpZHRoOiAxNi42NiU7XG59XG5cbi5jb2wtMyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wtNCB7XG4gIHdpZHRoOiAzMy4zMyU7XG59XG5cbi5jb2wtNSB7XG4gIHdpZHRoOiA0MS42NiU7XG59XG5cbi5jb2wtNiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2wtNyB7XG4gIHdpZHRoOiA1OC4zMyU7XG59XG5cbi5jb2wtOCB7XG4gIHdpZHRoOiA2Ni42NiU7XG59XG5cbi5jb2wtOSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5jb2wtMTAge1xuICB3aWR0aDogODMuMzMlO1xufVxuXG4uY29sLTExIHtcbiAgd2lkdGg6IDkxLjY2JTtcbn1cblxuLmNvbC0xMiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKkRlZmF1bHQgY29sdW1uIGxheW91dCBvZiBlbGVtZW50cyBpcyB0byBmbG9hdCBvbiB0aGUgbGVmdCovXG5bY2xhc3MqPWNvbC1dIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qQ2xhc3Mgcm93OiBjbGVhciBlbGVtZW50cyBvbiBib3RoIHNpZGVzIG9mIHRoZSBjdXJyZW50IGVsZW1lbnQgYW5kIGRpc3BsYXkgdGhhdCBlbGVtZW50IGFzIGEgYmxvY2sgKHRha2VzIHVwIHRoZSB3aG9sZSB3aWR0aCkqL1xuLnJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qQnJlYWsgcG9pbnQgNzY4cHg6IHdoZW4gdGhlIHdpZHRoIG9mIGJyb3dzZXIgY29tZXMgZG93biB0byA3NjhweCwgYWxsIGVsZW1lbnRzIGFyZSBzdXBwb3NlZCB0byByZXNwb25kIHRvIGNoYW5nZXMgYW5kIGFkYXB0XG5yZXNwb25zaXZlIGRlc2lnbnMgKGJyZWFrIHRvIG5ldyBsaW5lLCBldGMuKSovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICBbY2xhc3MqPWNvbC1dIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLmludmFsaWQtZmVlZGJhY2sge1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'register.component.html',
                styleUrls: ['./register.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/upendra/Downloads/identify/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map