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

/***/ 29:
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
        if (localStorage.getItem('id_token').length) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(613);
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

/***/ 317:
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

/***/ 318:
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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamingService = (function () {
    function GamingService() {
    }
    GamingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GamingService);
    return GamingService;
}());
//# sourceMappingURL=gaming.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(496);




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
            template: __webpack_require__(585),
            styles: [__webpack_require__(567)]
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
            template: __webpack_require__(586),
            styles: [__webpack_require__(568)]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_page_main_page_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_signup_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aboutus_aboutus_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_company_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__task_task_component__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__creatcompany_creatcompany_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__schedule_schedule_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__food_food_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_company_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_schedule_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_task_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_food_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__gaming_gaming_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_gaming_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__chat_chat_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__brain_storming_brain_storming_component__ = __webpack_require__(484);
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
                __WEBPACK_IMPORTED_MODULE_25__gaming_gaming_component__["a" /* GamingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_28__brain_storming_brain_storming_component__["a" /* BrainStormingComponent */]
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
                    { path: 'brainStorming', component: __WEBPACK_IMPORTED_MODULE_28__brain_storming_brain_storming_component__["a" /* BrainStormingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'gaming', component: __WEBPACK_IMPORTED_MODULE_25__gaming_gaming_component__["a" /* GamingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_15__schedule_schedule_component__["a" /* ScheduleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'food', component: __WEBPACK_IMPORTED_MODULE_16__food_food_component__["a" /* FoodComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_17__chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */]] }
                ]),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guard_guard_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__services_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_19__services_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_20__services_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_24__services_food_service__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_27__chat_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_26__services_gaming_service__["a" /* GamingService */]],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrainStormingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrainStormingComponent = (function () {
    function BrainStormingComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    BrainStormingComponent.prototype.ngOnInit = function () {
    };
    BrainStormingComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    BrainStormingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brain-storming',
            template: __webpack_require__(587),
            styles: [__webpack_require__(569)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], BrainStormingComponent);
    return BrainStormingComponent;
    var _a, _b;
}());
//# sourceMappingURL=brain-storming.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(316);
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
            template: __webpack_require__(588),
            styles: [__webpack_require__(570)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_company_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
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
        this.obj = {};
        this.companyService.getCompany(user).subscribe(function (data) {
            _this.obj = data;
        });
    };
    CompanyComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(589),
            styles: [__webpack_require__(571)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_company_service__["a" /* CompanyService */]) === 'function' && _c) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
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
            template: __webpack_require__(590),
            styles: [__webpack_require__(572)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreatcompanyComponent);
    return CreatcompanyComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=creatcompany.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_food_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(29);
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
        this.foodservice.addvote(voteObj).subscribe(function (data) {
            if (data) {
                _this.flashMessage.show('you vote m***F***', { cssClass: 'alert-success', timeout: 3000 });
                _this.foodservice.getFood(localStorage.getItem("user-id")).subscribe(function (data) {
                    _this.foods = data;
                });
            }
        });
    };
    FoodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(591),
            styles: [__webpack_require__(573)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_food_service__["a" /* FoodService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], FoodComponent);
    return FoodComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=food.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gaming_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamingComponent = (function () {
    function GamingComponent(flashMessage, gamingservice, router) {
        this.flashMessage = flashMessage;
        this.gamingservice = gamingservice;
        this.router = router;
        this.game = false;
        this.show = false;
    }
    GamingComponent.prototype.ngOnInit = function () {
    };
    GamingComponent.prototype.div_hide = function () {
        document.getElementById('aya').style.display = "none";
        this.game = !this.game;
    };
    //Function To Display Popup
    GamingComponent.prototype.div_show = function () {
        document.getElementById('back').style.display = "block";
        document.getElementById('aya').style.display = "block";
        this.show = true;
    };
    GamingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gaming',
            template: __webpack_require__(592),
            styles: [__webpack_require__(574)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_gaming_service__["a" /* GamingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gaming_service__["a" /* GamingService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], GamingComponent);
    return GamingComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=gaming.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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

/***/ 491:
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
            template: __webpack_require__(593),
            styles: [__webpack_require__(575)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainPageComponent);
    return MainPageComponent;
}());
//# sourceMappingURL=main-page.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(29);
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
            template: __webpack_require__(594),
            styles: [__webpack_require__(576)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_schedule_service__["a" /* ScheduleService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ScheduleComponent);
    return ScheduleComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
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
        // Required Fields
        // if(!this.validateService.validateSignin(user)){
        // 	this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 9000});
        // 	return false;
        // }
        //Register user
        this.authService.signin(user).subscribe(function (data) {
            if (data.token) {
                _this.flashMessage.show('Welcome ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.userid, data.username);
                _this.router.navigate(['/company']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(595),
            styles: [__webpack_require__(577)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(19);
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
        this.jobrole = newValue;
    };
    SignupComponent.prototype.compflag = function () {
        this.comflag = !this.comflag;
        this.but2flag = !this.but2flag;
    };
    SignupComponent.prototype.empflag = function () {
        this.emflag = !this.emflag;
        this.but1flag = !this.but1flag;
    };
    SignupComponent.prototype.onRegisterUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            email: this.email,
            jobrole: this.jobrole,
            password: this.password,
            code: this.code,
            UserType: "employee"
        };
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
            if (data.token) {
                _this.flashMessage.show('You are now registered ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data._id, data.username);
                _this.router.navigate(['/company']);
            }
            else {
                _this.flashMessage.show("User already exist!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent.prototype.onRegisterAdmin = function () {
        var _this = this;
        var user = {
            username: this.username,
            email: this.email,
            jobrole: this.jobrole,
            password: this.password,
            UserType: "Admin"
        };
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
            if (data.token) {
                _this.flashMessage.show('You are now registered ', { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.AdminId, data.username);
                _this.router.navigate(['/creatcompany']);
            }
            else {
                _this.flashMessage.show("User already exist!", { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/signup']);
            }
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(596),
            styles: [__webpack_require__(578)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(29);
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
        this.Assign = this.Assigns[0];
        this.taskservice.getTask(localStorage.getItem("user-id")).subscribe(function (data) {
            _this.todos = data;
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
            template: __webpack_require__(597),
            styles: [__webpack_require__(579)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], TaskComponent);
    return TaskComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ 496:
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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".timeline {\r\n  position: relative;\r\n  padding:4px 0 0 0;\r\n  margin-top:22px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline>li:nth-child(even) {\r\n  position: relative;\r\n  margin-bottom: 50px;\r\n  height: 180px;\r\n  right:-100px;\r\n}\r\n\r\n.timeline>li:nth-child(odd) {\r\n  position: relative;\r\n  margin-bottom: 50px;\r\n  height: 180px;\r\n  left:-100px;\r\n}\r\n\r\n.timeline>li:before,\r\n.timeline>li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline>li:after {\r\n  clear: both;\r\n  min-height: 170px;\r\n}\r\n\r\n.timeline > li .timeline-panel {\r\n  position: relative;\r\n  float: left;\r\n  width: 41%;\r\n  padding: 0 20px 20px 30px;\r\n  text-align: right;\r\n}\r\n\r\n.timeline>li .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline>li .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline>li .timeline-image {\r\n  z-index: 100;\r\n  position: absolute;\r\n  left: 50%;\r\n  border: 7px solid #3b5998;\r\n  border-radius: 100%;\r\n  background-color: #3b5998;\r\n  box-shadow: 0 0 5px #4582ec;\r\n  width: 200px;\r\n  height: 200px;\r\n  margin-left: -100px;\r\n}\r\n\r\n.timeline>li .timeline-image h4 {\r\n  margin-top: 12px;\r\n  font-size: 10px;\r\n  line-height: 14px;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n  float: right;\r\n  padding: 0 30px 20px 20px;\r\n  text-align: left;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline>li.timeline-inverted>.timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline>li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline .timeline-heading h4 {\r\n  margin-top:22px;\r\n  margin-bottom: 4px;\r\n  padding:0;\r\n  color: #b3b3b3;\r\n}\r\n\r\n.timeline .timeline-heading h4.subheading {\r\n  margin:0;\r\n  padding:0;\r\n  text-transform: none;\r\n  font-size:18px;\r\n  color:#333333;\r\n}\r\n\r\n.timeline .timeline-body>p,\r\n.timeline .timeline-body>ul {\r\n  margin-bottom: 0;\r\n  color:#808080;\r\n}\r\n/*Style for even div.line*/\r\n.timeline>li:nth-child(odd) .line:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 0;\r\n  left: 690px;\r\n  width: 4px;\r\n  height:340px;\r\n  background-color: #3b5998; /* IE 9 */\r\n  -webkit-transform: rotate(-44deg); /* Safari */\r\n  transform: rotate(-44deg);\r\n  box-shadow: 0 0 5px #4582ec;\r\n}\r\n/*Style for odd div.line*/\r\n.timeline>li:nth-child(even) .line:before  {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 0;\r\n  left: 450px;\r\n  width: 4px;\r\n  height:340px;\r\n  background-color: #3b5998; /* IE 9 */\r\n  -webkit-transform: rotate(44deg); /* Safari */\r\n  transform: rotate(44deg);\r\n  box-shadow: 0 0 5px #4582ec;\r\n}\r\n/* Medium Devices, .visible-md-* */\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n  .timeline > li:nth-child(even) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    right: 0px;\r\n  }\r\n  .timeline > li:nth-child(odd) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    left: 0px;\r\n  }\r\n  .timeline>li:nth-child(even) .timeline-image {\r\n    left: 0;\r\n    margin-left: 0px;\r\n  }\r\n  .timeline>li:nth-child(odd) .timeline-image {\r\n    left: 690px;\r\n    margin-left: 0px;\r\n  }\r\n  .timeline > li:nth-child(even) .timeline-panel {\r\n    width: 76%;\r\n    padding: 0 0 20px 0px;\r\n    text-align: left;\r\n  }\r\n  .timeline > li:nth-child(odd) .timeline-panel {\r\n    width: 70%;\r\n    padding: 0 0 20px 0px;\r\n    text-align: right;\r\n  }\r\n  .timeline > li .line {\r\n    display: none;\r\n  }\r\n}\r\n/* Small Devices, Tablets */\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .timeline > li:nth-child(even) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    right: 0px;\r\n  }\r\n  .timeline > li:nth-child(odd) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    left: 0px;\r\n  }\r\n  .timeline>li:nth-child(even) .timeline-image {\r\n    left: 0;\r\n    margin-left: 0px;\r\n  }\r\n  .timeline>li:nth-child(odd) .timeline-image {\r\n    left: 520px;\r\n    margin-left: 0px;\r\n  }\r\n  .timeline > li:nth-child(even) .timeline-panel {\r\n    width: 70%;\r\n    padding: 0 0 20px 0px;\r\n    text-align: left;\r\n  }\r\n  .timeline > li:nth-child(odd) .timeline-panel {\r\n    width: 70%;\r\n    padding: 0 0 20px 0px;\r\n    text-align: right;\r\n  }\r\n  .timeline > li .line {\r\n    display: none;\r\n  }\r\n}\r\n/* Custom, iPhone Retina */\r\n@media only screen and (max-width: 767px) {\r\n  .timeline > li:nth-child(even) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    right: 0px;\r\n  }\r\n  .timeline > li:nth-child(odd) {\r\n    margin-bottom: 0px;\r\n    min-height: 0px;\r\n    left: 0px;\r\n  }\r\n  .timeline>li .timeline-image {\r\n    position: static;\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-bottom:0px;\r\n  }\r\n  .timeline>li:nth-child(even) .timeline-image {\r\n    left: 0;\r\n    margin-left: 0;\r\n  }\r\n  .timeline>li:nth-child(odd) .timeline-image {\r\n    float:right;\r\n    left: 0px;\r\n    margin-left:0;\r\n  }\r\n  .timeline > li:nth-child(even) .timeline-panel {\r\n    width: 100%;\r\n    padding: 0 0 20px 14px;\r\n  }\r\n  .timeline > li:nth-child(odd) .timeline-panel {\r\n    width: 100%;\r\n    padding: 0 14px 20px 0px;\r\n  }\r\n  .timeline > li .line {\r\n    display: none;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'Nunito', sans-serif;\r\n  color: #384047;\r\n}\r\nform {\r\n  max-width: 300px;\r\n  margin: 10px auto;\r\n  padding: 10px 20px;\r\n  background: #f4f7f8;\r\n  border-radius: 8px;\r\n}\r\nh1 {\r\n  margin: 0 0 30px 0;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=\"text\"],\r\n\r\nselect {\r\n  background: rgba(255,255,255,0.1);\r\n  border: none;\r\n  font-size: 16px;\r\n  height: auto;\r\n  margin: 0;\r\n  outline: 0;\r\n  padding: 15px;\r\n  width: 100%;\r\n  background-color: #e8eeef;\r\n  color: #8a97a0;\r\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n\r\nbutton {\r\n  padding: 19px 39px 18px 39px;\r\n  color: #FFF;\r\n  background-color: #1b1a1c;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  font-style: normal;\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  border: 1px solid #1b1a1c;\r\n  border-width: 1px 1px 3px;\r\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\r\n  margin-bottom: 10px;\r\n}\r\n\r\nfieldset {\r\n  margin-bottom: 50px;\r\n  border: none;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\nlabel.light {\r\n  font-weight: 300;\r\n  display: inline;\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  form {\r\n    max-width: 800px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "* { margin: 0; padding: 0; box-sizing: border-box; }\nform { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }\nform input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }\nform button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }\n#messages { list-style-type: none; margin: 0; padding: 0; }\n#messages #item { padding: 5px 10px; }\n#messages #item { background: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, " /* Remove the navbar's default rounded borders and increase the bottom margin */ \n .navbar {\n  margin-bottom: 50px;\n  border-radius: 0;\n}\n\n/* Remove the jumbotron's default bottom margin */ \n.jumbotron {\n  margin-bottom: 0;\n}\n\n/* Add a gray background color and some padding to the footer */\nfooter {\n  background-color: #f2f2f2;\n  padding: 25px;\n}\n\n.panel-heading {\n  color: #00008B;\n  font-size: 17px;\n}\n\n.body {\n  background-image: url(" + __webpack_require__(618) + ");\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\nform {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\nh1 {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n\n\nselect {\n  background: rgba(255,255,255,0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n  margin-bottom: 30px;\n}\n\n\nbutton {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4eb9bf;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #4eb9bf;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n}\nlabel.light {\n  font-weight: 300;\n  display: inline;\n}\n\n@media screen and (min-width: 480px) {\n  form {\n    max-width: 480px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Laila:400,700);", ""]);

// module
exports.push([module.i, ".switchery{background-color:#fff;border:1px solid #dfdfdf;border-radius:20px;cursor:pointer;display:inline-block;height:30px;position:relative;vertical-align:middle;width:50px;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;box-sizing:content-box;background-clip:content-box}.switchery>small{background:#fff;border-radius:100%;box-shadow:0 1px 3px rgba(0,0,0,0.4);height:30px;position:absolute;top:0;width:30px}.switchery-small{border-radius:20px;height:20px;width:33px}.switchery-small>small{height:20px;width:20px}.switchery-large{border-radius:40px;height:40px;width:66px}.switchery-large>small{height:40px;width:40px}\n\nbr { display: block; line-height: 1.6em; } \n\ninput, textarea { \n  -webkit-font-smoothing: antialiased;\n  outline: none; \n}\n\nstrong, b { font-weight: bold; }\nem, i { font-style: italic; }\n\n/** form field **/\nform {\n  display: block;\n  margin: 30px;\n  overflow: hidden;\n  background: #fff;\n  border: 1px solid #e4e4e4;\n  border-radius: 5px;\n  font-size: 0;\n}\n\nform > div > label {\n  display: block;\n  padding: 20px 20px 10px;\n  vertical-align: top;\n  font-size: 13px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #939393;\n  cursor: pointer;\n}\nform > div.switch > label {\n  padding: 16px 20px 13px;\n}\n\n.col-2, .col-3, .col-4 { \n  border-bottom: 1px solid #e4e4e4;\n}\n\nform > div > .col-4 {\n  height: 86px;\n}\n\nlabel > input {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 27px;\n  line-height: 27px;\n  margin: 5px -5px 0;\n  padding: 7px 5px 3px;\n  border: none;\n  outline: none;\n  color: #555;\n  font-family: 'Helvetica Neue', Arial, sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  opacity: .6;\n  -webkit-transition:all linear .3s;\n  transition: all linear .3s;\n}\n\n.col-submit {\n  text-align: center;\n  padding: 20px;\n}\n\nlabel > select {\n  display: block;\n  width: 100%;\n  padding: 0;\n  color: #555;\n  margin: 16px 0 6px;\n  font-weight: 500;\n  background: transparent;\n  border: none;\n  outline: none;\n  font-family: 'Helvetica Neue', Arial, sans-serif;\n  font-size: 14px;\n  opacity: .4;\n  -webkit-transition:all linear .3s;\n  transition: all linear .3s;\n}\n\nlabel > input:focus, label > select:focus {\n  opacity: 1;\n}\n\n\n\n/** button design based on http://codepen.io/guvootes/pen/eyDAb **/\n.submitbtn {\n  width: 100%;\n  height: 35px;\n  border: none;\n  border-radius: 4px;\n  margin: 0 0 15px 0;\n  font-size: 14px;\n  color: #fff;\n  font-weight: bold;\n  text-shadow: 1px 1px 0 rgba(0,0,0,0.3);\n  overflow: hidden;\n  outline: none;\n}\n\nbutton.submitbtn {\n  background-image: -webkit-linear-gradient(#31362b, #706d6b);\n  background-image: linear-gradient(#31362b, #706d6b);\n  border-bottom: 1px solid #648c3a;\n  cursor: pointer;\n  color: #fff;\n}\nbutton.submitbtn:hover {\n  background-image: -webkit-linear-gradient(#706d6b, #31362b);\n  background-image: linear-gradient(#706d6b, #31362b);\n}\nbutton.submitbtn:active {\n  height: 34px;\n  border-bottom: 0;\n  margin: 1px 0 0 0;\n  background-image: -webkit-linear-gradient(#b7b586, #31362b);\n  background-image: linear-gradient(#b7b586, #31362b);\n  box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.3);\n}\n\n\n/** responsive design **/\n@media(min-width: 850px){\n  form > div { display: inline-block; }\n  .col-submit { display: block; }\n  \n  .col-2, .col-3, .col-4 { box-shadow: 1px 1px #e4e4e4; border: none; }\n  \n  .col-2 { width: 50% }\n  .col-3 { width: 33.3333333333% }\n  .col-4 { width: 25% }\n  \n  .col-submit button { width: 30%; margin: 0 auto; }\n}\n\n/*****************************8*/\n\n#pricing-table {\n  margin: 100px auto;\n  text-align: center;\n  width: 892px; /* total computed width = 222 x 3 + 226 */\n}\n\n#pricing-table .plan {\n  font: 12px 'Lucida Sans', 'trebuchet MS', Arial, Helvetica;\n  text-shadow: 0 1px rgba(255,255,255,.8);        \n  background: #fff;      \n  border: 1px solid #ddd;\n  color: #333;\n  padding: 20px;\n  width: 180px; /* plan width = 180 + 20 + 20 + 1 + 1 = 222px */      \n  float: left;\n  position: relative;\n}\n\n#pricing-table #most-popular {\n  z-index: 2;\n  top: -13px;\n  border-width: 3px;\n  padding: 30px 20px;\n  border-radius: 5px;\n  box-shadow: 20px 0 10px -10px rgba(0, 0, 0, .15), -20px 0 10px -10px rgba(0, 0, 0, .15);    \n}\n\n#pricing-table .plan:nth-child(1) {\n  border-radius: 5px 0 0 5px;        \n}\n\n#pricing-table .plan:nth-child(4) {\n  border-radius: 0 5px 5px 0;        \n}\n\n/* --------------- */ \n\n#pricing-table h3 {\n  font-size: 20px;\n  font-weight: normal;\n  padding: 20px;\n  margin: -20px -20px 50px -20px;\n  background-color: #eee;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));    \n  background-image: -webkit-linear-gradient(#fff, #eee);\n  background-image: linear-gradient(#fff, #eee);\n}\n\n#pricing-table #most-popular h3 {\n  background-color: #ddd;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));    \n  background-image: -webkit-linear-gradient(#eee, #ddd);\n  background-image: linear-gradient(#eee, #ddd);\n  margin-top: -30px;\n  padding-top: 30px;\n  border-radius: 5px 5px 0 0;     \n}\n\n#pricing-table .plan:nth-child(1) h3 {\n  border-radius: 5px 0 0 0;       \n}\n\n#pricing-table .plan:nth-child(4) h3 {\n  border-radius: 0 5px 0 0;       \n} \n\n#pricing-table h3 span {\n  display: block;\n  font: bold 25px/100px Georgia, Serif;\n  color: #777;\n  background: #fff;\n  border: 5px solid #fff;\n  height: 100px;\n  width: 100px;\n  margin: 10px auto -65px;\n  border-radius: 100px;\n  box-shadow: 0 5px 20px #ddd inset, 0 3px 0 #999 inset;\n}\n\n/* --------------- */\n\n#pricing-table ul {\n  margin: 20px 0 0 0;\n  padding: 0;\n  list-style: none;\n}\n\n#pricing-table li {\n  border-top: 1px solid #ddd;\n  padding: 10px 0;\n}\n\n/* --------------- */\n  \n#pricing-table .signup {\n  position: relative;\n  padding: 8px 20px;\n  margin: 20px 0 0 0;  \n  color: #fff;\n  font: bold 14px Arial, Helvetica;\n  text-transform: uppercase;\n  text-decoration: none;\n  display: inline-block;       \n  background-color: #72ce3f;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#382c01), to(#281616));    \n  background-image: -webkit-linear-gradient(#382c01, #281616);\n  background-image: linear-gradient(#382c01, #281616);\n  border-radius: 3px;     \n  text-shadow: 0 1px 0 rgba(0,0,0,.3);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 2px 0 rgba(0, 0, 0, .7);\n}\n\n#pricing-table .signup:hover {\n  background-color: #ff0000;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#820a0a), to(#820a0a));      \n  background-image: -webkit-linear-gradient(#ff0000, #820a0a);\n  background-image: linear-gradient(#ff0000, #820a0a); \n}\n\n#pricing-table .signup:active, #pricing-table .signup:focus {\n  background: #ff0000;       \n  top: 2px;\n  box-shadow: 0 0 3px rgba(0, 0, 0, .7) inset; \n}\n\n/* --------------- */\n\n.clear:before, .clear:after {\n  content:\"\";\n  display:table\n}\n\n.clear:after {\n  clear:both\n}\n\n.clear {\n  zoom:1\n}\n\n\n.img{\n    background: #253340 url('/assets/img/food.jpg') no-repeat 50% top;\n    position: fixed; \n  top: 0; \n  left: 0; \n  min-width: 100%;\n  min-height: 100%;\n  background-size: cover;\n}\n\n.well {\n   background-color: rgba(245, 245, 245, 0.3);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "button {\n\tmargin-left : 160px; \n\tbackground-color: black; \n}\n\n\n.img{ \n  background: url(https://www.walldevil.com/wallpapers/a71/mouse-mickey-desktop-cartoon-wallpaper-wallpapers-disney-minnie-danald-daisy-goofy-blue-dark-backgound-image.jpg) no-repeat center center; \n  position: fixed; \n  top: 0; \n  left: 0; \n  min-width: 100%;\n  min-height: 100%;\n\n}\n\nimg{\n\twidth : 250px;\n\theight: 250px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "section.success {\n  background: #485451;\n  color: white;\n}\np {\n  font-size: 20px;\n}\np.small {\n  font-size: 16px;\n}\n.btn-outline {\n  color: white;\n  font-size: 20px;\n  border: solid 2px white;\n  background: transparent;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  margin-top: 15px;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active,\n.btn-outline.active {\n  color: #485451;\n  background: white;\n  border: solid 2px white;\n}\n\na,\na:hover,\na:focus,\na:active,\na.active {\n  color: #485451;\n}\n\nbody {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  overflow-x: hidden;\n}\n\nhr.star-light,\nhr.star-primary {\n  padding: 0;\n  border: none;\n  border-top: solid 5px;\n  text-align: center;\n  max-width: 225px;\n  margin: 10px auto 20px;\n}\nhr.star-light:after,\nhr.star-primary:after {\n  content: \"\\F005\";\n  font-family: FontAwesome;\n  display: inline-block;\n  position: relative;\n  top: -0.8em;\n  font-size: 2em;\n  padding: 0 0.25em;\n}\nhr.star-light {\n  border-color: white;\n}\nhr.star-light:after {\n  background-color: #485451;\n  color: white;\n}\n\nsection {\n  padding: 75px 0;\n}\nsection h2 {\n  margin: 0;\n  font-size: 3em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, " .box1 {\n  border: solid 1px #006699;\n  padding: 20px;\n  background: #f3f3f3;\n  border-radius: 5px;\n}\n\n.todos input.textfield {\n  width: 480px;\n  height: 36px;\n  margin-right: 20px;\n  font-size: 1.4em;\n  vertical-align: top;\n}\n\n.todos input.checkbox {\n  width: 20px;\n  height: 20px;\n}\n\n.todos .checked {\n  text-decoration: line-through;\n}\n\n.todos button {\n  height: 36px;\n  font-size: 1.1em;\n  vertical-align: top;\n  border: solid 1px #999;\n  border-radius: 2px;\n}\n\n.todos .delete-icon {\n  diplay: inline-block;\n  cursor: pointer;\n}\n\n\n/*  style for table that show the tasks info*/\n.img{\n  background: url(http://az616578.vo.msecnd.net/files/2016/08/06/6360610785851960672068369534_schedule-image-.jpg); \n  position: fixed; \n  top: 0; \n  left: 0; \n  min-width: 100%;\n  min-height: 100%;\n  background-size: cover;\n}\n\n.btn {\n  margin-left: 550px;   \n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n#add{\n  margin-left: 620px;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n  \n}\ntable {\n  background: #f5f5f5;\n  border-collapse: separate;\n  box-shadow: inset 0 1px 0 #fff;\n  font-size: 12px;\n  line-height: 24px;\n  margin: 30px auto;\n  text-align: left;\n  width: 800px;\n} \n\nth {\n  background: -webkit-linear-gradient(#996A00, #444);\n  background: linear-gradient(#996A00, #444);\n  border-left: 1px solid #555;\n  border-right: 1px solid #777;\n  border-top: 1px solid #555;\n  border-bottom: 1px solid #333;\n  box-shadow: inset 0 1px 0 #999;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px 15px;\n  position: relative;\n  text-shadow: 0 1px 0 #000;  \n}\n\nth:after {\n  background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\n  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\n  content: '';\n  display: block;\n  height: 25%;\n  left: 0;\n  margin: 1px 0 0 0;\n  position: absolute;\n  top: 25%;\n  width: 100%;\n}\n\nth:first-child {\n  border-left: 1px solid #777;  \n  box-shadow: inset 1px 1px 0 #999;\n}\n\nth:last-child {\n  box-shadow: inset -1px 1px 0 #999;\n}\n\ntd {\n  border-right: 1px solid #fff;\n  border-left: 1px solid #e8e8e8;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #e8e8e8;\n  padding: 10px 15px;\n  position: relative;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\ntd:first-child {\n  box-shadow: inset 1px 0 0 #fff;\n} \n\ntd:last-child {\n  border-right: 1px solid #e8e8e8;\n  box-shadow: inset -1px 0 0 #fff;\n} \n\ntr:last-of-type td {\n  box-shadow: inset 0 -1px 0 #fff; \n}\n\ntr:last-of-type td:first-child {\n  box-shadow: inset 1px -1px 0 #fff;\n} \n\ntr:last-of-type td:last-child {\n  box-shadow: inset -1px -1px 0 #fff;\n} \n\n\n\n\n.navbar-inverse {\n  background: -webkit-linear-gradient(#996A00, #444);\n  background: linear-gradient(#996A00, #444);\n  font-size: 1.2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Nunito', sans-serif;\n  color: #384047;\n}\nform {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\nh1 {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\n\n\nselect {\n  background: rgba(255,255,255,0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n  margin-bottom: 30px;\n}\n\n\nbutton {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4eb9bf;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #4eb9bf;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n}\nlabel.light {\n  font-weight: 300;\n  display: inline;\n}\n\n@media screen and (min-width: 480px) {\n  form {\n    max-width: 480px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "body {\n  font-family: 'Nunito', sans-serif;\n  color: #384047;\n}\nform {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\nh1 {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=\"text\"],\ninput[type=\"password\"],\ninput[type=\"email\"],\ninput[type=\"code\"],\n\n\nselect{\n  background: rgba(255,255,255,0.1);\n  border: none;\n  font-size: 18px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;\n  margin-bottom: 30px;\n}\n\n\nbutton {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4eb9bf;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #4eb9bf;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 8px;\n}\nlabel.light {\n  font-weight: 300;\n  display: inline;\n}\n\n@media screen and (min-width: 480px) {\n  form {\n    max-width: 480px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".box1 {\n  border: solid 1px #006699;\n  padding: 20px;\n  background: #f3f3f3;\n  border-radius: 5px;\n}\n\n\nstrong {\n  font-weight: bold; \n}\n\nem {\n  font-style: italic; \n}\n\ntable {\n  background: #f5f5f5;\n  border-collapse: separate;\n  box-shadow: inset 0 1px 0 #006699;\n  font-size: 12px;\n  line-height: 24px;\n  margin: 30px auto;\n  text-align: left;\n  width: 800px;\n} \n\nth {\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png), -webkit-linear-gradient(#777, #444);\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png), linear-gradient(#777, #444);\n  border-left: 1px solid #006699;\n  border-right: 1px solid #006699;\n  border-top: 1px solid #006699;\n  border-bottom: 1px solid #006699;\n  box-shadow: inset 0 1px 0 #006699;\n  color: #fff;\n  font-weight: bold;\n  padding: 10px 15px;\n  position: relative;\n  text-shadow: 0 1px 0 #006699;  \n}\n\nth:after {\n  background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\n  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.08));\n  content: '';\n  display: block;\n  height: 25%;\n  left: 0;\n  margin: 1px 0 0 0;\n  position: absolute;\n  top: 25%;\n  width: 100%;\n}\n\nth:first-child {\n  border-left: 1px solid #777;  \n  box-shadow: inset 1px 1px 0 #999;\n}\n\nth:last-child {\n  box-shadow: inset -1px 1px 0 #999;\n}\n\ntd {\n  border-right: 1px solid #fff;\n  border-left: 1px solid #e8e8e8;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #e8e8e8;\n  padding: 10px 15px;\n  position: relative;\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\ntd:first-child {\n  box-shadow: inset 1px 0 0 #fff;\n} \n\ntd:last-child {\n  border-right: 1px solid #e8e8e8;\n  box-shadow: inset -1px 0 0 #fff;\n} \n\ntr {\n  background: url(http://jackrugile.com/images/misc/noise-diagonal.png);  \n}\n\ntr:nth-child(odd) td {\n  background: #f1f1f1 url(http://jackrugile.com/images/misc/noise-diagonal.png);  \n}\n\ntr:last-of-type td {\n  box-shadow: inset 0 -1px 0 #fff; \n}\n\ntr:last-of-type td:first-child {\n  box-shadow: inset 1px -1px 0 #fff;\n} \n\ntr:last-of-type td:last-child {\n  box-shadow: inset -1px -1px 0 #fff;\n} \n\ntbody:hover td {\n  color: transparent;\n  text-shadow: 0 0 3px #aaa;\n}\n\ntbody:hover tr:hover td {\n  color: #444;\n  text-shadow: 0 1px 0 #fff;\n}\n\n\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n  color: #000;  /*Sets the text hover color on navbar*/\n}\n\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active >   \na:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n  color: white; /*BACKGROUND color for active*/\n  background-color: #030033;\n}\n\n.navbar-inverse {\n  background-color: #0f006f;\n  border-color: #030033;\n}\n\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #66CCFF;  /*change color of links in drop down here*/\n}\n\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: silver; /*Change rollover cell color here*/\n}\n\n\n.navbar-inverse .navbar-nav > li > a {\n color: white; /*Change active text color here*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" id=\"avia-grid-group-css\" href=\"http://www.kriesi.at/wp-content/plugins/bwp-minify/min/?f=wp-content/themes/enfold/css/grid.css,wp-content/themes/enfold/css/base.css,wp-content/themes/enfold/css/layout.css,wp-content/themes/enfold/css/shortcodes.css,wp-content/uploads/dynamic_avia/kriesi.at.css,wp-content/themes/enfold/css/custom.css,wp-content/themes/kriesi/style.css,wp-content/plugins/envato-marketplace-items/marketplace.css\" type=\"text/css\" media=\"all\">\n\n\n\n<body id=\"top\" class=\"page-template-default page page-id-542 stretched open_sans \" itemscope=\"itemscope\" itemtype=\"https://schema.org/WebPage\">  \n\n    \n  <div id=\"main\" class=\"all_colors\" data-scroll-offset=\"88\">\n\n  <div id=\"about-us-intro\" class=\"avia-section main_color avia-section-default avia-no-shadow avia-bg-style-scroll  avia-builder-el-0  el_before_av_section  avia-builder-el-first  four_to_two container_wrap fullsize\">\n\n\n  <div class=\"container\"><main role=\"main\" itemprop=\"mainContentOfPage\" class=\"template-page content  av-content-full alpha units\">\n  <div class=\"post-entry post-entry-type-page post-entry-542\">\n  <div class=\"entry-content-wrapper clearfix\">\n\n\n\n<div style=\"padding-bottom:14px;\" class=\"av-special-heading av-special-heading-h1  blockquote classic-quote  avia-builder-el-1  el_before_av_hr  avia-builder-el-first   av-thin-font\"><h1 class=\"av-special-heading-tag\" itemprop=\"headline\">A little bit <strong>about us</strong></h1><div class=\"special-heading-border\"><div class=\"special-heading-inner-border\"></div></div></div>\n\n\n\n\n\n<div class=\"hr hr-short hr-center  avia-builder-el-2  el_after_av_heading  el_before_av_one_fourth\"><span class=\"hr-inner\"></span></div>\n\n\n<div class=\"flex_column av_one_fourth  flex_column_div first  avia-builder-el-3  el_after_av_hr  el_before_av_one_fourth  \">\n\n<div class=\"iconbox_content\">\n<header class=\"entry-content-header\">\n\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\"><span class=\"glyphicon glyphicon-user\"></span> Who we are?</h5>\n</header>\n<div class=\"iconbox_content_container \" itemprop=\"text\">\n<p>A team of awesome developers who are driven by perfectionism and the urge to create something that our customers love.</p>\n\n\n\n</div></div><footer class=\"entry-footer\"></footer></div>\n\n\n\n\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-5  el_after_av_one_fourth  el_before_av_one_fourth  \">\n<div class=\"iconbox_content\">\n<header class=\"entry-content-header\">\n\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\"><span class=\"glyphicon glyphicon-wrench\"></span> What we do?</h5></header><div class=\"iconbox_content_container \" itemprop=\"text\"><p>Build ridiculously powerful and easy to use Angular 2. Offer top notch customer support. Care for every detail.</p>\n</div></div><footer class=\"entry-footer\"></footer></div>\n\n\n\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-7  el_after_av_one_fourth  el_before_av_one_fourth  \">\n<div class=\"iconbox_content\">\n\n<header class=\"entry-content-header\">\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\">\n<span class=\"glyphicon glyphicon-heart\">\n</span> Why we do it?</h5>\n</header>\n<div class=\"iconbox_content_container \" itemprop=\"text\">\n<p>Because setting up your own Website should neither be painful nor expensive nor complicated.</p>\n</div></div><footer class=\"entry-footer\"></footer></div>\n\n<div class=\"flex_column av_one_fourth  flex_column_div   avia-builder-el-7  el_after_av_one_fourth  el_before_av_one_fourth  \">\n<div class=\"iconbox_content\">\n\n<header class=\"entry-content-header\">\n<h5 class=\"iconbox_content_title\" itemprop=\"headline\">\n<span class=\"glyphicon glyphicon-time\">\n</span> Future plans</h5>\n</header>\n<div class=\"iconbox_content_container \" itemprop=\"text\">\n<p>Lot of high quality freebies and wonderful Always you can suggest us an improvement or feature request.</p>\n</div></div><footer class=\"entry-footer\"></footer></div>\n\n\n\n\n</div></div></main><!-- close content main element --></div></div>\n\n<div id=\"about-us-team\" class=\"avia-section alternate_color avia-section-large avia-no-shadow avia-bg-style-scroll  avia-builder-el-11  el_after_av_section  el_before_av_heading  section-with-bg container_wrap fullsize\">\n<div class=\"container\">\n<div class=\"template-page content  av-content-full alpha units\">\n<div class=\"post-entry post-entry-type-page post-entry-542\">\n<div class=\"entry-content-wrapper clearfix\">\n\n\n<div style=\"padding-bottom:14px;\" class=\"av-special-heading av-special-heading-h1  blockquote classic-quote  avia-builder-el-13  el_after_av_heading  el_before_av_testimonials   av-thin-font\"><h1 class=\"av-special-heading-tag\" itemprop=\"headline\">Allow us to <strong>introduce ourselves</strong></h1><div class=\"special-heading-border\"><div class=\"special-heading-inner-border\"></div></div></div>\n\n<div data-autoplay=\"1\" data-interval=\"5\" data-animation=\"fade\" data-hoverpause=\"1\" class=\"avia-testimonial-wrapper avia-grid-testimonials avia-grid-2-testimonials avia_animate_when_almost_visible   avia_start_animation\">\n\n<section class=\"avia-testimonial-row\">\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-1 avia-first-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\">\n<div class=\"avia-testimonial_inner\">\n<div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/ahmed.png\" class=\"attachment-square size-square\" sizes=\"(max-width: 180px) 100vw, 180px\">\n</div>\n\n\n<div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Welcome ! I'm Scrum Master for this project we worked it as ateam in RBK I graduated from Information Technology IT. ,and i'm softweer engineer.</p>\n<p>Follow me on:&nbsp;<a href=\"https://github.com/AhmadAlMaradni\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/ahmad-almaradni-a9857665/\" target=\"_blank\">Linked in</a>&nbsp;\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Ahmed Maradni</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Damascus, Syria</span></div></div></div></div>\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-1 avia-last-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/Aaya.png\" class=\"attachment-square size-square\" alt=\"Yigit Telyakar\"  sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Team Member for this project we worked it as ateam in RBK I graduated from Information Technology IT. ,and i'm softweer engineer.</p>\n<p>Follow me on:&nbsp;<a href=\"https://github.com/Aaya-Hassan\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/aaya-hassan-5b1b8613b/\" target=\"_blank\">Linked in</a>&nbsp;\n\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Aaya Hassan</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Baghdad, Iraq</span></div></div></div></div></section>\n<section class=\"avia-testimonial-row\"><div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-2 avia-first-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/zainab.png\" class=\"attachment-square size-square\" alt=\"Ismael Herrera\" sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Team Member for this project we worked it as ateam in RBK I graduated as Nutritionist ,and i'm softweer engineer.</p>\n\n<p>Follow me on:&nbsp;<a href=\"https://github.com/ZainabOmar\" target=\"_blank\">GitHub</a> | <a href=\"https://www.linkedin.com/in/zainab-hammami-18335013a/\" target=\"_blank\">Linked in</a>&nbsp;\n\n\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Zainab Hammami</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Aleppo, Syria</span></div></div></div></div>\n<div class=\"avia-testimonial av_one_half flex_column no_margin avia-testimonial-row-2 avia-last-testimonial avia_start_animation\" itemscope=\"itemscope\" itemtype=\"https://schema.org/Person\"><div class=\"avia-testimonial_inner\"><div class=\"avia-testimonial-image\" itemprop=\"image\"><img width=\"180\" height=\"180\" src=\"../assets/img/maher.png\" class=\"attachment-square size-square\" alt=\"Andreas Müller\" sizes=\"(max-width: 180px) 100vw, 180px\"></div><div class=\"avia-testimonial-content \" itemscope=\"itemscope\" itemtype=\"https://schema.org/CreativeWork\"><p>Hi ! I'm Product Owner for this project we worked it as ateam in RBK I graduated as Pharmacist ,and i'm softweer engineer.</p>\n<p>Follow me on:&nbsp;<a href=\"https://github.com/maherghnom\" target=\"_blank\">GitHub</a> | <a href=\"\" target=\"_blank\">#</a>&nbsp;\n\n\n</div><div class=\"avia-testimonial-meta\"><div class=\"avia-testimonial-arrow-wrap\"><div class=\"avia-arrow\"></div></div><div class=\"avia-testimonial-meta-mini\"><strong class=\"avia-testimonial-name\" itemprop=\"name\">Maher Ghanom</strong><span class=\"avia-testimonial-subtitle \" itemprop=\"jobTitle\">Damascus, Syria</span></div></div></div></div></section>\n\n</div>\n</div>"

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 587:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n\t\t</div>\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n\t\t\t<li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n\t\t</ul>\n\t</div>\n</nav>\n<div class=\"container\">\n\t<form (click)=\"sendIdea()\">\n\t\t<h1>Got New Idea?!</h1>\n\t\t<fieldset>\n\t\t\t<label for=\"title\"><h4>Idea:</h4></label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"title\"  id=\"title\" name=\"title\" >\n\t\t\t<label for=\"idea\"><h4>Description:</h4></label>\n\t\t\t<input type=\"text\" [(ngModel)]=\"idea\" id=\"idea\" name=\"idea\" >\n\t\t</fieldset>\n\t\t<button type=\"submit\" value=\"Submit\" >Send Your Magic</button>\n\t</form>\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<ul class=\"timeline\">\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"timeline-image\">\n\t\t\t\t\t\t<img class=\"img-circle img-responsive\" src=\"../../assets/img/idea1.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t<h4 class=\"subheading\">Development Tools</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t\t\t\twe need more technology in our company it is important that the world work in fast ways so we need more computers and applications to help us in this.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"timeline-image\">\n\t\t\t\t\t\t<img class=\"img-circle img-responsive\" src=\"../../assets/img/idea2.jpg\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t<h4 class=\"subheading\">Creative solution</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t\t\t\tWe can have a manager that plan the tasks and explain it to us, it will save time and effort for us , and for sure he should be proffesional.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"timeline-image\">\n\t\t\t\t\t\t<img class=\"img-circle img-responsive\" src=\"../../assets/img/idea3.png\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"timeline-panel\">\n\t\t\t\t\t\t<div class=\"timeline-heading\">\n\t\t\t\t\t\t\t<h4 class=\"subheading\">Comany park</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"timeline-body\">\n\t\t\t\t\t\t\t<p class=\"text-muted\">\n\t\t\t\t\t\t\t\tThis park even has a personality of its own, such as \"cautious\" or \"aggressive,\" to fit driving conditions.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports = "<form action=\"\"> \n  <input [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" /><button (click)=\"sendMessage()\">Send</button>\n</form>\n<div id=\"messages\" *ngFor=\"let message of messages\">\n  <div id=\"item\">\n  {{message.text}}\n  </div>\n</div>\n<!-- <app-chat></app-chat> -->"

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "<div class = \"body\">\n  <div class=\"jumbotron\">\n    <div class=\"container text-center\">\n      <h1>{{obj.CompanyName}}</h1>      \n      <p><strong>Mission, Vission and Values</strong></p>\n    </div>\n  </div>\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a routerLink = \"/\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n          <li><a routerLink=\"/company\">Users <span class=\"glyphicon glyphicon-user\"></span></a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a (click)=\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">    \n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Start A Task</div>\n          <div class=\"panel-body\"><a routerLink = \"/task\"><img src=\"../../assets/img/tasks-icon-26.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Post A Task And Show It To Your Colleagues</div> -->\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">BrainStorming </div>\n          <div class=\"panel-body\"><a routerLink = \"/brainStorming\"><img src=\"../../assets/img/brainstorming.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Discuss Your Problems Comfortably</div> -->\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Your Schedule</div>\n          <div class=\"panel-body\"><a routerLink = \"/schedule\"><img src=\"../../assets/img/schedule.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Schedule Your Meetings With Other Colleagues</div> -->\n        </div>\n      </div>\n    </div>\n  </div><br>\n\n  <div class=\"container\">    \n    <div class=\"row\">\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Chat with Collegues</div>\n          <div class=\"panel-body\"><a routerLink = \"/chat\"><img src=\"../../assets/img/Chat.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Start Chatting Your Collegues</div> -->\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Vote for Food</div>\n          <div class=\"panel-body\"><a routerLink = \"/food\"><img src=\"../../assets/img/food.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Hungry?! You Can Get Food Here</div> -->\n        </div>\n      </div>\n      <div class=\"col-sm-4\"> \n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">Playing Board</div>\n\n          <div class=\"panel-body\"><a routerLink = \"/gaming\"><img src=\"../../assets/img/game.png\" class=\"img-responsive\" style=\"width:100%\" alt=\"Image\"></a></div>\n          <!-- <div class=\"panel-footer\">Time To play Around</div> -->\n\n        </div>\n      </div>\n    </div>\n  </div><br><br>\n\n  <footer class=\"container-fluid text-center\">\n    <p>{{obj.CompanyName}} Loves You <span class=\"glyphicon glyphicon-heart\"></span></p>\n    <p>{{obj.address}} <span class=\"glyphicon glyphicon-globe\"></span></p>\n    <p>{{obj.phoneNumber}} <span class=\"glyphicon glyphicon-phone\"></span></p>\n  </footer>\n</div>"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = "<p>\n  creatcompany works!\n</p>\n  <form (submit)=\"Createcopmany()\"  >\n    <fieldset>\n      <label for=\"name\">Company Name</label>\n      <input type=\"text\" [(ngModel)]=\"CompanyName\"  id=\"name\" name=\"user_name\" >\n\n\n      <label for=\"name\">Company Address</label>\n      <input type=\"text\" [(ngModel)]=\"address\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Company telephone</label>\n      <input type=\"text\" [(ngModel)]=\"phoneNumber\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Plese Enter the code sent to you by your mail</label>\n      <input type=\"text\" [(ngModel)]=\"code\"  id=\"name\" name=\"user_name\" >\n      \n   \n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Create Company</button>\n\n  </form>"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"img\">\n  <div class = \"well\">\n    <div id=\"wrapper\">\n      <h1 style=\"color: white;text-align: center;\">Suggestion and  Vote for Food <span style=\"color: #2fad0c\" class=\"glyphicon glyphicon-apple\"></span></h1>\n      <form (submit)=\"addFood()\">\n\n        <div class=\"col-2\">\n          <label>\n            Add Suggestion\n            <input placeholder=\"food name\" id=\"phone\" [(ngModel)]=\"dishName\" name=\"phone\" tabindex=\"3\">\n          </label>\n        </div>\n        <div class=\"col-4\">\n          <label>\n            type\n            <input placeholder=\"the faverot type\" id=\"email\" [(ngModel)]=\"type\" name=\"email\" tabindex=\"4\">\n          </label>\n        </div>\n        <div class=\"col-4\">\n          <label>\n            foodtime\n            <select  (change)=\"onChange($event.target.value)\">\n              <option *ngFor=\"let i of foodTimes\"> {{i}} </option>\n            </select>\n          </label>\n        </div>\n\n        <br>\n        <div class=\"col-xs-12 col-submit\">\n          <button class=\"submitbtn\">Submit Form</button>\n        </div>\n      </form>\n\n\n      <div id=\"pricing-table\" class=\"clear\" >\n        <div class=\"plan\" style=\"margin: 10px\"   *ngFor=\"let food of foods\">\n          <h3>Vote<span>{{ food.votes }}</span></h3>\n          <a class=\"signup\" (click)=\"Votee(food.dishName)\" ><span  class=\"glyphicon glyphicon-heart\"></span></a>         \n          <ul>\n            <li><b><strong >{{ food.dishName }}</strong></b></li>\n            <li>{{ food.foodtime }}</li>\n            <li>{{ food.type }}</li>\n          </ul> \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<div class='img'>\n<br>\n<div id=\"aya\">\n <div class=\"row\">\n  <div class=\"col-sm-4 col-md-3\">\n    <div class=\"thumbnail\">\n      <img src=\"http://www.drawingcoach.com/image-files/xhow_to_draw_blood_st5.gif.pagespeed.ic.zZaR0_FpPO.png\">\n      <div class=\"caption\">\n        <h3>ColliderD3</h3>\n       <button type=\"button\" class=\"btn btn-info\" (click)=\"div_hide()\" (click)=\"show = !show\"> Play <span class=\"glyphicon glyphicon-play-circle\"></span></button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-3\">\n    <div class=\"thumbnail\">\n      <img src=\"https://lh4.ggpht.com/bfp-gUDal6YKuVIkmA7iNR_-Tf4yaTXOyKaK8r1C2whC9APYiRcvmlM3ub9TxLBMw3KT=w300\">\n      <div class=\"caption\">\n        <h3>8-Ball-Pool</h3>\n       <button type=\"button\" class=\"btn btn-info\" (click)=\"div_hide()\" (click)=\"show = !show\"> Play <span class=\"glyphicon glyphicon-play-circle\"></span></button>\n      </div>\n    </div>\n  </div>\n </div>\n</div>\n\n<embed width=\"100%\" height=\"600px\" src=\"http://latentflip.com/LearningD3/collider/\" *ngIf=\"show\">\n\n <embed width=\"100%\" height=\"600px\" src=\"https://www.miniclip.com/games/8-ball-pool-multiplayer/en/\" *ngIf=\"game\">\n\n<button type=\"button\" id=\"back\" class=\"btn btn-info\" (click)=\"div_show()\" (click)=\"show = !show\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Back To Menu </button>\n</div>"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<div class =\"bbdd\">\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n        <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a routerLink=\"/aboutus\">About US <span class=\"glyphicon glyphicon-hand-left\"> </span></a>\n          </li>\n          <li>\n            <a routerLink=\"/signin\">Log In <span class=\"glyphicon glyphicon-log-in\">  </span></a>\n          </li>\n          <li>\n            <a routerLink=\"/signup\"> Sign up <span class=\"glyphicon glyphicon-user\"> </span></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <a name=\"about\"></a>\n  <div class=\"intro-header\">\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"intro-message\">\n            <h1>Company Manager Website</h1>\n            <h2>Best Choice <span class=\" glyphicon glyphicon-check\"></span></h2>\n            <h3>Manage your company easily and simpily</h3>\n            <hr class=\"intro-divider\">\n            <ul class=\"list-inline intro-social-buttons\">\n              <li>\n                <a href=\"https://github.com/Berzzerk/Fcompany\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-github fa-fw\"></i> <span class=\"network-name\">Github</span></a>\n              </li>\n              <li>\n                <a href=\"https://www.linkedin.com/uas/login\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-linkedin fa-fw\"></i> <span class=\"network-name\">Linkedin</span></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br><br>\n  <section class=\"success\" id=\"about\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h2>Company Manager</h2><br>\n          <hr class=\"star-light\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-lg-offset-2\">\n          <p>The most important benefit of our website is that the referrals that you get through networking are normally high quality and most of the time are even pre-qualified for you.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <p>You can then follow up on these referrals/leads and turn them into clients. So you are getting much higher quality leads from business networking than other forms of marketing.</p>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\"> \n          <a href=\"http://amazingbusiness.com/top-9-benefits-of-business-networking/\" class=\"btn btn-lg btn-outline\">\n            <i class=\"fa fa-book fa-fw\"></i> Read more\n          </a>\n        </div>\n\n      </div>\n    </div> \n  </section>\n\n  <a  name=\"services\"></a>\n  <div class=\"content-section-a\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-sm-6\">\n          <hr class=\"section-heading-spacer\">\n          <div class=\"clearfix\"></div>\n          <h2 class=\"section-heading\">Company Manager Task Organizing<br><h2>Better Task Management</h2></h2>\n          <p class=\"lead\">More complicated tasks typically require a variety of different steps. This can make it increasingly difficult for employees to remember all of the steps they must carry out in order to complete a process. </p>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n          <img class=\"img-responsive\" src=\"../assets/img/task-management.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-section-b\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n          <hr class=\"section-heading-spacer\">\n          <div class=\"clearfix\"></div>\n          <h2 class=\"section-heading\">Join And Set Meetings<br>Using Schedule Mangaer</h2>\n          <p class=\"lead\">Board meetings are a bit different than an everyday meeting as they are attended by volunteers who may not be familiar with the day to day operational details of your organization; generally board members need to keep their discussion centered on high level strategy, policy, and financial overviews.</p>\n        </div>\n        <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n          <img class=\"img-responsive\" src=\"../assets/img/meeting.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"content-section-a\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-sm-6\">\n          <hr class=\"section-heading-spacer\">\n          <div class=\"clearfix\"></div>\n          <h2 class=\"section-heading\">Effective Scheduling<br></h2>\n          <p class=\"lead\">It's all too easy for this to happen. Faced with endless meetings, frequent interruptions, and urgent last-minute tasks, you can easily be busy all day without making any progress on high-priority projects and goals.</p>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\">\n          <img class=\"img-responsive\" src=\"../../assets/img/schedule.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content-section-b\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n          <hr class=\"section-heading-spacer\">\n          <div class=\"clearfix\"></div>\n          <h2 class=\"section-heading\">Meals Suggestions<br></h2>\n          <p class=\"lead\">One of the biggest issues with phone conversations is that misunderstandings can happen quite easily. Usually due to the noise, either in the restaurant or on the other end of the line, all it takes is one mistake to compromise an order and frustrate a customer. With our website, all preferences are specified directly by the customer.</p>\n        </div>\n        <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n          <img class=\"img-responsive\" src=\"../../assets/img/company-meals.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <a  name=\"contact\"></a>\n  <div class=\"banner\">\n\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <h2>Register Now</h2>\n        </div>\n        <div class=\"col-lg-6\">\n          <ul class=\"list-inline banner-social-buttons\">\n            <li>\n              <a routerLink=\"/signin\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Login <span class=\"glyphicon glyphicon-log-in\">  </span></span></a>\n            </li>\n            <li>\n              <a routerLink=\"/signup\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Register <span class=\"glyphicon glyphicon-user\"> </span></span></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <footer class=\"container-fluid text-center\">\n      <i>Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></i><br>\n      <i>Our Address: Amman, Jordan, Business Park <span class=\"glyphicon glyphicon-globe\"></span></i><br>\n      <i>Contact Us On <span class=\"glyphicon glyphicon-hand-right\"> </span> 07345364534 <span class=\"glyphicon glyphicon-phone\"></span></i><br>\n      <i class=\"copyright text-muted small\">Copyright &copy; Berzzerk.com, 2017-RBK <span class=\"glyphicon glyphicon-heart\"></span></i><br>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n    </ul>\n  </div>\n</nav>\n<button type=\"button\" class=\"btn btn-info\" (click)=\"showSch = !showSch\"> Show Me MY Schedule <span class=\"glyphicon glyphicon-send\"> </span></button><br><br>\n<button type=\"button\" class=\"btn btn-info\" id=\"add\" (click)=\"div_show()\"> ADD <span class=\"glyphicon glyphicon-send\"></span></button><br>\n\n<div id=\"aya\" style=\"display: none;\">\n  <form class=\"well form-horizontal\" (submit)=\"add()\">\n    <fieldset>\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Title</label>  \n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\n            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\">\n          </div>\n        </div>\n      </div><br>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Discription</label>  \n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\n            <textarea rows=\"3\" cols=\"20\" [(ngModel)]=\"description\" name=\"description\"></textarea>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Date</label>  \n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n            <input  type=\"date\" [(ngModel)]=\"date\" name=\"Date\">\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">Start Time</label>  \n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n            <input  type=\"time\" [(ngModel)]=\"starttime\" name=\"starttime\">\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\">End Time</label>  \n        <div class=\"col-md-4 inputGroupContainer\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n            <input  type=\"time\" [(ngModel)]=\"endtime\" name=\"endtime\">\n          </div>\n        </div>\n      </div>\n\n      \n      \n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\"></label>\n        <div class=\"col-md-4\">\n          <button type=\"submit\" class=\"btn btn-info \" (click)=\"div_hide()\"> SUBMIT</button></div>\n        </div>  \n      </fieldset>\n    </form>\n  </div>\n  \n  <div *ngIf=\"showSch\" class=\"todos\" style=\"padding: 15px\">\n    <table>\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Description</th>\n          <th>Date</th>\n          <th>Start Time - End Time</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let sch of todos\">\n          <td><strong >{{ sch.title }}</strong></td>\n          <td>{{ sch.description }}</td>\n          <td>{{ sch.date}}</td>\n          <td>{{ sch.starttime }} - {{ sch.endtime }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  </div>"

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<br><br>\n<form (submit)=\"onSubmit()\">\n\t<h1>Sign In</h1>\n\t<fieldset>\n\t\t<label for=\"name\">Name:</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\t\t<label for=\"password\">Password:</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n\t</fieldset>\n\t<button type=\"submit\" value=\"Submit\" >Submit</button>\n</form>"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n\n<h1>Sign Up</h1>\n<button *ngIf=\"but1flag\" (click)=\"compflag()\">company account</button>\n<button *ngIf=\"but2flag\" (click)=\"empflag()\">employee account</button>\n<div *ngIf=\"comflag\">\n  <form (submit)=\"onRegisterAdmin()\"  >\n    <fieldset>\n     \n\n      <label for=\"name\">Admin Name</label>\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Admon Job Role</label>\n     <!-- <select [(ngModel)]=\"jobrole\"> \n        <option *ngFor=\"#n of jobroles\" [attr.value]=\"n\">{{n}}</option>\n      </select> -->\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\n      </select>\n      <!-- <input type=\"text\" [(ngModel)]=\"jobrole\"  id=\"name\" name=\"user_name\" > -->\n\n      <label for=\"mail\">Email</label>\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\n\n      <label for=\"password\">Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Next</button>\n\n  </form>\n</div>\n\n<div *ngIf=\"emflag\">\n\n  <form (submit)=\"onRegisterUser()\"  >\n    <fieldset>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" [(ngModel)]=\"username\"  id=\"name\" name=\"user_name\" >\n\n      <label for=\"name\">Job Role</label>\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let i of jobroles\">{{i}}</option>\n      </select>\n\n      <label for=\"mail\">Email:</label>\n      <input type=\"email\" [(ngModel)]=\"email\" id=\"mail\" name=\"user_email\" >\n\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" [(ngModel)]=\"password\" id=\"password\" name=\"user_password\" >\n      \n      <label for=\"code\">Code:</label>\n      <input type=\"code\" [(ngModel)]=\"code\" id=\"code\" name=\"user_code\" >\n\n    </fieldset>\n    <button type=\"submit\" value=\"Submit\" >Sign Up</button>\n\n  </form>\n</div>"

/***/ }),

/***/ 597:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Company Manager <i class=\"fa fa-ravelry\" aria-hidden=\"true\"></i></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a routerLink= \"/company\">Home <span class=\"glyphicon glyphicon-home\"></span></a></li>\n      <li><a (click) =\"logout()\">Log Out <span class=\"glyphicon glyphicon-lock\"></span></a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"panel-heading\" style=\"background-color: #252626\"> \n  <h3 class=\"panel-title\" style=\"color: white;text-align: center;padding: 15px;font-size: 35px\">Tasks\n   <i style=\"padding: 15px;color:#3a47a3\" class=\"glyphicon glyphicon-tasks\"></i>\n </h3>\n</div>\n\n<div class=\"todos\" style=\"padding: 15px\">\n\n  <!-- *** -->\n  <table>\n    <thead>\n      <tr>\n        <th>Task name</th>\n        <th>Date</th>\n        <th>Assign to</th>\n        <th>Description</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let todo of todos\">\n        <td><strong >{{ todo.taskName }}</strong></td>\n        <td>{{ todo.updated }}</td>\n        <td>{{ todo.assignTo }}</td>\n        <td>{{ todo.description }}</td>\n        <td (click)=\"deleteTodo(i)\" class=\"delete-icon\" style=\"color: red\">[X]</td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n<!--  ********************************   -->\n\n<input class=\"btn btn-danger\" type=\"submit\" value=\"add New task\" style=\"margin-left: 500px;\" (click)=\"div_show()\" >\n\n<div id=\"abc\">\n\n  <form class=\"well form-horizontal\" (submit)=\"addTodo()\">\n    <fieldset>\n\n     <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Task</label>  \n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\n          <input type=\"text\" [(ngModel)]=\"newTodo\" name=\"newTodo\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Discription</label>  \n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-tasks\"></i></span>\n          <textarea rows=\"3\" cols=\"50\" [(ngModel)]=\"Discription\" name=\"Discription\"></textarea>\n        </div>\n      </div>\n    </div>\n\n    \n\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Date </label>  \n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-time\"></i></span>\n          <input  type=\"date\" name=\"\" [(ngModel)]=\"Date\" name=\"Date\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\">Assign to</label>  \n      <div class=\"col-md-4 inputGroupContainer\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n          <select class=\"form-control\" (change)=\"onChange($event.target.value)\">\n            <option  *ngFor=\"let i of Assigns\">{{i}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\"></label>\n      <div class=\"col-md-4\">\n        <button  class=\"btn btn-lg btn-primary btn-block\" (click)=\"div_hide()\"> SUBMIT <span class=\"glyphicon glyphicon-send\"></span></button></div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4 control-label\"></label>\n        <div class=\"col-md-4\">\n          <button class=\"btn btn-lg btn-danger btn-block\" (click)=\"div_hide()\">close</button>\n        </div>\n      </div>\n      \n    </fieldset>\n\n  </form>\n  \n</div> <!-- **********************end div popup***************** -->\n\n<style type=\"text/css\">\n  #abc {\n    width:100%;\n    height:100%;\n    opacity:.95;\n    top:0;\n    left:0;\n    display:none;\n    position:fixed;\n    background-color:#313131;\n    overflow:auto\n  }\n</style>\n\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.e1115afea56dcaf0c273.png";

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(364);


/***/ })

},[623]);
//# sourceMappingURL=main.bundle.js.map