webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__login_register_register_component__["a" /* RegisterComponent */] },
    {
        path: 'shopping-main', canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__products_products_component__["a" /* ProductsComponent */], children: [
            { path: ':category/products', canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__products_product_list_product_list_component__["c" /* ProductListComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */] }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ng-container>\r\n        <router-outlet></router-outlet>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
        this.isAuthenticated = false;
    }
    AppComponent.prototype.onAuthentication = function (event) {
        this.isAuthenticated = event;
        // this.router.navigate(['/shopping-main']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_cart_cart_component__ = __webpack_require__("../../../../../src/app/products/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_categories_categories_component__ = __webpack_require__("../../../../../src/app/products/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_categories_categories_header_categories_header_component__ = __webpack_require__("../../../../../src/app/products/categories/categories-header/categories-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["c" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_12__products_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_13__products_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__products_categories_categories_header_categories_header_component__["a" /* CategoriesHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["a" /* AddProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__login_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["b" /* AddProductToCartComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["a" /* AddProductListComponent */], __WEBPACK_IMPORTED_MODULE_9__products_product_list_product_list_component__["b" /* AddProductToCartComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__["a" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_forms__["e" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_18__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_19__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_20__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_23__services_cart_service__["a" /* CartService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthGuard = (function () {
    function AuthGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginService.isAuthenticated()];
                    case 1:
                        res = _a.sent();
                        //token authentication needed
                        if (res['status'] == 401) {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        this.loginService.loggedInUser.next(JSON.parse(document.cookie.split(';')[1]));
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logoutBtn{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <a routerLink=\"/shopping-main\" class=\"navbar-brand\">Shopping Cart Project</a>\r\n      </div>\r\n      <div>\r\n          <ul class=\"nav navbar-nav\">\r\n              <li routerLinkActive=\"active\"><a routerLink=\"/search\">Search</a></li>\r\n              <li routerLinkActive=\"active\"><a routerLink=\"/shopping-main\">Products</a></li>\r\n              <li class=\"logoutBtn\" routerLinkActive=\"active\"><a (click)=\"onLogout()\">Logout</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n             <li>{{userEmail}}</li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.loggedInUser.subscribe(function (user) {
            _this.userEmail = user['email'];
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-md-4\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">User Name</label>\r\n                        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"username\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" >\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"sumbit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\r\n                    <button type=\"button\" class=\"btn btn-primery\" (click)=\"onRegister()\">Register</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        Details about the store\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        runnig images of products availble on the store\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var registerdUsername;
var registerdUserPass;
var LoginComponent = (function () {
    function LoginComponent(loginService, router, registerService) {
        this.loginService = loginService;
        this.router = router;
        this.registerService = registerService;
        this.isAuthenticated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        delete document.cookie;
        document['cookie'] = '';
        this.inItLoginForm(registerdUsername, registerdUserPass);
        this.registerService.userLoginDetails.first().subscribe(function (user) {
            registerdUsername = user.name;
            registerdUserPass = user.pass;
        });
    };
    LoginComponent.prototype.inItLoginForm = function (name, pass) {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](pass, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.postLogin(this.loginForm.value).subscribe(function (res) {
            _this.router.navigate(['/shopping-main']);
        });
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "isAuthenticated", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_register_service__["a" /* RegisterService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 col-offset-3\">\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <ng-container *ngIf=\"view === 'partOne'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"id\">Id</label>\r\n                        <input type=\"number\" id=\"id\" class=\"form-control\" formControlName=\"idNumber\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <p class=\"pull-right\" *ngIf=\"emailMessage\">{{emailMessage}}</p>\r\n                        <input #email type=\"text\" id=\"email\" class=\"form-control\"\r\n                        formControlName=\"email\" (change)=\"validateEmail(email.value)\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"pass\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"confPassword\">Confirm Password</label>\r\n                        <input type=\"password\" id=\"confPassword\" class=\"form-control\" [(ngModel)]=\"confPass\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNext()\"\r\n                     [disabled]=\"confPass != pass || confPass == null || pass == null && emailMessage != 'email is taken'\">Next</button>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div>\r\n                        <p *ngIf=\"confPass != pass && confPass != null && pass != null\">Confim password doesn't match password</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"view === 'partTwo'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\">City</label>\r\n                        <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"street\">Street</label>\r\n                        <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name</label>\r\n                        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastName\">Last Name</label>\r\n                        <input type=\"text\" id=\"lastName\" class=\"form-control\" formControlName=\"last\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBack()\">Back</button>\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">Submit</button>\r\n                </div>\r\n            </ng-container>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.userPassword = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.view = 'partOne';
        this.registerFormInit();
    };
    RegisterComponent.prototype.registerFormInit = function () {
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'idNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'street': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'last': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            'role': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('user')
        });
    };
    RegisterComponent.prototype.onNext = function () {
        return this.view = 'partTwo';
    };
    RegisterComponent.prototype.onBack = function () {
        this.view = 'partOne';
    };
    RegisterComponent.prototype.validateEmail = function (email) {
        var _this = this;
        if (this.registerForm.controls.email.invalid) {
            this.emailMessage = 'Invalid email';
        }
        else {
            this.registerService.checkEmail({ 'email': email }).subscribe(function (res) {
                _this.emailMessage = res;
            });
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerService.postRegister(this.registerForm.value).subscribe(function (res) {
            console.log('name: ', res.name, 'pass: ', res.password, 'res: ', res);
            _this.registerService.userLoginDetails.next({ name: res.name, pass: res.password });
            _this.router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "userPassword", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/login/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h3>\r\n      My Cart\r\n    </h3>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>\r\n      Products:\r\n    </h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let item of cartItems\" class=\"list-group-item\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Name: {{item.name}}</li>\r\n          <li class=\"list-group-item\">Quantity: {{item.amount}}</li>\r\n          <li class=\"list-group-item\">Price: {{item.price}}</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(cartService, loginService) {
        this.cartService = cartService;
        this.loginService = loginService;
        this.cartItems = this.cartService.cartItems;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.loggedInUser.subscribe(function (user) {
            _this.userId = user['userId'];
        });
        this.cartService.addedProduct.subscribe(function (item) {
            console.log(_this.cartItems);
            for (var _i = 0, _a = _this.cartItems; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.name === item.name) {
                    i.price += item.price;
                    return i.amount += item.amount;
                }
            }
            _this.cartService.cartItems.push(item);
            _this.cartService.saveCartToUser(_this.userId);
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/products/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/cart/cart.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = (function () {
    function Cart(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    return Cart;
}());

//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ "../../../../../src/app/products/categories/categories-header/categories-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerPosition{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    flex-direction: row;\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .navbar-nav.headerPosition {\r\n        margin: 0;\r\n        float: none;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/categories/categories-header/categories-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav headerPosition\">\r\n                <li [routerLink]=\"[category.name,'products']\" *ngFor=\"let category of categories\" [id]=\"category._id\" (click)=\"displayProd($event)\"\r\n                    style=\"cursor: pointer; \">\r\n                    <a>| {{ category.name }}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/products/categories/categories-header/categories-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesHeaderComponent = (function () {
    function CategoriesHeaderComponent(categoriesService, activeRoute, router) {
        this.categoriesService = categoriesService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.categories = [];
        this.id = '';
    }
    CategoriesHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) {
            _this.categoriesService.categories$$.next(data);
            _this.categories = data;
        }, function (err) { return console.log('err: ' + err); }, function () { return console.log(_this.categories); });
    };
    CategoriesHeaderComponent.prototype.displayProd = function (data) {
        this.categoriesService.categoryId$$.next(data.currentTarget.id);
    };
    return CategoriesHeaderComponent;
}());
CategoriesHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories-header',
        template: __webpack_require__("../../../../../src/app/products/categories/categories-header/categories-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/categories/categories-header/categories-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CategoriesHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=categories-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-categories-header></app-categories-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/products/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/product-list/add-product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Product</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form [formGroup]=\"addingProductsForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"imagePath\">Image URL</label>\r\n                <input type=\"text\" id=\"imagePath\" class=\"form-control\" formControlName=\"imagePath\" #imagePath>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6 pull-right\">\r\n              <div class=\"form-group\">\r\n                <img [src]=\"imagePath.value\" alt=\"\" class=\"img-responsive imgStyle\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"price\">Price</label>\r\n                <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\">\r\n              </div>\r\n            </div>\r\n            <!-- </div>\r\n          <div class=\"row\"> -->\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <div *ngIf=\"current.name == 'General'\">\r\n                  <label for=\"category\">Category</label>\r\n                  <select formControlName=\"category\" id=\"category\" class=\"form-control\">\r\n                    <option value=\"\" disabled=\"true\">Choose Category</option>\r\n                    <option *ngFor=\"let category of categories\" [value]=\"category._id\">{{ category.name }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <button type=\"sumbit\" class=\"btn btn-success\" (click)=\"onNoClick()\" [disabled]=\"!addingProductsForm.valid\">Save</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\"> -->\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <!-- <button mat-button (click)=\"onNoClick()\">No Thanks</button> -->\r\n  <!-- <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-list/add-product-to-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Product To Cart</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <p>\r\n                    <b>Product Name:</b> {{product.name}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <p>\r\n                    <b>Product Price:</b> {{product.price*amount.value}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <form [formGroup]=\"addingProductToCartForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"amount\">Amount</label>\r\n                                <input type=\"number\" id=\"amount\" class=\"form-control\" formControlName=\"amount\" #amount min=\"1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <button type=\"sumbit\" class=\"btn btn-success\" (click)=\"onClose()\" [disabled]=\"!addingProductToCartForm.valid\">Save To Cart</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClose()\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </mat-form-field>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .mat-dialog-container{\r\n    margin-top: -250px;    \r\n}\r\n\r\n.imgStyle{\r\n    max-height: 180px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"currentCategory && currentCategory.productList\">\r\n  <div class=\"col-md-2\" *ngFor=\"let product of currentCategory.productList\">\r\n    <a class=\"list-group-item clearfix styleList\" style=\"cursor:pointer\" (click)=\"openAddItemToCart(product)\">\r\n      <p>name: {{product.name}}</p>\r\n      <p>price: {{product.price}}</p>\r\n      <div class=\"pull-right\">\r\n        <img src=\"{{product.imagePath}}\" alt=\"{{product.name}}\" class=\"img-responsive\" style=\"max-height: 50px;\">\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-md-2\" *ngIf=\"loggedUser.role == 'admin'\">\r\n    <a class=\"list-group-item clearfix styleList\" style=\"cursor:pointer; height: 132px\" mat-raised-button (click)=\"openDialog()\">\r\n      <h2>Add <span style=\"font-size: 20px\" class=\"glyphicon glyphicon-plus\"></span> Product</h2>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProductListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddProductToCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cart_model__ = __webpack_require__("../../../../../src/app/products/cart/cart.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var ProductListComponent = (function () {
    function ProductListComponent(loginService, activatedRoute, categoriesService, router, dialog) {
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.categoriesService = categoriesService;
        this.router = router;
        this.dialog = dialog;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.loggedInUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        // this.loggedUser = JSON.parse(document.cookie.split(';')[1]);
        this.categoriesService.categoryId$$
            .takeUntil(this.ngUnsubscribe)
            .do(function (id) { _this.id = id; })
            .switchMap(function (id) {
            return _this.categoriesService.getCategory(_this.id);
        })
            .map(function (res) { return res[0]; })
            .subscribe(function (res) {
            _this.currentCategory = res;
        });
        this.categoriesService.categories$$.subscribe(function (res) {
            _this.categories = res;
        });
    };
    ProductListComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(AddProductListComponent, {
            data: {
                categories: this.categories,
                currentCategory: this.currentCategory
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    ProductListComponent.prototype.openAddItemToCart = function (product) {
        var addToCartDialogRef = this.dialog.open(AddProductToCartComponent, {
            data: {
                product: product,
                user: this.loggedUser
            }
        });
        addToCartDialogRef.afterClosed().subscribe(function (result) { });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return ProductListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "currentCategory", void 0);
ProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/products/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _e || Object])
], ProductListComponent);

//---------------------Add Product Component .ts file--------------------
var AddProductListComponent = (function () {
    function AddProductListComponent(productService, dialogRef, data, categoriesService) {
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoriesService = categoriesService;
        this.categories = this.data.categories;
        this.current = this.data.currentCategory;
    }
    AddProductListComponent.prototype.ngOnInit = function () {
        this.initAddingProductsForm();
    };
    AddProductListComponent.prototype.initAddingProductsForm = function () {
        this.addingProductsForm = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
            'imagePath': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
            'price': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required),
            'category': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](this.current._id)
        });
    };
    AddProductListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.productService.addProductByCategory(this.addingProductsForm.value).subscribe(function (res) {
            _this.categoriesService.categoryId$$.next(res._id);
        });
    };
    AddProductListComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return AddProductListComponent;
}());
AddProductListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'add-product-list',
        template: __webpack_require__("../../../../../src/app/products/product-list/add-product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-list.component.css")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _g || Object, Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _h || Object])
], AddProductListComponent);

//----------Add Product To Cart Component-----------
var AddProductToCartComponent = (function () {
    function AddProductToCartComponent(cartService, productService, dialogRef, data, categoriesService) {
        this.cartService = cartService;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoriesService = categoriesService;
        this.product = this.data.product;
        this.user = this.data.user;
    }
    AddProductToCartComponent.prototype.ngOnInit = function () {
        this.initAddingProductToCartForm();
    };
    AddProductToCartComponent.prototype.initAddingProductToCartForm = function () {
        this.addingProductToCartForm = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
            'amount': new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */](1, __WEBPACK_IMPORTED_MODULE_8__angular_forms__["k" /* Validators */].required)
        });
    };
    AddProductToCartComponent.prototype.onSubmit = function () {
        var newCartItem = new __WEBPACK_IMPORTED_MODULE_10__cart_cart_model__["a" /* Cart */](this.product.name, this.product.price * this.addingProductToCartForm.controls.amount.value, this.addingProductToCartForm.controls.amount.value);
        this.cartService.addedProduct.emit(newCartItem);
    };
    AddProductToCartComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    return AddProductToCartComponent;
}());
AddProductToCartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'add-product-to-cart',
        template: __webpack_require__("../../../../../src/app/products/product-list/add-product-to-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/product-list/product-list.component.css")]
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_cart_service__["a" /* CartService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_products_service__["a" /* ProductsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _l || Object, Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _m || Object])
], AddProductToCartComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerPosition{\r\n    float: right;\r\n}\r\n.cartPosition{\r\n    width: 20%;\r\n}\r\n.containerStyle{\r\n    overflow: hidden;\r\n    min-height: 500px;\r\n}\r\n.contentPageStyle{\r\n    overflow: hidden;\r\n}\r\n\r\n.navigation-container{\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n}\r\n\r\n.categories{\r\n    -ms-flex-positive: 2;\r\n        flex-grow: 2;\r\n}\r\n\r\n.side-btn{\r\n    height: 52px;\r\n    margin-right: 4px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize class=\"containerStyle\">\r\n  <mat-drawer #drawer class=\"cartPosition\" mode=\"side\">\r\n    <div class=\"col-md-12\">\r\n      <app-cart></app-cart>\r\n    </div>\r\n  </mat-drawer>\r\n  <div class=\"contentPageStyle\">\r\n    <div class=\"headerPosition col-md-12\">\r\n      <div class=\"navigation-container\">\r\n        <button type=\"button\" class=\"btn btn-default side-btn\" mat-button (click)=\"drawer.toggle()\">\r\n          <span class=\"glyphicon glyphicon-menu-right\"></span> Cart</button>\r\n        <app-categories class=\"categories\"></app-categories>\r\n      </div>\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router___["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router___["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router___["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router___["b" /* Router */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.cartItems = [];
        this.url = 'http://localhost:4500/users/cart/';
        this.addedProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CartService.prototype.saveCartToUser = function (userId) {
        var _this = this;
        this.http.put(this.url + userId, this.cartItems).toPromise().then(function (res) { return _this.cartItems = res.json().cart; });
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categories$$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.categoryId$$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.url = 'http://localhost:4500/shopping/categories/';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    ;
    CategoriesService.prototype.getCategory = function (id) {
        return this.http.get(this.url + id).map(function (res) { return res.json(); });
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CategoriesService);

var _a;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginService = (function () {
    function LoginService(http, router, cartService) {
        this.http = http;
        this.router = router;
        this.cartService = cartService;
        this.url = 'http://localhost:4500/';
        this.loggedInUser = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    LoginService.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuth, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get(this.url + 'isAuthenticated').toPromise()];
                    case 1:
                        isAuth = _a.sent();
                        return [2 /*return*/, isAuth];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginService.prototype.postLogin = function (data) {
        var _this = this;
        return this.http.post(this.url + 'login', data).map(function (res) {
            document.cookie = JSON.stringify(res.json());
            _this.router.navigate(['../shopping-main']);
            if (res.json().cart.length > 0) {
                _this.cartService.cartItems = res.json().cart;
            }
        });
    };
    LoginService.prototype.logout = function () {
        this.http.get(this.url + 'logout').toPromise().then(function (res) {
            delete document.cookie;
            document['cookie'] = '';
            window.location.href = res.url;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cart_service__["a" /* CartService */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.url = 'http://localhost:4500/shopping/products';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ProductsService.prototype.addProductByCategory = function (data) {
        return this.http.put(this.url, JSON.stringify(data), this.options).map(function (res) { return res.json(); });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductsService);

var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = (function () {
    function RegisterService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:4500/';
        this.userLoginDetails = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    RegisterService.prototype.postRegister = function (data) {
        return this.http.put(this.url + 'users', data).map(function (res) { return res.json(); });
    };
    RegisterService.prototype.checkEmail = function (email) {
        return this.http.post(this.url + 'checkEmail', email).map(function (res) { return res.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterService);

var _a, _b;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map