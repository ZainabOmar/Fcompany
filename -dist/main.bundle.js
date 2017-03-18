webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateSignin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(464);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(533),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutusComponent);
    return AboutusComponent;
}());
//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(534),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__company_company_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_task_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__creatcompany_creatcompany_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_14__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_16__creatcompany_creatcompany_component__["a" /* CreatcompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_15__task_task_component__["a" /* TaskComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'mainPage', component: __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__["a" /* MainPageComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__main_page_main_page_component__["a" /* MainPageComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'creatcompany', component: __WEBPACK_IMPORTED_MODULE_16__creatcompany_creatcompany_component__["a" /* CreatcompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_8__signin_signin_component__["a" /* SigninComponent */] },
                    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_13__aboutus_aboutus_component__["a" /* AboutusComponent */] },
                    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_14__company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'task', component: __WEBPACK_IMPORTED_MODULE_15__task_task_component__["a" /* TaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_17__schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] }
                ]),
                __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }, __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = (function () {
    function CompanyComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('user-id');
        console.log(user);
        this.obj = {};
        this.authService.getCompany(user).subscribe(function (data) {
            _this.obj = data;
            console.log(_this.obj);
        });
    };
    CompanyComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(535),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a, _b;
}());
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatcompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatcompanyComponent = (function () {
    function CreatcompanyComponent(flashMessage, validateService, authService, router) {
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    CreatcompanyComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('user-id'));
    };
    CreatcompanyComponent.prototype.Createcopmany = function () {
        var _this = this;
        var company = {
            CompanyName: this.CompanyName,
            address: this.address,
            phoneNumber: this.phoneNumber,
            code: this.code,
            AdminId: localStorage.getItem('user-id'),
            Adminname: localStorage.getItem('user-name'),
        };
        console.log("echoooooooooooo", company);
        // Required Fields
        // if(!this.validateService.validateRegister(company)){
        //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        // // Validate Email
        // if(!this.validateService.validateEmail(company.email)){
        //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        //Register company
        this.authService.registerCompany(company).subscribe(function (data) {
            console.log(data.success, data, "btatatatatata");
            if (data) {
                _this.flashMessage.show('You are now registered ', { cssClass: 'alert-success', timeout: 4000 });
                _this.authService.storeUserData(data.token, data._id, data.username);
                _this.router.navigate(['/company']);
            }
            else {
                console.log(data, "not working");
                _this.flashMessage.show("company name already exist!", { cssClass: 'alert-danger', timeout: 4000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    CreatcompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-creatcompany',
            template: __webpack_require__(536),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreatcompanyComponent);
    return CreatcompanyComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=creatcompany.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/mainPage']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=guard.guard.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(537),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainPageComponent);
    return MainPageComponent;
}());
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleComponent = (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(538),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(flashMessage, validateService, authService, router) {
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(user, "echooooo");
        // Required Fields
        // if(!this.validateService.validateSignin(user)){
        // 	this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
        // 	return false;
        // }
        //Register user
        this.authService.signin(user).subscribe(function (data) {
            console.log(data.token, "echoooooooooooo");
            if (data.token) {
                console.log("hellooooooooooooooo, it is working");
                _this.flashMessage.show('Welcome ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.userid, data.username);
                _this.router.navigate(['/company']);
            }
            else {
                console.log("hellooooooooooooooo, it is not working", data);
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(539),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(flashMessage, validateService, authService, router) {
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.comflag = false;
        this.emflag = false;
        this.jobroles = ["CEO", "Developer", "Accountant", "HR"];
        this.but1flag = true;
        this.but2flag = true;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.jobrole = this.jobroles[0];
    };
    SignupComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.jobrole = newValue;
        // ... do other stuff here ...
    };
    SignupComponent.prototype.compflag = function () {
        console.log("in comp flag");
        this.comflag = !this.comflag;
        this.but2flag = !this.but2flag;
        console.log(this.comflag);
    };
    SignupComponent.prototype.empflag = function () {
        this.emflag = !this.emflag;
        this.but1flag = !this.but1flag;
    };
    SignupComponent.prototype.onRegisterUser = function () {
        var _this = this;
        console.log(this.jobrole);
        var user = {
            username: this.username,
            email: this.email,
            jobrole: this.jobrole,
            password: this.password,
            code: this.code,
            UserType: "employee"
        };
        console.log("echoooooooooooo", user);
        // Required Fields
        // if(!this.validateService.validateRegister(user)){
        //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        // // Validate Email
        // if(!this.validateService.validateEmail(user.email)){
        //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data.success, data, "btatatatatata");
            if (data.token) {
                _this.flashMessage.show('You are now registered ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data._id, data.username);
                _this.router.navigate(['/company']);
            }
            else {
                console.log(data, "not working");
                _this.flashMessage.show("User already exist!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent.prototype.onRegisterAdmin = function () {
        var _this = this;
        console.log(this.jobrole);
        var user = {
            username: this.username,
            email: this.email,
            jobrole: this.jobrole,
            password: this.password,
            UserType: "Admin"
        };
        console.log("echoooooooooooo", user);
        // Required Fields
        // if(!this.validateService.validateRegister(user)){
        //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        // // Validate Email
        // if(!this.validateService.validateEmail(user.email)){
        //   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 9000});
        //   return false;
        // }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data, "btatatatatata");
            if (data.token) {
                _this.flashMessage.show('You are now registered ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData("null", data.AdminId, data.username);
                _this.router.navigate(['/creatcompany']);
            }
            else {
                console.log(data, "not working");
                _this.flashMessage.show("User already exist!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(540),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskComponent = (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(541),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, " /* Remove the navbar's default rounded borders and increase the bottom margin */ \r\n .navbar {\r\n  margin-bottom: 50px;\r\n  border-radius: 0;\r\n}\r\n\r\n/* Remove the jumbotron's default bottom margin */ \r\n.jumbotron {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* Add a gray background color and some padding to the footer */\r\nfooter {\r\n  background-color: #f2f2f2;\r\n  padding: 25px;\r\n}\r\n\r\n.panel-heading {\r\n  color: #00008B;\r\n  font-size: 17px;\r\n}\r\n\r\n.body {\r\n  background-image: url(" + __webpack_require__(561) + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Nunito', sans-serif;\n  color: #384047;\n}\nform {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\nh1 {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n\n\nselect {\n  background: rgba(255,255,255,0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n  margin-bottom: 30px;\n}\n\n\nbutton {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4eb9bf;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #4eb9bf;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n}\nlabel.light {\n  font-weight: 300;\n  display: inline;\n}\n\n@media screen and (min-width: 480px) {\n  form {\n    max-width: 480px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'Nunito', sans-serif;\r\n  color: #384047;\r\n}\r\nform {\r\n  max-width: 300px;\r\n  margin: 10px auto;\r\n  padding: 10px 20px;\r\n  background: #f4f7f8;\r\n  border-radius: 8px;\r\n}\r\nh1 {\r\n  margin: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\n\r\n\r\nselect {\r\n  background: rgba(255,255,255,0.1);\r\n  border: none;\r\n  font-size: 16px;\r\n  height: auto;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 15px;\r\n  width: 100%;\r\n  background-color: #e8eeef;\r\n  color: #8a97a0;\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 19px 39px 18px 39px;\r\n  color: #FFF;\r\n  background-color: #4eb9bf;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #4eb9bf;\r\n  border-width: 1px 1px 3px;\r\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: 30px;\r\n  border: none;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\nlabel.light {\r\n  font-weight: 300;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  form {\r\n    max-width: 480px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Nunito', sans-serif;\n  color: #384047;\n}\nform {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\nh1 {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\ninput[type=\"code\"],\n\n\nselect{\n  background: rgba(255,255,255,0.1);\n  border: none;\n  font-size: 18px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n  margin-bottom: 30px;\n}\n\n\nbutton {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4eb9bf;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #4eb9bf;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n}\nlabel.light {\n  font-weight: 300;\n  display: inline;\n}\n\n@media screen and (min-width: 480px) {\n  form {\n    max-width: 480px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<p>\nHI<br>\nHI<br>\nHI<br>\nHI<br>\nHI<br>\nHI<br>\n</p>"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\n  <div class=\"jumbotron\">\n    <div class=\"container text-center\">\n      <h1>{{obj.CompanyName}}</h1>      \n      <p><strong>Mission, Vission and Values</strong></p>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\">Fcompany <span class=\"glyphicon glyphicon-heart\"></span></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"#\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n          <li><a href=\"/company\">Users <span class=\"glyphicon glyphicon-user\"></span></a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a (click)=\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">    \n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Start A Task</div>\n          <div class=\"panel-body\"><a routerLink = \"/task\"><img src=\"../../assets/img/tasks-icon-26.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Post A Task And Show It To Your Colleagues</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Discussion Board</div>\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/Discussion.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Discuss Your Problems Comfortably</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Your Schedule</div>\n          <div class=\"panel-body\"><a routerLink = \"/schedule\"><img src=\"../../assets/img/schedule.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Schedule Your Meetings With Other Colleagues</div>\n        </div>\n      </div>\n    </div>\n  </div><br>\n\n  <div class=\"container\">    \n    <div class=\"row\">\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Chat with Collegues</div>\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/Chat.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Start Chatting Your Collegues</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Get Some Food</div>\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/food.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Hungry?! You Can Get Food Here</div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Playing Board</div>\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/game.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <div class=\"panel-footer\">Time To play Around</div>\n        </div>\n      </div>\n    </div>\n  </div><br><br>\n\n  <footer class=\"container-fluid text-center\">\n    <p>{{obj.CompanyName}} Loves You <span class=\"glyphicon glyphicon-heart\"></span></p>\n    <p>{{obj.address}}<span class=\"glyphicon glyphicon-globe\"></span></p>\n    <p>{{obj.phoneNumber}}<span class=\"glyphicon glyphicon-phone\"></span></p>\n  </footer>\n</div>"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<p>\n  creatcompany works!\n</p>\n  <form (submit)=\"Createcopmany()\"  >\n    <fieldset>\n      <label for=\"name\">Company Name</label>\n      <input type=\"text\" [(ngModel)]=\"CompanyName\"  id=\"name\" name=\"user_name\" >\n\n\n      <label for=\"name\">Company Address</label>\n      <input type=\"text\" [(ngModel)]=\"address\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Company telephone</label>\n      <input type=\"text\" [(ngModel)]=\"phoneNumber\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Plese Enter the code sent to you by your mail</label>\n      <input type=\"text\" [(ngModel)]=\"code\"  id=\"name\" name=\"user_name\" >\n      \n   \n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Create Company</button>\n\n  </form>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "    <!-- Header -->\n    <nav class=\"navbar navbar-default navbar-fixed-top topnav\" role=\"navigation\">\n      <div class=\"container topnav\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand topnav\" href=\"/\">Company</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <a routerLink=\"/aboutus\">About</a>\n            </li>\n            <li>\n              <a routerLink=\"/signin\">Sign in </a>\n            </li>\n            <li>\n              <a routerLink=\"/signup\">Sign up</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <a name=\"about\"></a>\n    <div class=\"intro-header\">\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"intro-message\">\n              <h1>Company App</h1>\n              <h3>manage your company easy and simple</h3>\n              <hr class=\"intro-divider\">\n              <ul class=\"list-inline intro-social-buttons\">\n                <li>\n                  <a href=\"\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-twitter fa-fw\"></i> <span class=\"network-name\">Twitter</span></a>\n                </li>\n                <li>\n                  <a href=\"\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-github fa-fw\"></i> <span class=\"network-name\">Github</span></a>\n                </li>\n                <li>\n                  <a href=\"\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-linkedin fa-fw\"></i> <span class=\"network-name\">Linkedin</span></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n    </div>\n    <!-- /.intro-header -->\n\n    <!-- Page Content -->\n    <a  name=\"services\"></a>\n    <div class=\"content-section-a\">\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-sm-6\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">manage your company task ease:<br></h2>\n            <p class=\"lead\">you can manage your company task as you want and make the work so ease and more effective between the team member</p>\n          </div>\n          <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n            <img class=\"img-responsive\" src=\"../assets/img/ipad.png\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </div>\n    <!-- /.content-section-a -->\n\n    <div class=\"content-section-b\">\n\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">3D Device Mockups<br>by PSDCovers</h2>\n            <p class=\"lead\">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target=\"_blank\" href=\"http://www.psdcovers.com/\">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>\n          </div>\n          <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n            <img class=\"img-responsive\" src=\"../assets/img/dog.jpg\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </div>\n    <!-- /.content-section-b -->\n\n    <div class=\"content-section-a\">\n\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-sm-6\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">Google Web Fonts and<br>Font Awesome Icons</h2>\n            <p class=\"lead\">This template features the 'Lato' font, part of the <a target=\"_blank\" href=\"http://www.google.com/fonts\">Google Web Font library</a>, as well as <a target=\"_blank\" href=\"http://fontawesome.io\">icons from Font Awesome</a>.</p>\n          </div>\n          <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n            <img class=\"img-responsive\" src=\"../assets/img/phones.png\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </div>\n    <!-- /.content-section-a -->\n\n    <a  name=\"contact\"></a>\n    <div class=\"banner\">\n\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <h2>register now:</h2>\n          </div>\n          <div class=\"col-lg-6\">\n            <ul class=\"list-inline banner-social-buttons\">\n              <li>\n                <a href=\"\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Sign in</span></a>\n              </li>\n              <li>\n                <a href=\"\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">register</span></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </div>\n    <!-- /.banner -->\n\n    <!-- Footer -->\n    <footer>\n      <div class=\"container\">\n        <p class=\"copyright text-muted small\">Copyright &copy; Your Company 2017... RBK</p>\n      </div>\n    </footer>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule works!\n</p>\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<br><br>\n<form (submit)=\"onSubmit()\">\n\t<h1>Sign In</h1>\n\t<fieldset>\n\t\t<label for=\"name\">Name:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\t\t<label for=\"password\">Password:</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n\t</fieldset>\n\t<button type=\"submit\" value=\"Submit\" >Submit</button>\n</form>"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<h1>Sign Up</h1>\n<button *ngIf=\"but1flag\" (click)=\"compflag()\">company account</button>\n<button *ngIf=\"but2flag\" (click)=\"empflag()\">employee account</button>\n<div *ngIf=\"comflag\">\n  <form (submit)=\"onRegisterAdmin()\"  >\n    <fieldset>\n     \n\n      <label for=\"name\">Admin Name</label>\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Admon Job Role</label>\n     <!-- <select [(ngModel)]=\"jobrole\"> \n        <option *ngFor=\"#n of jobroles\" [attr.value]=\"n\">{{n}}</option>\n      </select> -->\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\n      </select>\n      <!-- <input type=\"text\" [(ngModel)]=\"jobrole\"  id=\"name\" name=\"user_name\" > -->\n\n      <label for=\"mail\">Email</label>\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Next</button>\n\n  </form>\n</div>\n\n<div *ngIf=\"emflag\">\n\n  <form (submit)=\"onRegisterUser()\"  >\n    <fieldset>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Job Role</label>\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\n      </select>\n\n      <label for=\"mail\">Email:</label>\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\n\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n      \n      <label for=\"code\">Code:</label>\n      <input type=\"code\" [(ngModel)]=\"code\" id=\"code\" name=\"user_code\" >\n\n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Sign Up</button>\n\n  </form>\n</div>"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<p>\n  task works!\n</p>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.e1115afea56dcaf0c273.png";

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signup', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/company', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.signin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCompany = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/company/' + params)
            .map(function (res) { return res.json(); });
    };
    // authenticateUser(user){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    //     .map(res => res.json());
    // }
    AuthService.prototype.getUserSameCompany = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, id, name) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user-id', id);
        localStorage.setItem('user-name', name);
        this.authToken = token;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loadAdmindata = function () {
        var x = localStorage.getItem('user-id');
        var y = localStorage.getItem('user-name');
        this.AdminId = x;
        this.Adminname = y;
        return { AdminId: this.AdminId, Adminname: this.Adminname };
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        console.log("signing out");
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ })

},[563]);
//# sourceMappingURL=main.bundle.js.map