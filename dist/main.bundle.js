webpackJsonp([1,4],{

/***/ 138:
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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        // Our localhost address that we set in our server code
        this.url = 'http://localhost:3300';
    }
    ChatService.prototype.sendMessage = function (message) {
        // Make sure the "add-message" is written here because this is referenced in on() in our server
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return ChatService;
}());
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
    }
    CompanyService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    CompanyService.prototype.getCompany = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/company/' + params)
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.getUserSameCompany = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CompanyService);
    return CompanyService;
    var _a;
}());
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.AddFood = function (Task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/food/add', Task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.getFood = function (params) {
        console.log(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/food/' + params)
            .map(function (res) { return res.json(); });
    };
    FoodService.prototype.addvote = function (vote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/food/vote', vote, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    FoodService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FoodService);
    return FoodService;
    var _a;
}());
//# sourceMappingURL=food.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signup', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/company', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.signin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // authenticateUser(user){
    //   let headers = new Headers();
    //   headers.append('Content-Type','application/json');
    //   return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
    //     .map(res => res.json());
    // }
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
        // return tokenNotExpired();
        if (localStorage.getItem('id_token').length) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        console.log("signing out");
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getSchedule = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/schedule/' + params)
            .map(function (res) { return res.json(); });
    };
    ScheduleService.prototype.AddSchedule = function (schedule) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/schedule/add', schedule, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ScheduleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ScheduleService);
    return ScheduleService;
    var _a;
}());
//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.AddTask = function (Task) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/addTask', Task, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.getTask = function (params) {
        console.log(params);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/getTask/' + params)
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TaskService);
    return TaskService;
    var _a;
}());
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 363;


/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(494);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 481:
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
            template: __webpack_require__(580),
            styles: [__webpack_require__(565)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutusComponent);
    return AboutusComponent;
}());
//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ 482:
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
            template: __webpack_require__(581),
            styles: [__webpack_require__(566)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_company_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_task_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__creatcompany_creatcompany_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__schedule_schedule_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__food_food_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_company_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_schedule_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_task_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_food_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chat_chat_service__ = __webpack_require__(317);
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
                __WEBPACK_IMPORTED_MODULE_15__schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__["a" /* AboutusComponent */],
                __WEBPACK_IMPORTED_MODULE_12__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__creatcompany_creatcompany_component__["a" /* CreatcompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_16__food_food_component__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: 'mainPage', component: __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__["a" /* MainPageComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__["a" /* MainPageComponent */] },
                    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__["a" /* SignupComponent */] },
                    { path: 'creatcompany', component: __WEBPACK_IMPORTED_MODULE_14__creatcompany_creatcompany_component__["a" /* CreatcompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__["a" /* SigninComponent */] },
                    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__["a" /* AboutusComponent */] },
                    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_12__company_company_component__["a" /* CompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'task', component: __WEBPACK_IMPORTED_MODULE_13__task_task_component__["a" /* TaskComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_15__schedule_schedule_component__["a" /* ScheduleComponent */] },
                    { path: 'food', component: __WEBPACK_IMPORTED_MODULE_16__food_food_component__["a" /* FoodComponent */] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__["a" /* ChatComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_19__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_20__services_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_24__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_25__chat_chat_service__["a" /* ChatService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ChatComponent.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.message);
        this.message = '';
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.chatService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
        });
    };
    // Let's unsubscribe our Observable
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(582),
            styles: [__webpack_require__(567)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
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
    function CompanyComponent(authService, router, companyService) {
        this.authService = authService;
        this.router = router;
        this.companyService = companyService;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('user-id');
        console.log(user);
        this.obj = {};
        this.companyService.getCompany(user).subscribe(function (data) {
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
            template: __webpack_require__(583),
            styles: [__webpack_require__(568)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */]) === 'function' && _c) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
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
                // this.authService.storeUserData(data.token,data._id,data.username);
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
            template: __webpack_require__(584),
            styles: [__webpack_require__(569)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreatcompanyComponent);
    return CreatcompanyComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=creatcompany.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FoodComponent = (function () {
    function FoodComponent(authService, flashMessage, foodservice, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.foodservice = foodservice;
        this.router = router;
        this.foods = [];
        this.foodTimes = ["diner", "lunche", "brachfast",];
    }
    FoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodTime = this.foodTimes[0];
        this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(function (data) {
            _this.foods = data;
            console.log(_this.foods);
        });
    };
    FoodComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    FoodComponent.prototype.onChange = function (newValue) {
        this.foodTime = newValue;
    };
    FoodComponent.prototype.addFood = function () {
        var _this = this;
        var FoodObj = {
            dishName: this.dishName,
            foodTime: this.foodTime,
            type: this.type,
            userId: localStorage.getItem("user-id")
        };
        this.foods.push(FoodObj);
        this.foodservice.AddFood(FoodObj).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('task add well', { cssClass: 'alert-success', timeout: 3000 });
                _this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(function (data) {
                    _this.foods = data;
                    console.log(_this.foods);
                });
            }
        });
    };
    FoodComponent.prototype.Votee = function (Name) {
        var _this = this;
        var voteObj = {
            dishName: Name,
            userId: localStorage.getItem("user-id")
        };
        console.log(voteObj);
        this.foodservice.addvote(voteObj).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('you vote m***F***', { cssClass: 'alert-success', timeout: 3000 });
                _this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(function (data) {
                    _this.foods = data;
                    console.log(_this.foods);
                });
            }
        });
    };
    FoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(585),
            styles: [__webpack_require__(570)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], FoodComponent);
    return FoodComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=food.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
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
        console.log(this.authService.loggedIn());
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

/***/ 489:
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
            template: __webpack_require__(586),
            styles: [__webpack_require__(571)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainPageComponent);
    return MainPageComponent;
}());
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(32);
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
    function ScheduleComponent(authService, flashMessage, scheduleservice, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.scheduleservice = scheduleservice;
        this.router = router;
        this.info = false;
        this.showSch = false;
        this.todos = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleservice.getSchedule(localStorage.getItem("user-id")).subscribe(function (data) {
            _this.todos = data;
            console.log(_this.todos);
        });
    };
    ScheduleComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    ScheduleComponent.prototype.div_hide = function () {
        document.getElementById('aya').style.display = "none";
        if (this.title && this.date)
            this.info = !this.info;
    };
    //Function To Display Popup
    ScheduleComponent.prototype.div_show = function () {
        document.getElementById('aya').style.display = "block";
        this.showSch = false;
    };
    ScheduleComponent.prototype.add = function () {
        var _this = this;
        var todoObj = {
            title: this.title,
            description: this.description,
            date: this.date,
            starttime: this.starttime,
            endtime: this.endtime,
            id: localStorage.getItem("user-id")
        };
        console.log(todoObj);
        this.todos.push(todoObj);
        this.scheduleservice.AddSchedule(todoObj).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('task add well', { cssClass: 'alert-success', timeout: 3000 });
            }
        });
    };
    ScheduleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(587),
            styles: [__webpack_require__(572)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
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
            template: __webpack_require__(588),
            styles: [__webpack_require__(573)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
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
                _this.authService.storeUserData(data.token, data.AdminId, data.username);
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
            template: __webpack_require__(589),
            styles: [__webpack_require__(574)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(32);
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
    function TaskComponent(authService, flashMessage, taskservice, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.taskservice = taskservice;
        this.router = router;
        this.todos = [];
        this.Assigns = ["zainb", "shit", "aya", "maher", "maker"];
    }
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todos = [];
        this.Assign = this.Assigns[0];
        this.taskservice.getTask(localStorage.getItem("user-id")).subscribe(function (data) {
            _this.todos = data;
            console.log(_this.todos);
        });
    };
    TaskComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    TaskComponent.prototype.onChange = function (newValue) {
        this.Assign = newValue;
    };
    TaskComponent.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
    };
    // for hide the temblate
    TaskComponent.prototype.div_hide = function () {
        document.getElementById('abc').style.display = "none";
    };
    //Function To Display Popup
    TaskComponent.prototype.div_show = function () {
        document.getElementById('abc').style.display = "block";
    };
    TaskComponent.prototype.addTodo = function () {
        var _this = this;
        var todoObj = {
            newTodo: this.newTodo,
            completed: false,
            Discription: this.Discription,
            Date: this.Date,
            Assign: this.Assign,
            userId: localStorage.getItem("user-id")
        };
        this.todos.push(todoObj);
        this.taskservice.AddTask(todoObj).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('task add well', { cssClass: 'alert-success', timeout: 3000 });
            }
        });
    };
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(590),
            styles: [__webpack_require__(575)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], TaskComponent);
    return TaskComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ 494:
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

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "* { margin: 0; padding: 0; box-sizing: border-box; }\r\nform { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }\r\nform input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }\r\nform button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }\r\n#messages { list-style-type: none; margin: 0; padding: 0; }\r\n#messages #item { padding: 5px 10px; }\r\n#messages #item { background: #eee; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, " /* Remove the navbar's default rounded borders and increase the bottom margin */ \r\n .navbar {\r\n  margin-bottom: 50px;\r\n  border-radius: 0;\r\n}\r\n\r\n/* Remove the jumbotron's default bottom margin */ \r\n.jumbotron {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* Add a gray background color and some padding to the footer */\r\nfooter {\r\n  background-color: #f2f2f2;\r\n  padding: 25px;\r\n}\r\n\r\n.panel-heading {\r\n  color: #00008B;\r\n  font-size: 17px;\r\n}\r\n\r\n.body {\r\n  background-image: url(" + __webpack_require__(611) + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\r\nform {\r\n  max-width: 300px;\r\n  margin: 10px auto;\r\n  padding: 10px 20px;\r\n  background: #f4f7f8;\r\n  border-radius: 8px;\r\n}\r\nh1 {\r\n  margin: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\n\r\n\r\nselect {\r\n  background: rgba(255,255,255,0.1);\r\n  border: none;\r\n  font-size: 16px;\r\n  height: auto;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 15px;\r\n  width: 100%;\r\n  background-color: #e8eeef;\r\n  color: #8a97a0;\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 19px 39px 18px 39px;\r\n  color: #FFF;\r\n  background-color: #4eb9bf;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #4eb9bf;\r\n  border-width: 1px 1px 3px;\r\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: 30px;\r\n  border: none;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\nlabel.light {\r\n  font-weight: 300;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  form {\r\n    max-width: 480px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Laila:400,700);", ""]);

// module
exports.push([module.i, ".switchery{background-color:#fff;border:1px solid #dfdfdf;border-radius:20px;cursor:pointer;display:inline-block;height:30px;position:relative;vertical-align:middle;width:50px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;box-sizing:content-box;background-clip:content-box}.switchery>small{background:#fff;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,0.4);height:30px;position:absolute;top:0;width:30px}.switchery-small{border-radius:20px;height:20px;width:33px}.switchery-small>small{height:20px;width:20px}.switchery-large{border-radius:40px;height:40px;width:66px}.switchery-large>small{height:40px;width:40px}\r\n\r\nbr { display: block; line-height: 1.6em; } \r\n\r\ninput, textarea { \r\n  -webkit-font-smoothing: antialiased;\r\n  outline: none; \r\n}\r\n\r\nstrong, b { font-weight: bold; }\r\nem, i { font-style: italic; }\r\n\r\n/** form field **/\r\nform {\r\n  display: block;\r\n  margin: 30px;\r\n  overflow: hidden;\r\n  background: #fff;\r\n  border: 1px solid #e4e4e4;\r\n  border-radius: 5px;\r\n  font-size: 0;\r\n}\r\n\r\nform > div > label {\r\n  display: block;\r\n  padding: 20px 20px 10px;\r\n  vertical-align: top;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: #939393;\r\n  cursor: pointer;\r\n}\r\nform > div.switch > label {\r\n  padding: 16px 20px 13px;\r\n}\r\n\r\n.col-2, .col-3, .col-4 { \r\n  border-bottom: 1px solid #e4e4e4;\r\n}\r\n\r\nform > div > .col-4 {\r\n  height: 86px;\r\n}\r\n\r\nlabel > input {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 27px;\r\n  line-height: 27px;\r\n  margin: 5px -5px 0;\r\n  padding: 7px 5px 3px;\r\n  border: none;\r\n  outline: none;\r\n  color: #555;\r\n  font-family: 'Helvetica Neue', Arial, sans-serif;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  opacity: .6;\r\n  -webkit-transition:all linear .3s;\r\n  transition: all linear .3s;\r\n}\r\n\r\n.col-submit {\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\nlabel > select {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  color: #555;\r\n  margin: 16px 0 6px;\r\n  font-weight: 500;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Helvetica Neue', Arial, sans-serif;\r\n  font-size: 14px;\r\n  opacity: .4;\r\n  -webkit-transition:all linear .3s;\r\n  transition: all linear .3s;\r\n}\r\n\r\nlabel > input:focus, label > select:focus {\r\n  opacity: 1;\r\n}\r\n\r\n\r\n\r\n/** button design based on http://codepen.io/guvootes/pen/eyDAb **/\r\n.submitbtn {\r\n  width: 100%;\r\n  height: 35px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin: 0 0 15px 0;\r\n  font-size: 14px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px 0 rgba(0,0,0,0.3);\r\n  overflow: hidden;\r\n  outline: none;\r\n}\r\n\r\nbutton.submitbtn {\r\n  background-image: -webkit-linear-gradient(#31362b, #706d6b);\r\n  background-image: linear-gradient(#31362b, #706d6b);\r\n  border-bottom: 1px solid #648c3a;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\nbutton.submitbtn:hover {\r\n  background-image: -webkit-linear-gradient(#706d6b, #31362b);\r\n  background-image: linear-gradient(#706d6b, #31362b);\r\n}\r\nbutton.submitbtn:active {\r\n  height: 34px;\r\n  border-bottom: 0;\r\n  margin: 1px 0 0 0;\r\n  background-image: -webkit-linear-gradient(#b7b586, #31362b);\r\n  background-image: linear-gradient(#b7b586, #31362b);\r\n  box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n/** responsive design **/\r\n@media(min-width: 850px){\r\n  form > div { display: inline-block; }\r\n  .col-submit { display: block; }\r\n  \r\n  .col-2, .col-3, .col-4 { box-shadow: 1px 1px #e4e4e4; border: none; }\r\n  \r\n  .col-2 { width: 50% }\r\n  .col-3 { width: 33.3333333333% }\r\n  .col-4 { width: 25% }\r\n  \r\n  .col-submit button { width: 30%; margin: 0 auto; }\r\n}\r\n\r\n/*****************************8*/\r\n\r\n#pricing-table {\r\n  margin: 100px auto;\r\n  text-align: center;\r\n  width: 892px; /* total computed width = 222 x 3 + 226 */\r\n}\r\n\r\n#pricing-table .plan {\r\n  font: 12px 'Lucida Sans', 'trebuchet MS', Arial, Helvetica;\r\n  text-shadow: 0 1px rgba(255,255,255,.8);        \r\n  background: #fff;      \r\n  border: 1px solid #ddd;\r\n  color: #333;\r\n  padding: 20px;\r\n  width: 180px; /* plan width = 180 + 20 + 20 + 1 + 1 = 222px */      \r\n  float: left;\r\n  position: relative;\r\n}\r\n\r\n#pricing-table #most-popular {\r\n  z-index: 2;\r\n  top: -13px;\r\n  border-width: 3px;\r\n  padding: 30px 20px;\r\n  border-radius: 5px;\r\n  box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);    \r\n}\r\n\r\n#pricing-table .plan:nth-child(1) {\r\n  border-radius: 5px 0 0 5px;        \r\n}\r\n\r\n#pricing-table .plan:nth-child(4) {\r\n  border-radius: 0 5px 5px 0;        \r\n}\r\n\r\n/* --------------- */ \r\n\r\n#pricing-table h3 {\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  padding: 20px;\r\n  margin: -20px -20px 50px -20px;\r\n  background-color: #eee;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));    \r\n  background-image: -webkit-linear-gradient(#fff, #eee);\r\n  background-image: linear-gradient(#fff, #eee);\r\n}\r\n\r\n#pricing-table #most-popular h3 {\r\n  background-color: #ddd;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));    \r\n  background-image: -webkit-linear-gradient(#eee, #ddd);\r\n  background-image: linear-gradient(#eee, #ddd);\r\n  margin-top: -30px;\r\n  padding-top: 30px;\r\n  border-radius: 5px 5px 0 0;     \r\n}\r\n\r\n#pricing-table .plan:nth-child(1) h3 {\r\n  border-radius: 5px 0 0 0;       \r\n}\r\n\r\n#pricing-table .plan:nth-child(4) h3 {\r\n  border-radius: 0 5px 0 0;       \r\n} \r\n\r\n#pricing-table h3 span {\r\n  display: block;\r\n  font: bold 25px/100px Georgia, Serif;\r\n  color: #777;\r\n  background: #fff;\r\n  border: 5px solid #fff;\r\n  height: 100px;\r\n  width: 100px;\r\n  margin: 10px auto -65px;\r\n  border-radius: 100px;\r\n  box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;\r\n}\r\n\r\n/* --------------- */\r\n\r\n#pricing-table ul {\r\n  margin: 20px 0 0 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n#pricing-table li {\r\n  border-top: 1px solid #ddd;\r\n  padding: 10px 0;\r\n}\r\n\r\n/* --------------- */\r\n  \r\n#pricing-table .signup {\r\n  position: relative;\r\n  padding: 8px 20px;\r\n  margin: 20px 0 0 0;  \r\n  color: #fff;\r\n  font: bold 14px Arial, Helvetica;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  display: inline-block;       \r\n  background-color: #72ce3f;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#382c01), to(#281616));    \r\n  background-image: -webkit-linear-gradient(#382c01, #281616);\r\n  background-image: linear-gradient(#382c01, #281616);\r\n  border-radius: 3px;     \r\n  text-shadow: 0 1px 0 rgba(0,0,0,.3);\r\n  box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);\r\n}\r\n\r\n#pricing-table .signup:hover {\r\n  background-color: #ff0000;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#820a0a), to(#820a0a));      \r\n  background-image: -webkit-linear-gradient(#ff0000, #820a0a);\r\n  background-image: linear-gradient(#ff0000, #820a0a); \r\n}\r\n\r\n#pricing-table .signup:active, #pricing-table .signup:focus {\r\n  background: #ff0000;       \r\n  top: 2px;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset; \r\n}\r\n\r\n/* --------------- */\r\n\r\n.clear:before, .clear:after {\r\n  content:\"\";\r\n  display:table\r\n}\r\n\r\n.clear:after {\r\n  clear:both\r\n}\r\n\r\n.clear {\r\n  zoom:1\r\n}\r\n\r\n\r\n.img{\r\n    background: #253340 url('/assets/img/food.jpg') no-repeat 50% top;\r\n    /*filter: opacity(30%);*/\r\n    background-size: cover;\r\n    /*padding-top: 640px;*/\r\n    /*-webkit-filter: opacity(30%);*/\r\n}\r\n\r\n.well {\r\n   background-color: rgba(245, 245, 245, 0.3);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "section.success {\r\n  background: #485451;\r\n  color: white;\r\n}\r\np {\r\n  font-size: 20px;\r\n}\r\np.small {\r\n  font-size: 16px;\r\n}\r\n.btn-outline {\r\n  color: white;\r\n  font-size: 20px;\r\n  border: solid 2px white;\r\n  background: transparent;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  margin-top: 15px;\r\n}\r\n.btn-outline:hover,\r\n.btn-outline:focus,\r\n.btn-outline:active,\r\n.btn-outline.active {\r\n  color: #485451;\r\n  background: white;\r\n  border: solid 2px white;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active,\r\na.active {\r\n  color: #485451;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  overflow-x: hidden;\r\n}\r\n\r\nhr.star-light,\r\nhr.star-primary {\r\n  padding: 0;\r\n  border: none;\r\n  border-top: solid 5px;\r\n  text-align: center;\r\n  max-width: 225px;\r\n  margin: 10px auto 20px;\r\n}\r\nhr.star-light:after,\r\nhr.star-primary:after {\r\n  content: \"\\F005\";\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -0.8em;\r\n  font-size: 2em;\r\n  padding: 0 0.25em;\r\n}\r\nhr.star-light {\r\n  border-color: white;\r\n}\r\nhr.star-light:after {\r\n  background-color: #485451;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  padding: 75px 0;\r\n}\r\nsection h2 {\r\n  margin: 0;\r\n  font-size: 3em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, " .box1 {\r\n  border: solid 1px #006699;\r\n  padding: 20px;\r\n  background: #f3f3f3;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todos input.textfield {\r\n  width: 480px;\r\n  height: 36px;\r\n  margin-right: 20px;\r\n  font-size: 1.4em;\r\n  vertical-align: top;\r\n}\r\n\r\n.todos input.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.todos .checked {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todos button {\r\n  height: 36px;\r\n  font-size: 1.1em;\r\n  vertical-align: top;\r\n  border: solid 1px #999;\r\n  border-radius: 2px;\r\n}\r\n\r\n.todos .delete-icon {\r\n  diplay: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/*  style for table that show the tasks info*/\r\n.img{\r\n  background: #253340 url(http://az616578.vo.msecnd.net/files/2016/08/06/6360610785851960672068369534_schedule-image-.jpg) no-repeat 50% top;\r\n  background-size: cover;\r\n  padding-top: 640px;\r\n}\r\n\r\n.btn {\r\n  margin-left: 550px;   \r\n  background-color: #8a6d3b;\r\n  border-color: #8a6d3b;\r\n}\r\n#add{\r\n  margin-left: 590px;\r\n  background-color: #8a6d3b;\r\n  border-color: #8a6d3b;\r\n  \r\n}\r\ntable {\r\n  background: #f5f5f5;\r\n  border-collapse: separate;\r\n  box-shadow: inset 0 1px 0 #fff;\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  margin: 30px auto;\r\n  text-align: left;\r\n  width: 800px;\r\n} \r\n\r\nth {\r\n  background: -webkit-linear-gradient(#996A00, #444);\r\n  background: linear-gradient(#996A00, #444);\r\n  border-left: 1px solid #555;\r\n  border-right: 1px solid #777;\r\n  border-top: 1px solid #555;\r\n  border-bottom: 1px solid #333;\r\n  box-shadow: inset 0 1px 0 #999;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  padding: 10px 15px;\r\n  position: relative;\r\n  text-shadow: 0 1px 0 #000;  \r\n}\r\n\r\nth:after {\r\n  background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\r\n  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\r\n  content: '';\r\n  display: block;\r\n  height: 25%;\r\n  left: 0;\r\n  margin: 1px 0 0 0;\r\n  position: absolute;\r\n  top: 25%;\r\n  width: 100%;\r\n}\r\n\r\nth:first-child {\r\n  border-left: 1px solid #777;  \r\n  box-shadow: inset 1px 1px 0 #999;\r\n}\r\n\r\nth:last-child {\r\n  box-shadow: inset -1px 1px 0 #999;\r\n}\r\n\r\ntd {\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #e8e8e8;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #e8e8e8;\r\n  padding: 10px 15px;\r\n  position: relative;\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\ntd:first-child {\r\n  box-shadow: inset 1px 0 0 #fff;\r\n} \r\n\r\ntd:last-child {\r\n  border-right: 1px solid #e8e8e8;\r\n  box-shadow: inset -1px 0 0 #fff;\r\n} \r\n\r\ntr:last-of-type td {\r\n  box-shadow: inset 0 -1px 0 #fff; \r\n}\r\n\r\ntr:last-of-type td:first-child {\r\n  box-shadow: inset 1px -1px 0 #fff;\r\n} \r\n\r\ntr:last-of-type td:last-child {\r\n  box-shadow: inset -1px -1px 0 #fff;\r\n} \r\n\r\n\r\n\r\n\r\n.navbar-inverse {\r\n  background: -webkit-linear-gradient(#996A00, #444);\r\n  background: linear-gradient(#996A00, #444);\r\n  font-size: 1.2em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'Nunito', sans-serif;\r\n  color: #384047;\r\n}\r\nform {\r\n  max-width: 300px;\r\n  margin: 10px auto;\r\n  padding: 10px 20px;\r\n  background: #f4f7f8;\r\n  border-radius: 8px;\r\n}\r\nh1 {\r\n  margin: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\n\r\n\r\nselect {\r\n  background: rgba(255,255,255,0.1);\r\n  border: none;\r\n  font-size: 16px;\r\n  height: auto;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 15px;\r\n  width: 100%;\r\n  background-color: #e8eeef;\r\n  color: #8a97a0;\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 19px 39px 18px 39px;\r\n  color: #FFF;\r\n  background-color: #4eb9bf;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #4eb9bf;\r\n  border-width: 1px 1px 3px;\r\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: 30px;\r\n  border: none;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\nlabel.light {\r\n  font-weight: 300;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  form {\r\n    max-width: 480px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'Nunito', sans-serif;\r\n  color: #384047;\r\n}\r\nform {\r\n  max-width: 300px;\r\n  margin: 10px auto;\r\n  padding: 10px 20px;\r\n  background: #f4f7f8;\r\n  border-radius: 8px;\r\n}\r\nh1 {\r\n  margin: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"password\"],\r\ninput[type=\"email\"],\r\ninput[type=\"code\"],\r\n\r\n\r\nselect{\r\n  background: rgba(255,255,255,0.1);\r\n  border: none;\r\n  font-size: 18px;\r\n  height: auto;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 15px;\r\n  width: 100%;\r\n  background-color: #e8eeef;\r\n  color: #8a97a0;\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 19px 39px 18px 39px;\r\n  color: #FFF;\r\n  background-color: #4eb9bf;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #4eb9bf;\r\n  border-width: 1px 1px 3px;\r\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: 30px;\r\n  border: none;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\nlabel.light {\r\n  font-weight: 300;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  form {\r\n    max-width: 480px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, ".box1 {\r\n  border: solid 1px #006699;\r\n  padding: 20px;\r\n  background: #f3f3f3;\r\n  border-radius: 5px;\r\n}\r\n\r\n\r\nstrong {\r\n  font-weight: bold; \r\n}\r\n\r\nem {\r\n  font-style: italic; \r\n}\r\n\r\ntable {\r\n  background: #f5f5f5;\r\n  border-collapse: separate;\r\n  box-shadow: inset 0 1px 0 #006699;\r\n  font-size: 12px;\r\n  line-height: 24px;\r\n  margin: 30px auto;\r\n  text-align: left;\r\n  width: 800px;\r\n} \r\n\r\nth {\r\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png), -webkit-linear-gradient(#777, #444);\r\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444);\r\n  border-left: 1px solid #006699;\r\n  border-right: 1px solid #006699;\r\n  border-top: 1px solid #006699;\r\n  border-bottom: 1px solid #006699;\r\n  box-shadow: inset 0 1px 0 #006699;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  padding: 10px 15px;\r\n  position: relative;\r\n  text-shadow: 0 1px 0 #006699;  \r\n}\r\n\r\nth:after {\r\n  background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\r\n  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\r\n  content: '';\r\n  display: block;\r\n  height: 25%;\r\n  left: 0;\r\n  margin: 1px 0 0 0;\r\n  position: absolute;\r\n  top: 25%;\r\n  width: 100%;\r\n}\r\n\r\nth:first-child {\r\n  border-left: 1px solid #777;  \r\n  box-shadow: inset 1px 1px 0 #999;\r\n}\r\n\r\nth:last-child {\r\n  box-shadow: inset -1px 1px 0 #999;\r\n}\r\n\r\ntd {\r\n  border-right: 1px solid #fff;\r\n  border-left: 1px solid #e8e8e8;\r\n  border-top: 1px solid #fff;\r\n  border-bottom: 1px solid #e8e8e8;\r\n  padding: 10px 15px;\r\n  position: relative;\r\n  -webkit-transition: all 300ms;\r\n  transition: all 300ms;\r\n}\r\n\r\ntd:first-child {\r\n  box-shadow: inset 1px 0 0 #fff;\r\n} \r\n\r\ntd:last-child {\r\n  border-right: 1px solid #e8e8e8;\r\n  box-shadow: inset -1px 0 0 #fff;\r\n} \r\n\r\ntr {\r\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png);  \r\n}\r\n\r\ntr:nth-child(odd) td {\r\n  background: #f1f1f1 url(http://jackrugile.com/images/misc/noise-diagonal.png);  \r\n}\r\n\r\ntr:last-of-type td {\r\n  box-shadow: inset 0 -1px 0 #fff; \r\n}\r\n\r\ntr:last-of-type td:first-child {\r\n  box-shadow: inset 1px -1px 0 #fff;\r\n} \r\n\r\ntr:last-of-type td:last-child {\r\n  box-shadow: inset -1px -1px 0 #fff;\r\n} \r\n\r\ntbody:hover td {\r\n  color: transparent;\r\n  text-shadow: 0 0 3px #aaa;\r\n}\r\n\r\ntbody:hover tr:hover td {\r\n  color: #444;\r\n  text-shadow: 0 1px 0 #fff;\r\n}\r\n\r\n\r\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\r\n  color: #000;  /*Sets the text hover color on navbar*/\r\n}\r\n\r\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active >   \r\na:hover, .navbar-inverse .navbar-nav > .active > a:focus {\r\n  color: white; /*BACKGROUND color for active*/\r\n  background-color: #030033;\r\n}\r\n\r\n.navbar-inverse {\r\n  background-color: #0f006f;\r\n  border-color: #030033;\r\n}\r\n\r\n.dropdown-menu > li > a:hover,\r\n.dropdown-menu > li > a:focus {\r\n  color: #262626;\r\n  text-decoration: none;\r\n  background-color: #66CCFF;  /*change color of links in drop down here*/\r\n}\r\n\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  text-decoration: none;\r\n  background-color: silver; /*Change rollover cell color here*/\r\n}\r\n\r\n\r\n.navbar-inverse .navbar-nav > li > a {\r\n color: white; /*Change active text color here*/\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" id=\"avia-grid-group-css\" href=\"http://www.kriesi.at/wp-content/plugins/bwp-minify/min/?f=wp-content/themes/enfold/css/grid.css,wp-content/themes/enfold/css/base.css,wp-content/themes/enfold/css/layout.css,wp-content/themes/enfold/css/shortcodes.css,wp-content/uploads/dynamic_avia/kriesi.at.css,wp-content/themes/enfold/css/custom.css,wp-content/themes/kriesi/style.css,wp-content/plugins/envato-marketplace-items/marketplace.css\" type=\"text/css\" media=\"all\">\r\n\r\n\r\n\r\n<body id=\"top\" class=\"page-template-default page page-id-542 stretched open_sans \" itemscope=\"itemscope\" itemtype=\"https://schema.org/WebPage\">  \r\n\r\n    \r\n  <div id=\"main\" class=\"all_colors\" data-scroll-offset=\"88\">\r\n\r\n  <div id=\"about-us-intro\" class=\"avia-section main_color avia-section-default avia-no-shadow avia-bg-style-scroll  avia-builder-el-0  el_before_av_section  avia-builder-el-first  four_to_two container_wrap fullsize\">\r\n\r\n\r\n  <div class=\"container\"><main role=\"main\" itemprop=\"mainContentOfPage\" class=\"template-page content  av-content-full alpha units\">\r\n  <div class=\"post-entry post-entry-type-page post-entry-542\">\r\n  <div class=\"entry-content-wrapper clearfix\">\r\n\r\n\r\n\r\n<div style=\"padding-bottom:14px;\" class=\"av-special-heading av-special-heading-h1  blockquote classic-quote  avia-builder-el-1  el_before_av_hr  avia-builder-el-first   av-thin-font\"><h1 class=\"av-special-heading-tag\" itemprop=\"headline\">A little bit <strong>about us</strong></h1><div class=\"special-heading-border\"><div class=\"special-heading-inner-border\"></div></div></div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"hr hr-short hr-center  avia-builder-el-2  el_after_av_heading  el_before_av_one_fourth\"><span class=\"hr-inner\"></span></div>\r\n\r\n\r\n<div class=\"flex_column av_one_fourth  flex_column_div first  avia-builder-el-3  el_after_av_hr  el_before_av_one_fourth  \">\r\n\r\n<div class=\"iconbox_content\">\r\n<header class=\"entry-content-header\">\r\n\r\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\"><span class=\"glyphicon glyphicon-user\"></span> Who we are?</h5>\r\n</header>\r\n<div class=\"iconbox_content_container \" itemprop=\"text\">\r\n<p>A team of awesome developers who are driven by perfectionism and the urge to create something that our customers love.</p>\r\n\r\n\r\n\r\n</div></div><footer class=\"entry-footer\"></footer></div>\r\n\r\n\r\n\r\n\r\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-5  el_after_av_one_fourth  el_before_av_one_fourth  \">\r\n<div class=\"iconbox_content\">\r\n<header class=\"entry-content-header\">\r\n\r\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\"><span class=\"glyphicon glyphicon-wrench\"></span> What we do?</h5></header><div class=\"iconbox_content_container \" itemprop=\"text\"><p>Build ridiculously powerful and easy to use Angular 2. Offer top notch customer support. Care for every detail.</p>\r\n</div></div><footer class=\"entry-footer\"></footer></div>\r\n\r\n\r\n\r\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-7  el_after_av_one_fourth  el_before_av_one_fourth  \">\r\n<div class=\"iconbox_content\">\r\n\r\n<header class=\"entry-content-header\">\r\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\">\r\n<span class=\"glyphicon glyphicon-heart\">\r\n</span> Why we do it?</h5>\r\n</header>\r\n<div class=\"iconbox_content_container \" itemprop=\"text\">\r\n<p>Because setting up your own Website should neither be painful nor expensive nor complicated.</p>\r\n</div></div><footer class=\"entry-footer\"></footer></div>\r\n\r\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-7  el_after_av_one_fourth  el_before_av_one_fourth  \">\r\n<div class=\"iconbox_content\">\r\n\r\n<header class=\"entry-content-header\">\r\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\">\r\n<span class=\"glyphicon glyphicon-time\">\r\n</span> Future plans</h5>\r\n</header>\r\n<div class=\"iconbox_content_container \" itemprop=\"text\">\r\n<p>Lot of high quality freebies and wonderful Always you can suggest us an improvement or feature request.</p>\r\n</div></div><footer class=\"entry-footer\"></footer></div>\r\n\r\n\r\n\r\n\r\n</div></div></main><!-- close content main element --></div></div>\r\n\r\n<div id=\"about-us-team\" class=\"avia-section alternate_color avia-section-large avia-no-shadow avia-bg-style-scroll  avia-builder-el-11  el_after_av_section  el_before_av_heading  section-with-bg container_wrap fullsize\">\r\n<div class=\"container\">\r\n<div class=\"template-page content  av-content-full alpha units\">\r\n<div class=\"post-entry post-entry-type-page post-entry-542\">\r\n<div class=\"entry-content-wrapper clearfix\">\r\n\r\n\r\n<div style=\"padding-bottom:14px;\" class=\"av-special-heading av-special-heading-h1  blockquote classic-quote  avia-builder-el-13  el_after_av_heading  el_before_av_testimonials   av-thin-font\"><h1 class=\"av-special-heading-tag\" itemprop=\"headline\">Allow us to <strong>introduce ourselves</strong></h1><div class=\"special-heading-border\"><div class=\"special-heading-inner-border\"></div></div></div>\r\n\r\n<div data-autoplay=\"1\" data-interval=\"5\" data-animation=\"fade\" data-hoverpause=\"1\" class=\"avia-testimonial-wrapper avia-grid-testimonials avia-grid-2-testimonials avia_animate_when_almost_visible   avia_start_animation\">\r\n\r\n<section class=\"avia-testimonial-row\">\r\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-1 avia-first-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\">\r\n<div class=\"avia-testimonial_inner\">\r\n<div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/ahmed.png\" class=\"attachment-square size-square\" sizes=\"(max-width: 180px) 100vw, 180px\">\r\n</div>\r\n\r\n\r\n<div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Welcome ! I'm Scrum Master for this project we worked it as ateam in RBK I graduated from Information Technology IT. ,and i'm softweer engineer.</p>\r\n<p>Follow me on:&nbsp;<a href=\"https://github.com/AhmadAlMaradni\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/ahmad-almaradni-a9857665/\" target=\"_blank\">Linked in</a>&nbsp;\r\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Ahmed Maradni</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Damascus, Syria</span></div></div></div></div>\r\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-1 avia-last-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/Aaya.png\" class=\"attachment-square size-square\" alt=\"Yigit Telyakar\"  sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Team Member for this project we worked it as ateam in RBK I graduated from Information Technology IT. ,and i'm softweer engineer.</p>\r\n<p>Follow me on:&nbsp;<a href=\"https://github.com/Aaya-Hassan\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/aaya-hassan-5b1b8613b/\" target=\"_blank\">Linked in</a>&nbsp;\r\n\r\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Aaya Hassan</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Baghdad, Iraq</span></div></div></div></div></section>\r\n<section class=\"avia-testimonial-row\"><div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-2 avia-first-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/zainab.png\" class=\"attachment-square size-square\" alt=\"Ismael Herrera\" sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Team Member for this project we worked it as ateam in RBK I graduated as Nutritionist ,and i'm softweer engineer.</p>\r\n\r\n<p>Follow me on:&nbsp;<a href=\"https://github.com/ZainabOmar\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/zainab-hammami-18335013a/\" target=\"_blank\">Linked in</a>&nbsp;\r\n\r\n\r\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Zainab Hammami</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Aleppo, Syria</span></div></div></div></div>\r\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-2 avia-last-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/maher.png\" class=\"attachment-square size-square\" alt=\"Andreas Müller\" sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Product Owner for this project we worked it as ateam in RBK I graduated as Pharmacist ,and i'm softweer engineer.</p>\r\n<p>Follow me on:&nbsp;<a href=\"https://github.com/maherghnom\" target=\"_blank\">GitHub</a> | <a href=\"\" target=\"_blank\">#</a>&nbsp;\r\n\r\n\r\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Maher Ghanom</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Damascus, Syria</span></div></div></div></div></section>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<form action=\"\"> \n  <input [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" /><button (click)=\"sendMessage()\">Send</button>\n</form>\n<div id=\"messages\" *ngFor=\"let message of messages\">\n  <div id=\"item\">\n  {{message.text}}\n  </div>\n</div>\n<!-- <app-chat></app-chat> -->"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container text-center\">\r\n      <h1>{{obj.CompanyName}}</h1>      \r\n      <p><strong>Mission, Vission and Values</strong></p>\r\n    </div>\r\n  </div>\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active\"><a routerLink = \"/\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\r\n          <li><a routerLink=\"/company\">Users <span class=\"glyphicon glyphicon-user\"></span></a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a (click)=\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"container\">    \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Start A Task</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/task\"><img src=\"../../assets/img/tasks-icon-26.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Post A Task And Show It To Your Colleagues</div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Discussion Board</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/Discussion.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Discuss Your Problems Comfortably</div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Your Schedule</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/schedule\"><img src=\"../../assets/img/schedule.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Schedule Your Meetings With Other Colleagues</div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><br>\r\n\r\n  <div class=\"container\">    \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Chat with Collegues</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/Chat.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Start Chatting Your Collegues</div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Vote for Food</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/food\"><img src=\"../../assets/img/food.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Hungry?! You Can Get Food Here</div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Playing Board</div>\r\n          <div class=\"panel-body\"><a routerLink = \"/\"><img src=\"../../assets/img/game.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\r\n          <!-- <div class=\"panel-footer\">Time To play Around</div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div><br><br>\r\n\r\n  <footer class=\"container-fluid text-center\">\r\n    <p>{{obj.CompanyName}} Loves You <span class=\"glyphicon glyphicon-heart\"></span></p>\r\n    <p>{{obj.address}} <span class=\"glyphicon glyphicon-globe\"></span></p>\r\n    <p>{{obj.phoneNumber}} <span class=\"glyphicon glyphicon-phone\"></span></p>\r\n  </footer>\r\n</div>"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  creatcompany works!\r\n</p>\r\n  <form (submit)=\"Createcopmany()\"  >\r\n    <fieldset>\r\n      <label for=\"name\">Company Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"CompanyName\"  id=\"name\" name=\"user_name\" >\r\n\r\n\r\n      <label for=\"name\">Company Address</label>\r\n      <input type=\"text\" [(ngModel)]=\"address\"  id=\"name\" name=\"user_name\" >\r\n\r\n      <label for=\"name\">Company telephone</label>\r\n      <input type=\"text\" [(ngModel)]=\"phoneNumber\"  id=\"name\" name=\"user_name\" >\r\n\r\n      <label for=\"name\">Plese Enter the code sent to you by your mail</label>\r\n      <input type=\"text\" [(ngModel)]=\"code\"  id=\"name\" name=\"user_name\" >\r\n      \r\n   \r\n    </fieldset>\r\n    <button type=\"submit\" value=\"Submit\" >Create Company</button>\r\n\r\n  </form>"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\r\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"img\">\r\n  <div class = \"well\">\r\n    <div id=\"wrapper\">\r\n      <h1 style=\"color: white\">Suggestion and  Vote for Food <span style=\"color: #2fad0c\" class=\"glyphicon glyphicon-apple\"></span></h1>\r\n      <form (submit)=\"addFood()\">\r\n\r\n        <div class=\"col-2\">\r\n          <label>\r\n            Add Suggestion\r\n            <input placeholder=\"food name\" id=\"phone\" [(ngModel)]=\"dishName\" name=\"phone\" tabindex=\"3\">\r\n          </label>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <label>\r\n            type\r\n            <input placeholder=\"the faverot type\" id=\"email\" [(ngModel)]=\"type\" name=\"email\" tabindex=\"4\">\r\n          </label>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <label>\r\n            Add Suggestion\r\n            <input placeholder=\"food name\" id=\"phone\" [(ngModel)]=\"dishName\" name=\"phone\" tabindex=\"3\" required>\r\n          </label>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <label>\r\n            type\r\n            <input placeholder=\"the faverot type\" id=\"email\" [(ngModel)]=\"type\" name=\"email\" tabindex=\"4\">\r\n          </label>\r\n        </div>\r\n        \r\n        <div class=\"col-4\">\r\n          <label>\r\n            foodtime\r\n            <select  (change)=\"onChange($event.target.value)\">\r\n              <option *ngFor=\"let i of foodTimes\"> {{i}} </option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <label>\r\n            foodtime\r\n            <select  (change)=\"onChange($event.target.value)\">\r\n              <option *ngFor=\"let i of foodTimes\"> {{i}} </option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"col-xs-12 col-submit\">\r\n          <button class=\"submitbtn\">Submit Form</button>\r\n        </div>\r\n      </form>\r\n\r\n\r\n      <div id=\"pricing-table\" class=\"clear\" >\r\n        <div class=\"plan\" style=\"margin: 10px\"   *ngFor=\"let food of foods\">\r\n          <h3>Vote<span>{{ food.votes }}</span></h3>\r\n          <a class=\"signup\" (click)=\"Votee(food.dishName)\" ><span  class=\"glyphicon glyphicon-heart\"></span></a>         \r\n          <ul>\r\n            <li><b><strong >{{ food.dishName }}</strong></b></li>\r\n            <li>{{ food.foodtime }}</li>\r\n            <li>{{ food.type }}</li>\r\n          </ul> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<div class =\"bbdd\">\r\n  <nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a routerLink=\"/aboutus\">About US <span class=\"glyphicon glyphicon-hand-left\"> </span></a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/signin\">Log In <span class=\"glyphicon glyphicon-log-in\">  </span></a>\r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/signup\"> Sign up <span class=\"glyphicon glyphicon-user\"> </span></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <a name=\"about\"></a>\r\n  <div class=\"intro-header\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"intro-message\">\r\n            <h1>Company Manager Website</h1>\r\n            <h2>Best Choice <span class=\" glyphicon glyphicon-check\"></span></h2>\r\n            <h3>Manage your company easily and simpily</h3>\r\n            <hr class=\"intro-divider\">\r\n            <ul class=\"list-inline intro-social-buttons\">\r\n              <li>\r\n                <a href=\"https://github.com/Berzzerk/Fcompany\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-github fa-fw\"></i> <span class=\"network-name\">Github</span></a>\r\n              </li>\r\n              <li>\r\n                <a href=\"https://www.linkedin.com/uas/login\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-linkedin fa-fw\"></i> <span class=\"network-name\">Linkedin</span></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br><br><br>\r\n  <section class=\"success\" id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 text-center\">\r\n          <h2>Company Manager</h2><br>\r\n          <hr class=\"star-light\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-lg-offset-2\">\r\n          <p>The most important benefit of our website is that the referrals that you get through networking are normally high quality and most of the time are even pre-qualified for you.</p>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n          <p>You can then follow up on these referrals/leads and turn them into clients. So you are getting much higher quality leads from business networking than other forms of marketing.</p>\r\n        </div>\r\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\"> \r\n          <a href=\"http://amazingbusiness.com/top-9-benefits-of-business-networking/\" class=\"btn btn-lg btn-outline\">\r\n            <i class=\"fa fa-book fa-fw\"></i> Read more\r\n          </a>\r\n        </div>\r\n\r\n      </div>\r\n    </div> \r\n  </section>\r\n\r\n  <a  name=\"services\"></a>\r\n  <div class=\"content-section-a\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-sm-6\">\r\n          <hr class=\"section-heading-spacer\">\r\n          <div class=\"clearfix\"></div>\r\n          <h2 class=\"section-heading\">Company Manager Task Organizing<br><h2>Better Task Management</h2></h2>\r\n          <p class=\"lead\">More complicated tasks typically require a variety of different steps. This can make it increasingly difficult for employees to remember all of the steps they must carry out in order to complete a process. </p>\r\n        </div>\r\n        <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\r\n          <img class=\"img-responsive\" src=\"../assets/img/task-management.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-section-b\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\r\n          <hr class=\"section-heading-spacer\">\r\n          <div class=\"clearfix\"></div>\r\n          <h2 class=\"section-heading\">Join And Set Meetings<br>Using Schedule Mangaer</h2>\r\n          <p class=\"lead\">Board meetings are a bit different than an everyday meeting as they are attended by volunteers who may not be familiar with the day to day operational details of your organization; generally board members need to keep their discussion centered on high level strategy, policy, and financial overviews.</p>\r\n        </div>\r\n        <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\r\n          <img class=\"img-responsive\" src=\"../assets/img/meeting.jpg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"content-section-a\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-sm-6\">\r\n          <hr class=\"section-heading-spacer\">\r\n          <div class=\"clearfix\"></div>\r\n          <h2 class=\"section-heading\">Effective Scheduling<br></h2>\r\n          <p class=\"lead\">It's all too easy for this to happen. Faced with endless meetings, frequent interruptions, and urgent last-minute tasks, you can easily be busy all day without making any progress on high-priority projects and goals.</p>\r\n        </div>\r\n        <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\r\n          <img class=\"img-responsive\" src=\"../../assets/img/schedule.jpg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content-section-b\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\r\n          <hr class=\"section-heading-spacer\">\r\n          <div class=\"clearfix\"></div>\r\n          <h2 class=\"section-heading\">Meals Suggestions<br></h2>\r\n          <p class=\"lead\">One of the biggest issues with phone conversations is that misunderstandings can happen quite easily. Usually due to the noise, either in the restaurant or on the other end of the line, all it takes is one mistake to compromise an order and frustrate a customer. With our website, all preferences are specified directly by the customer.</p>\r\n        </div>\r\n        <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\r\n          <img class=\"img-responsive\" src=\"../../assets/img/company-meals.jpg\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <a  name=\"contact\"></a>\r\n  <div class=\"banner\">\r\n\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <h2>Register Now</h2>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <ul class=\"list-inline banner-social-buttons\">\r\n            <li>\r\n              <a routerLink=\"/signin\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Login <span class=\"glyphicon glyphicon-log-in\">  </span></span></a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/signup\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Register <span class=\"glyphicon glyphicon-user\"> </span></span></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <footer class=\"container-fluid text-center\">\r\n      <i>Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></i><br>\r\n      <i>Our Address: Amman, Jordan, Business Park <span class=\"glyphicon glyphicon-globe\"></span></i><br>\r\n      <i>Contact Us On <span class=\"glyphicon glyphicon-hand-right\"> </span> 07345364534 <span class=\"glyphicon glyphicon-phone\"></span></i><br>\r\n      <i class=\"copyright text-muted small\">Copyright &copy; Berzzerk.com, 2017-RBK <span class=\"glyphicon glyphicon-heart\"></span></i><br>\r\n    </footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\r\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"showSch = !showSch\"> Show Me MY Schedule <span class=\"glyphicon glyphicon-send\"> </span></button><br><br>\r\n<button type=\"button\" class=\"btn btn-info\" id=\"add\" (click)=\"div_show()\"> ADD <span class=\"glyphicon glyphicon-send\"></span></button><br>\r\n\r\n<div id=\"aya\" style=\"display: none;\">\r\n  <form class=\"well form-horizontal\" (submit)=\"add()\">\r\n    <fieldset>\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Title</label>  \r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\r\n            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\">\r\n          </div>\r\n        </div>\r\n      </div><br>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Discription</label>  \r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\r\n            <textarea rows=\"3\" cols=\"20\" [(ngModel)]=\"description\" name=\"description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Date</label>  \r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\r\n            <input  type=\"date\" [(ngModel)]=\"date\" name=\"Date\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">Start Time</label>  \r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\r\n            <input  type=\"time\" [(ngModel)]=\"starttime\" name=\"starttime\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\">End Time</label>  \r\n        <div class=\"col-md-4 inputGroupContainer\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\r\n            <input  type=\"time\" [(ngModel)]=\"endtime\" name=\"endtime\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\"></label>\r\n        <div class=\"col-md-4\">\r\n          <button type=\"submit\" class=\"btn btn-info \" (click)=\"div_hide()\"> SUBMIT</button></div>\r\n        </div>  \r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n  \r\n  <div *ngIf=\"showSch\" class=\"todos\" style=\"padding: 15px\">\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Title</th>\r\n          <th>Description</th>\r\n          <th>Date</th>\r\n          <th>Start Time - End Time</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let sch of todos\">\r\n          <td><strong >{{ sch.title }}</strong></td>\r\n          <td>{{ sch.description }}</td>\r\n          <td>{{ sch.date}}</td>\r\n          <td>{{ sch.starttime }} - {{ sch.endtime }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"img\">\r\n  </div>"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<form (submit)=\"onSubmit()\">\r\n\t<h1>Sign In</h1>\r\n\t<fieldset>\r\n\t\t<label for=\"name\">Name:</label>\r\n\t\t<input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\r\n\t\t<label for=\"password\">Password:</label>\r\n\t\t<input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\r\n\t</fieldset>\r\n\t<button type=\"submit\" value=\"Submit\" >Submit</button>\r\n</form>"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n\r\n<h1>Sign Up</h1>\r\n<button *ngIf=\"but1flag\" (click)=\"compflag()\">company account</button>\r\n<button *ngIf=\"but2flag\" (click)=\"empflag()\">employee account</button>\r\n<div *ngIf=\"comflag\">\r\n  <form (submit)=\"onRegisterAdmin()\"  >\r\n    <fieldset>\r\n     \r\n\r\n      <label for=\"name\">Admin Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\r\n\r\n      <label for=\"name\">Admon Job Role</label>\r\n     <!-- <select [(ngModel)]=\"jobrole\"> \r\n        <option *ngFor=\"#n of jobroles\" [attr.value]=\"n\">{{n}}</option>\r\n      </select> -->\r\n      <select (change)=\"onChange($event.target.value)\">\r\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\r\n      </select>\r\n      <!-- <input type=\"text\" [(ngModel)]=\"jobrole\"  id=\"name\" name=\"user_name\" > -->\r\n\r\n      <label for=\"mail\">Email</label>\r\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\r\n\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\r\n    </fieldset>\r\n    <button type=\"submit\" value=\"Submit\" >Next</button>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"emflag\">\r\n\r\n  <form (submit)=\"onRegisterUser()\"  >\r\n    <fieldset>\r\n      <label for=\"name\">Name:</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\r\n\r\n      <label for=\"name\">Job Role</label>\r\n      <select (change)=\"onChange($event.target.value)\">\r\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\r\n      </select>\r\n\r\n      <label for=\"mail\">Email:</label>\r\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\r\n\r\n      <label for=\"password\">Password:</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\r\n      \r\n      <label for=\"code\">Code:</label>\r\n      <input type=\"code\" [(ngModel)]=\"code\" id=\"code\" name=\"user_code\" >\r\n\r\n    </fieldset>\r\n    <button type=\"submit\" value=\"Submit\" >Sign Up</button>\r\n\r\n  </form>\r\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\r\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<div class=\"panel-heading\" style=\"background-color: #252626\"> \r\n  <h3 class=\"panel-title\" style=\"color: white;text-align: center;padding: 15px;font-size: 35px\">Tasks\r\n   <i style=\"padding: 15px;color:#3a47a3\" class=\"glyphicon glyphicon-tasks\"></i>\r\n </h3>\r\n</div>\r\n\r\n<div class=\"todos\" style=\"padding: 15px\">\r\n\r\n  <!-- *** -->\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>Task name</th>\r\n        <th>Date</th>\r\n        <th>Assign to</th>\r\n        <th>Description</th>\r\n        <th>Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let todo of todos\">\r\n        <td><strong >{{ todo.taskName }}</strong></td>\r\n        <td>{{ todo.updated }}</td>\r\n        <td>{{ todo.assignTo }}</td>\r\n        <td>{{ todo.description }}</td>\r\n        <td (click)=\"deleteTodo(i)\" class=\"delete-icon\" style=\"color: red\">[X]</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n<!--  ********************************   -->\r\n\r\n<input class=\"btn btn-danger\" type=\"submit\" value=\"add New task\" style=\"margin-left: 500px;\" (click)=\"div_show()\" >\r\n\r\n<div id=\"abc\">\r\n\r\n  <form class=\"well form-horizontal\" (submit)=\"addTodo()\">\r\n    <fieldset>\r\n\r\n     <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\">Task</label>  \r\n      <div class=\"col-md-4 inputGroupContainer\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\r\n          <input type=\"text\" [(ngModel)]=\"newTodo\" name=\"newTodo\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\">Discription</label>  \r\n      <div class=\"col-md-4 inputGroupContainer\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\r\n          <textarea rows=\"3\" cols=\"50\" [(ngModel)]=\"Discription\" name=\"Discription\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    \r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\">Date </label>  \r\n      <div class=\"col-md-4 inputGroupContainer\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\r\n          <input  type=\"date\" name=\"\" [(ngModel)]=\"Date\" name=\"Date\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\">Assign to</label>  \r\n      <div class=\"col-md-4 inputGroupContainer\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n          <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\r\n            <option  *ngFor=\"let i of Assigns\">{{i}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\"></label>\r\n      <div class=\"col-md-4\">\r\n        <button  class=\"btn btn-lg btn-primary btn-block\" (click)=\"div_hide()\"> SUBMIT <span class=\"glyphicon glyphicon-send\"></span></button></div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"col-md-4 control-label\"></label>\r\n        <div class=\"col-md-4\">\r\n          <button class=\"btn btn-lg btn-danger btn-block\" (click)=\"div_hide()\">close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </fieldset>\r\n\r\n  </form>\r\n  \r\n</div> <!-- **********************end div popup***************** -->\r\n\r\n<style type=\"text/css\">\r\n  #abc {\r\n    width:100%;\r\n    height:100%;\r\n    opacity:.95;\r\n    top:0;\r\n    left:0;\r\n    display:none;\r\n    position:fixed;\r\n    background-color:#313131;\r\n    overflow:auto\r\n  }\r\n</style>\r\n\r\n"

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.e1115afea56dcaf0c273.png";

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(364);


/***/ })

},[616]);
//# sourceMappingURL=main.bundle.js.map