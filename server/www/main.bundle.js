webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/products/product-list/product-list.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var auth_guard_1 = __webpack_require__("./src/app/auth/auth-guard.ts");
var register_component_1 = __webpack_require__("./src/app/login/register/register.component.ts");
var order_component_1 = __webpack_require__("./src/app/order/order.component.ts");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    {
        path: 'shopping-main', canActivate: [auth_guard_1.AuthGuard], component: products_component_1.ProductsComponent, children: [
            { path: ':category/products', component: product_list_component_1.ProductListComponent },
            { path: 'search', component: search_component_1.SearchComponent }
        ]
    },
    { path: 'order', canActivate: [auth_guard_1.AuthGuard], component: order_component_1.OrderComponent }
    // { path: '', canActivate: [AuthGuard], component: ProductsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(appRoutes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <ng-container>\r\n        <router-outlet></router-outlet>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
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
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var sidenav_1 = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var products_component_1 = __webpack_require__("./src/app/products/products.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/products/product-list/product-list.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var cart_component_1 = __webpack_require__("./src/app/products/cart/cart.component.ts");
var categories_component_1 = __webpack_require__("./src/app/products/categories/categories.component.ts");
var categories_header_component_1 = __webpack_require__("./src/app/products/categories/categories-header/categories-header.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var categories_service_1 = __webpack_require__("./src/app/services/categories.service.ts");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var auth_guard_1 = __webpack_require__("./src/app/auth/auth-guard.ts");
var register_component_1 = __webpack_require__("./src/app/login/register/register.component.ts");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var cart_service_1 = __webpack_require__("./src/app/services/cart.service.ts");
var order_component_1 = __webpack_require__("./src/app/order/order.component.ts");
var ng2_opd_popup_1 = __webpack_require__("./node_modules/ng2-opd-popup/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            products_component_1.ProductsComponent,
            product_list_component_1.ProductListComponent,
            search_component_1.SearchComponent,
            cart_component_1.CartComponent,
            categories_component_1.CategoriesComponent,
            categories_header_component_1.CategoriesHeaderComponent,
            product_list_component_1.AddProductListComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            product_list_component_1.AddProductToCartComponent,
            order_component_1.OrderComponent
        ],
        entryComponents: [product_list_component_1.AddProductListComponent, product_list_component_1.AddProductToCartComponent],
        imports: [
            ng2_opd_popup_1.PopupModule.forRoot(),
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            sidenav_1.MatSidenavModule,
            animations_1.BrowserAnimationsModule,
            material_1.MatDialogModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
        ],
        providers: [categories_service_1.CategoriesService, products_service_1.ProductsService, login_service_1.LoginService, auth_guard_1.AuthGuard, register_service_1.RegisterService, cart_service_1.CartService, product_list_component_1.ProductListComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth/auth-guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
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
                        if (res['status'] == 401) {
                            this.router.navigate(['login']);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".logoutBtn{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n          <a routerLink=\"/shopping-main\" class=\"navbar-brand\">Shopping Cart Project</a>\r\n      </div>\r\n      <div>\r\n          <ul class=\"nav navbar-nav\">\r\n              <!-- <li routerLinkActive=\"active\"><a routerLink=\"/search\">Search</a></li> -->\r\n              <li routerLinkActive=\"active\"><a routerLink=\"/shopping-main\">Products</a></li>\r\n              <li class=\"logoutBtn\" routerLinkActive=\"active\"><a (click)=\"onLogout()\">Logout</a></li>\r\n          </ul>\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n             <li class=\"navbar-text\">{{userEmail}}</li>\r\n          </ul>\r\n      </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var HeaderComponent = (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.loggedInUser.subscribe(function (user) {
            user ? _this.userEmail = user['email'] : _this.userEmail = '';
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.loginService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        template: __webpack_require__("./src/app/header/header.component.html"),
        styles: [__webpack_require__("./src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"col-md-4\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">User Name</label>\r\n                        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"username\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" >\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <p>{{errorMessage}}</p>\r\n                    <button type=\"sumbit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\r\n                    <button type=\"button\" class=\"btn btn-primery\" (click)=\"onRegister()\">Register</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        Details about the store\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        runnig images of products availble on the store\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
var registerdUsername;
var registerdUserPass;
var LoginComponent = (function () {
    function LoginComponent(loginService, router, registerService) {
        this.loginService = loginService;
        this.router = router;
        this.registerService = registerService;
        this.isAuthenticated = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inItLoginForm(registerdUsername, registerdUserPass);
        this.registerService.userLoginDetails.first().subscribe(function (user) {
            registerdUsername = user.name;
            registerdUserPass = user.pass;
        });
        this.loginService.errorMessage.subscribe(function (msg) {
            _this.errorMessage = msg;
        });
    };
    LoginComponent.prototype.inItLoginForm = function (name, pass) {
        this.loginForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(name, forms_1.Validators.required),
            'password': new forms_1.FormControl(pass, forms_1.Validators.required)
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.loginService.postLogin(this.loginForm.value);
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "isAuthenticated", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _c || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/login/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 col-offset-3\">\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <ng-container *ngIf=\"view === 'partOne'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"id\">Id</label>\r\n                        <input type=\"number\" id=\"id\" class=\"form-control\" formControlName=\"idNumber\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">Email</label>\r\n                        <p class=\"pull-right\" *ngIf=\"emailMessage\">{{emailMessage}}</p>\r\n                        <input #email type=\"text\" id=\"email\" class=\"form-control\"\r\n                        formControlName=\"email\" (change)=\"validateEmail(email.value)\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"pass\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"confPassword\">Confirm Password</label>\r\n                        <input type=\"password\" id=\"confPassword\" class=\"form-control\" [(ngModel)]=\"confPass\" [ngModelOptions]=\"{standalone: true}\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onNext()\"\r\n                     [disabled]=\"confPass != pass || confPass == null || pass == null || emailMessage == 'Email is taken'\">Next</button>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div>\r\n                        <p *ngIf=\"confPass != pass && confPass != null && pass != null\">Confim password doesn't match password</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"view === 'partTwo'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\">City</label>\r\n                        <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"street\">Street</label>\r\n                        <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Name</label>\r\n                        <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"lastName\">Last Name</label>\r\n                        <input type=\"text\" id=\"lastName\" class=\"form-control\" formControlName=\"last\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onBack()\">Back</button>\r\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">Submit</button>\r\n                </div>\r\n            </ng-container>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var register_service_1 = __webpack_require__("./src/app/services/register.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var RegisterComponent = (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.userPassword = new core_1.EventEmitter();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.view = 'partOne';
        this.registerFormInit();
    };
    RegisterComponent.prototype.registerFormInit = function () {
        this.registerForm = new forms_1.FormGroup({
            'idNumber': new forms_1.FormControl(null, forms_1.Validators.required),
            'email': new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            'password': new forms_1.FormControl(null, forms_1.Validators.required),
            'city': new forms_1.FormControl(null, forms_1.Validators.required),
            'street': new forms_1.FormControl(null, forms_1.Validators.required),
            'name': new forms_1.FormControl(null, forms_1.Validators.required),
            'last': new forms_1.FormControl(null, forms_1.Validators.required),
            'role': new forms_1.FormControl('user')
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
                if (res == 'Email is taken') {
                    _this.emailMessage = res;
                    return _this.registerForm.controls['email'].setErrors({ 'incorrect': true });
                }
                _this.emailMessage = '';
                _this.registerForm.controls['email'].setErrors(null);
            });
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerService.postRegister(this.registerForm.value).subscribe(function (res) {
            _this.registerService.userLoginDetails.next({ name: res.name, pass: res.password });
            _this.router.navigate(['/login']);
        });
    };
    return RegisterComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "userPassword", void 0);
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__("./src/app/login/register/register.component.html"),
        styles: [__webpack_require__("./src/app/login/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/order/order.component.css":
/***/ (function(module, exports) {

module.exports = ".clickble{\r\n    cursor: pointer;\r\n    display: inline;\r\n}\r\n.titleStyle{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n.btnStyle{\r\n    -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;\r\n            box-shadow: inset 0px 1px 0px 0px #ffffff;\r\n    background-color: #fcfcfc;\r\n    border-radius: 6px;\r\n    border: 1px solid #dcdcdc;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #777777;\r\n    font-family: Arial;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    padding: 6px 24px;\r\n    text-decoration: none;\r\n    text-shadow: 0px 1px 0px #ffffff;\r\n}\r\n.greetingStyle{\r\n    text-align: center;\r\n}\r\n.inputsStyle{\r\n    text-align: center;\r\n}\r\n#recite{\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <h4 class=\"titleStyle\">My Cart</h4>\r\n            <h4 class=\"pull-right clickble\" (click)=\"navigateBack()\">Go Back Shopping</h4>\r\n        </div>\r\n        <hr style=\"margin-top:0;\" />\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">#</th>\r\n                    <th scope=\"col\">Item Name</th>\r\n                    <th scope=\"col\">Amount</th>\r\n                    <th scope=\"col\">Item Price</th>\r\n                    <th scope=\"col\">Price</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of cartItems; let i = index\">\r\n                    <th scope=\"row\">{{i+1}}</th>\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.amount}}</td>\r\n                    <td>{{item.price}}$</td>\r\n                    <td>{{item.price*item.amount}}$</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <h5>\r\n            <b>Total Price: {{totalSum}}$</b>\r\n        </h5>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div>\r\n            <h4 class=\"titleStyle\">Order</h4>\r\n            <h4 class=\"pull-right\">\r\n                <b>{{user.name}} {{user.last}}</b>\r\n            </h4>\r\n        </div>\r\n        <hr style=\"margin-top:0;\" />\r\n        <form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"city\">City</label>\r\n                        <input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"street\">Street</label>\r\n                        <input type=\"text\" id=\"street\" class=\"form-control\" formControlName=\"street\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"shipping-date\">Shipping Date</label>\r\n                        <input type=\"date\" id=\"shipping-date\" class=\"form-control\" formControlName=\"date\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <button type=\"sumbit\" class=\"btn btn-success\" [disabled]=\"!orderForm.valid\">Order</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<popup>\r\n    <h1 class=\"greetingStyle\">Great!</h1>\r\n    <h4 class=\"inputsStyle\">We've placed your order, our delivery should get to your door step soon, thank you for shopping with us</h4>\r\n    <div class=\"inputsStyle\">\r\n        <div style=\"margin-bottom: 10px;\">\r\n            <input type=\"checkbox\" #recite checked>\r\n            <span>\r\n                Download Recite\r\n            </span>\r\n        </div>\r\n        <button class=\"btnStyle\" (click)=\"logout(recite)\">Logout</button>\r\n        <button class=\"btnStyle\" (click)=\"backShopping(recite)\">I'd like to shop some more!</button>\r\n    </div>\r\n</popup>\r\n<div id=\"recite\">\r\n    <div *ngFor=\"let item of cartItems\">\r\n        <h4>item: {{item.name}}, price: {{item.price}}, amount: {{item.amount}}</h4>\r\n        <h3>total: {{totalSum}}</h3>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var cart_service_1 = __webpack_require__("./src/app/services/cart.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_opd_popup_1 = __webpack_require__("./node_modules/ng2-opd-popup/index.js");
var OrderComponent = (function () {
    function OrderComponent(router, cartService, loginService, popup) {
        this.router = router;
        this.cartService = cartService;
        this.loginService = loginService;
        this.popup = popup;
        this.recite = ['Recite \r\n'];
        this.totalSum = 0;
        this.user = {
            name: '',
            last: ''
        };
        this.showing = false;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initOrderForm(null, null);
        if (this.cartService.cartItems.length != 0) {
            this.cartItems = this.cartService.cartItems;
            this.cartService.cartItems.forEach(function (item) {
                _this.totalSum += item.price * item.amount;
            });
            this.loginService.loggedInUser.subscribe(function (user) {
                _this.user = user;
                _this.initOrderForm(user['city'], user['street']);
            });
        }
        else
            this.router.navigate(['/shopping-main']);
        this.initPopupOption();
    };
    OrderComponent.prototype.navigateBack = function () {
        this.router.navigate(['/shopping-main']);
    };
    OrderComponent.prototype.initOrderForm = function (city, street) {
        this.orderForm = new forms_1.FormGroup({
            'city': new forms_1.FormControl(city, forms_1.Validators.required),
            'street': new forms_1.FormControl(street, forms_1.Validators.required),
            'date': new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    OrderComponent.prototype.onSubmit = function () {
        this.popup.show();
    };
    OrderComponent.prototype.initPopupOption = function () {
        this.popup.options = {
            animationDuration: 0.3,
            header: 'Order complete',
            color: '#3ac47d',
            showButtons: false
        };
    };
    OrderComponent.prototype.backShopping = function (recite) {
        if (recite.checked)
            this.downloadRecite();
        this.cartService.clearCart();
        this.router.navigate(['/shopping-main']);
    };
    OrderComponent.prototype.logout = function (recite) {
        if (recite.checked)
            this.downloadRecite();
        this.loginService.logout();
    };
    OrderComponent.prototype.downloadRecite = function () {
        var a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob(this.createRecite(), { type: 'text/csv' }));
        a.download = 'recite.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    OrderComponent.prototype.createRecite = function () {
        var _this = this;
        this.cartItems.forEach(function (item) {
            _this.recite.push('Item name: ' + item.name + ', Amount: ' + item.amount + ', Price: ' + item.price + '\r\n');
        });
        this.recite.push('Total Price: ' + this.totalSum);
        return this.recite;
        // let recite = document.getElementById('recite');
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    core_1.Component({
        selector: 'app-order',
        template: __webpack_require__("./src/app/order/order.component.html"),
        styles: [__webpack_require__("./src/app/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof cart_service_1.CartService !== "undefined" && cart_service_1.CartService) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object, typeof (_d = typeof ng2_opd_popup_1.Popup !== "undefined" && ng2_opd_popup_1.Popup) === "function" && _d || Object])
], OrderComponent);
exports.OrderComponent = OrderComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "./src/app/products/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h3>\r\n      My Cart\r\n    </h3>\r\n    <hr>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4>\r\n      Products:\r\n    </h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let item of cartService.cartItems\" class=\"list-group-item listStyle\">\r\n        <ul class=\"list-group ulPosition\">\r\n          <div class=\"hoverToShow\" *ngIf=\"!hoverDelete\">\r\n            <button class=\"btn btn-danger btnStyle\" (click)=\"hoverDelete = true\">\r\n              <span class=\"glyphicon glyphicon-remove\"></span>\r\n            </button>\r\n            <button class=\"btn btn-success btnStyle\" (click)=\"editItem(item)\">\r\n              <span class=\"glyphicon glyphicon-edit\"></span>\r\n            </button>\r\n          </div>\r\n          <div class=\"hoverToShow\" *ngIf=\"hoverDelete\">\r\n            <p class=\"pStyle\">Are you sure you want to delete {{item.name}} from the cart?</p>\r\n            <div style=\"flex-direction:row-reverse\">\r\n              <button class=\"btn btn-danger btnStyle\" (click)=\"removeItemFromCart(item)\">\r\n                <span class=\"glyphicon glyphicon-trash\"></span>\r\n              </button>\r\n              <button class=\"btn btn-primary btnStyle\" (click)=\"hoverDelete = false\">\r\n                <span class=\"glyphicon glyphicon-circle-arrow-left\"></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <li class=\"list-group-item listStyle\">Name: {{item.name}}</li>\r\n          <li class=\"list-group-item listStyle\">Quantity: {{item.amount}} * {{item.price}}$</li>\r\n          <li class=\"list-group-item listStyle\">Price: {{item.price*item.amount}}$</li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4 style=\"display: inline-flex;\">\r\n      Total: {{cartService.getTotalPrice()}}$\r\n    </h4>\r\n    <button class=\"btn btn-primary pull-right\" (click)=\"orderCart()\">Order</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = ".btnStyle {\n  position: relative;\n  margin: 4px;\n  -webkit-box-shadow: 2px 2px 4px grey;\n          box-shadow: 2px 2px 4px grey; }\n\n.hoverToShow {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.hoverToShow:hover {\n  opacity: 1; }\n\n.ulPosition {\n  position: relative; }\n\n.pStyle {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.4);\n  text-align: center;\n  border-radius: 4px;\n  margin: 0px; }\n\n.listStyle {\n  padding: 6px 9px; }\n"

/***/ }),

/***/ "./src/app/products/cart/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var cart_service_1 = __webpack_require__("./src/app/services/cart.service.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var product_list_component_1 = __webpack_require__("./src/app/products/product-list/product-list.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var CartComponent = (function () {
    function CartComponent(router, cartService, loginService, productListComponent) {
        this.router = router;
        this.cartService = cartService;
        this.loginService = loginService;
        this.productListComponent = productListComponent;
        this.ngUnsubscribe = new Subject_1.Subject();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hoverDelete = false;
        this.loginService.loggedInUser.subscribe(function (user) {
            _this.userId = user['_id'];
            _this.cartService.cartItems = user['cart'];
            // this.getTotalPrice();
        });
        this.cartService.addedProduct
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (item) {
            for (var _i = 0, _a = _this.cartService.cartItems; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.name === item.name) {
                    i.amount += item.amount;
                    _this.cartService.updateCartItem(_this.userId, i);
                    return;
                }
            }
            _this.cartService.cartItems.push(item);
            _this.cartService.saveItemToCart(_this.userId, item);
        });
    };
    CartComponent.prototype.getTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.cartService.cartItems.forEach(function (item) {
            _this.totalPrice += item.price * item.amount;
        });
    };
    CartComponent.prototype.removeItemFromCart = function (item) {
        this.hoverDelete = false;
        this.cartService.deleteItemFromCart(this.userId, item);
        this.cartService.cartItems = this.cartService.cartItems.filter(function (cartItem) {
            return cartItem.name !== item.name;
        });
    };
    CartComponent.prototype.editItem = function (item) {
        this.productListComponent.openAddItemToCart(item, true);
    };
    CartComponent.prototype.orderCart = function () {
        this.ngOnDestroy();
        this.router.navigate(['/order']);
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'app-cart',
        template: __webpack_require__("./src/app/products/cart/cart.component.html"),
        styles: [__webpack_require__("./src/app/products/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof cart_service_1.CartService !== "undefined" && cart_service_1.CartService) === "function" && _b || Object, typeof (_c = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _c || Object, typeof (_d = typeof product_list_component_1.ProductListComponent !== "undefined" && product_list_component_1.ProductListComponent) === "function" && _d || Object])
], CartComponent);
exports.CartComponent = CartComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "./src/app/products/cart/cart.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cart = (function () {
    function Cart(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ "./src/app/products/categories/categories-header/categories-header.component.css":
/***/ (function(module, exports) {

module.exports = ".headerPosition{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    flex-direction: row;\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .navbar-nav.headerPosition {\r\n        margin: 0;\r\n        float: none;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/categories/categories-header/categories-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav headerPosition\">\r\n                <li [routerLink]=\"[category.name,'products']\" *ngFor=\"let category of categories\" [id]=\"category._id\" (click)=\"displayProd($event)\"\r\n                    style=\"cursor: pointer; \">\r\n                    <a>| {{ category.name }}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/products/categories/categories-header/categories-header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var categories_service_1 = __webpack_require__("./src/app/services/categories.service.ts");
var CategoriesHeaderComponent = (function () {
    function CategoriesHeaderComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.id = '';
    }
    CategoriesHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (data) {
            _this.categoriesService.categories$$.next(data);
            _this.categories = data;
        }, function (err) { return console.log('err: ' + err); }, function () { });
    };
    CategoriesHeaderComponent.prototype.displayProd = function (data) {
        this.categoriesService.categoryId$$.next(data.currentTarget.id);
    };
    return CategoriesHeaderComponent;
}());
CategoriesHeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-categories-header',
        template: __webpack_require__("./src/app/products/categories/categories-header/categories-header.component.html"),
        styles: [__webpack_require__("./src/app/products/categories/categories-header/categories-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" && _a || Object])
], CategoriesHeaderComponent);
exports.CategoriesHeaderComponent = CategoriesHeaderComponent;
var _a;
//# sourceMappingURL=categories-header.component.js.map

/***/ }),

/***/ "./src/app/products/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-categories-header></app-categories-header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/categories/categories.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    core_1.Component({
        selector: 'app-categories',
        template: __webpack_require__("./src/app/products/categories/categories.component.html"),
        styles: [__webpack_require__("./src/app/products/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "./src/app/products/product-list/add-product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Product</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form [formGroup]=\"addingProductsForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"imagePath\">Image URL</label>\r\n                <input type=\"file\" id=\"imagePath\" class=\"form-control\" (change)=\"onFileChange($event)\" #imagePath>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6 pull-right\">\r\n              <div class=\"form-group\">\r\n                <img [src]=\"imagePreview\" alt=\"\" class=\"img-responsive imgStyle\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"price\">Price</label>\r\n                <input type=\"number\" id=\"price\" class=\"form-control\" formControlName=\"price\" min=\"1\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <div *ngIf=\"current.name == 'General'\">\r\n                  <label for=\"category\">Category</label>\r\n                  <select formControlName=\"category\" id=\"category\" class=\"form-control\">\r\n                    <option value=\"\" disabled=\"true\">Choose Category</option>\r\n                    <option *ngFor=\"let category of categories\" [value]=\"category._id\">{{ category.name }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <p>{{errorMsg}}</p>\r\n              <button type=\"sumbit\" class=\"btn btn-success\" [disabled]=\"!addingProductsForm.valid\">Save</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/product-list/add-product-to-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Product To Cart</h1>\r\n<div mat-dialog-content>\r\n    <mat-form-field>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <p>\r\n                    <b>Product Name:</b> {{product.name}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <p>\r\n                    <b>Product Price:</b> {{product.price}}</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n                <form [formGroup]=\"addingProductToCartForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"amount\">Amount</label>\r\n                                <input type=\"number\" id=\"amount\" class=\"form-control\" formControlName=\"amount\" #amount min=\"1\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-12\">\r\n                            <button type=\"sumbit\" class=\"btn btn-success\" (click)=\"onClose()\" [disabled]=\"!addingProductToCartForm.valid\">Save To Cart</button>\r\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onClose()\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-dialog-container{\r\n    margin-top: -250px;    \r\n}\r\n\r\n.imgStyle{\r\n    max-height: 130px;\r\n}\r\n\r\n.editBtnStyle{\r\n    opacity: 0;\r\n    margin: 5px;\r\n    height: 20%;\r\n    width: 18%;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 2px;\r\n    position: absolute;\r\n    -webkit-transition: opacity 0.2s ease;\r\n    transition: opacity 0.2s ease;    \r\n}\r\n\r\n.styleList{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.styleList:hover .editBtnStyle{\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"currentCategory && currentCategory.productList\">\r\n  <div class=\"col-md-2\" *ngFor=\"let product of currentCategory.productList\">\r\n    <a class=\"list-group-item clearfix styleList\" style=\"cursor:pointer\" (click)=\"openAddItemToCart(product,false)\">\r\n      <p>name: {{product.name}}</p>\r\n      <p>price: {{product.price}}$</p>\r\n      <div class=\"pull-right\">\r\n        <img src=\"{{product.imagePath}}\" alt=\"{{product.name}}\" class=\"img-responsive\" style=\"max-height: 50px;\">\r\n      </div>\r\n      <div *ngIf=\"loggedUser.role == 'admin'\">\r\n        <button class=\"btn btn-success editBtnStyle\" (click)=\"editItem($event,product)\">\r\n          <span class=\"glyphicon glyphicon-edit\"></span>\r\n        </button>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"col-md-2\" *ngIf=\"loggedUser.role == 'admin'\">\r\n    <a class=\"list-group-item clearfix styleList\" style=\"cursor:pointer; height: 132px\" mat-raised-button (click)=\"openDialog()\">\r\n      <h2>Add <span style=\"font-size: 20px\" class=\"glyphicon glyphicon-plus\"></span> Product</h2>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var categories_service_1 = __webpack_require__("./src/app/services/categories.service.ts");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var products_service_1 = __webpack_require__("./src/app/services/products.service.ts");
var cart_model_1 = __webpack_require__("./src/app/products/cart/cart.model.ts");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var cart_service_1 = __webpack_require__("./src/app/services/cart.service.ts");
var ProductListComponent = (function () {
    function ProductListComponent(loginService, activatedRoute, categoriesService, router, dialog) {
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.categoriesService = categoriesService;
        this.router = router;
        this.dialog = dialog;
        this.ngUnsubscribe = new Subject_1.Subject();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.loggedInUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
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
    ProductListComponent.prototype.editItem = function (event, product) {
        event.stopPropagation();
        this.openDialog(product);
    };
    ProductListComponent.prototype.openDialog = function (product) {
        var _this = this;
        var dialogRef = this.dialog.open(AddProductListComponent, {
            data: {
                product: product,
                categories: this.categories,
                currentCategory: this.currentCategory
            }
        });
        dialogRef.afterClosed().subscribe(function (result) { return result ? _this.currentCategory = result : null; });
    };
    ProductListComponent.prototype.openAddItemToCart = function (product, isEditMode) {
        var addToCartDialogRef = this.dialog.open(AddProductToCartComponent, {
            data: {
                product: product,
                user: this.loggedUser,
                isEditMode: isEditMode
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
    core_1.Output(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "currentCategory", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'app-product-list',
        template: __webpack_require__("./src/app/products/product-list/product-list.component.html"),
        styles: [__webpack_require__("./src/app/products/product-list/product-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof material_1.MatDialog !== "undefined" && material_1.MatDialog) === "function" && _e || Object])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//---------------------Add Product As Admin Component .ts file--------------------
var AddProductListComponent = (function () {
    function AddProductListComponent(domSanitizer, productService, dialogRef, data, categoriesService) {
        this.domSanitizer = domSanitizer;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoriesService = categoriesService;
        this.categories = this.data.categories;
        this.current = this.data.currentCategory;
        this.product = this.data.product;
    }
    AddProductListComponent.prototype.ngOnInit = function () {
        this.product ? this.editMode = true : this.editMode = false;
        this.initAddingProductsForm();
    };
    AddProductListComponent.prototype.initAddingProductsForm = function () {
        if (this.product) {
            this.addingProductsForm = new forms_1.FormGroup({
                'name': new forms_1.FormControl(this.product.name, forms_1.Validators.required),
                'imagePath': new forms_1.FormControl(this.product.imagePath, forms_1.Validators.required),
                'price': new forms_1.FormControl(this.product.price, forms_1.Validators.required),
                'category': new forms_1.FormControl(this.current._id)
            });
        }
        else {
            this.addingProductsForm = new forms_1.FormGroup({
                'name': new forms_1.FormControl(null, forms_1.Validators.required),
                'imagePath': new forms_1.FormControl(null, forms_1.Validators.required),
                'price': new forms_1.FormControl(null, forms_1.Validators.required),
                'category': new forms_1.FormControl(this.current._id)
            });
        }
    };
    AddProductListComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.addingProductsForm.controls.imagePath.setValue(_this.domSanitizer.bypassSecurityTrustUrl(reader.result)['changingThisBreaksApplicationSecurity']);
                _this.imagePreview = _this.addingProductsForm.controls.imagePath.value;
            };
        }
    };
    AddProductListComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editMode) {
            this.addingProductsForm.value['productId'] = this.product._id;
            this.productService.updateProductByCategory(this.addingProductsForm.value).subscribe(function (res) {
                _this.categoriesService.getCategory(_this.addingProductsForm.controls.category.value).subscribe(function (res) {
                    _this.dialogRef.close(res[0]);
                });
            });
        }
        else {
            this.productService.addProductByCategory(this.addingProductsForm.value).subscribe(function (res) {
                _this.categoriesService.categoryId$$.next(res._id);
                _this.dialogRef.close();
            }, function (err) { return _this.errorMsg = JSON.parse(err._body).errorMassage; });
        }
    };
    AddProductListComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return AddProductListComponent;
}());
AddProductListComponent = __decorate([
    core_1.Component({
        selector: 'add-product-list',
        template: __webpack_require__("./src/app/products/product-list/add-product-list.component.html"),
        styles: [__webpack_require__("./src/app/products/product-list/product-list.component.css")]
    }),
    __param(3, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_f = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _f || Object, typeof (_g = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" && _g || Object, typeof (_h = typeof material_1.MatDialogRef !== "undefined" && material_1.MatDialogRef) === "function" && _h || Object, Object, typeof (_j = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" && _j || Object])
], AddProductListComponent);
exports.AddProductListComponent = AddProductListComponent;
//----------Add Product To Cart Component-----------
var user;
var AddProductToCartComponent = (function () {
    function AddProductToCartComponent(loginService, cartService, productService, dialogRef, data, categoriesService) {
        this.loginService = loginService;
        this.cartService = cartService;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoriesService = categoriesService;
        this.product = this.data.product;
        this.isEditMode = this.data.isEditMode;
        this.ngUnsubscribe = new Subject_1.Subject();
    }
    AddProductToCartComponent.prototype.ngOnInit = function () {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        this.initAddingProductToCartForm();
    };
    AddProductToCartComponent.prototype.initAddingProductToCartForm = function () {
        this.addingProductToCartForm = new forms_1.FormGroup({
            'amount': new forms_1.FormControl(this.product.amount ? this.product.amount : 1, forms_1.Validators.required)
        });
    };
    AddProductToCartComponent.prototype.onSubmit = function () {
        var _this = this;
        var newCartItem = new cart_model_1.Cart(this.product.name, this.product.price, this.addingProductToCartForm.controls.amount.value);
        this.loginService.loggedInUser
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (user) {
            if (_this.isEditMode) {
                for (var _i = 0, _a = _this.cartService.cartItems; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.name === newCartItem.name ? i.amount = newCartItem.amount : null;
                }
                return _this.cartService.updateCartItem(user['_id'], newCartItem);
            }
            return _this.cartService.addedProduct.emit(newCartItem);
        });
    };
    AddProductToCartComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    AddProductToCartComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return AddProductToCartComponent;
}());
AddProductToCartComponent = __decorate([
    core_1.Component({
        selector: 'add-product-to-cart',
        template: __webpack_require__("./src/app/products/product-list/add-product-to-cart.component.html"),
        styles: [__webpack_require__("./src/app/products/product-list/product-list.component.css")]
    }),
    __param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [typeof (_k = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _k || Object, typeof (_l = typeof cart_service_1.CartService !== "undefined" && cart_service_1.CartService) === "function" && _l || Object, typeof (_m = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" && _m || Object, typeof (_o = typeof material_1.MatDialogRef !== "undefined" && material_1.MatDialogRef) === "function" && _o || Object, Object, typeof (_p = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" && _p || Object])
], AddProductToCartComponent);
exports.AddProductToCartComponent = AddProductToCartComponent;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "./src/app/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ".headerPosition{\r\n    float: right;\r\n}\r\n.cartPosition{\r\n    width: 20%;\r\n}\r\n.containerStyle{\r\n    overflow: hidden;\r\n    min-height: 500px;\r\n}\r\n.contentPageStyle{\r\n    overflow: hidden;\r\n}\r\n.navigation-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.categories{\r\n    -webkit-box-flex: 2;\r\n        -ms-flex-positive: 2;\r\n            flex-grow: 2;\r\n}\r\n.side-btn{\r\n    height: 52px;\r\n    margin-right: 4px;\r\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize class=\"containerStyle\">\r\n  <mat-drawer #drawer class=\"cartPosition\" mode=\"side\">\r\n    <div class=\"col-md-12\">\r\n      <app-cart></app-cart>\r\n    </div>\r\n  </mat-drawer>\r\n  <div class=\"contentPageStyle\">\r\n    <div class=\"headerPosition col-md-12\">\r\n      <div class=\"navigation-container\">\r\n        <button #myBtn type=\"button\" class=\"btn btn-default side-btn\" mat-button \r\n        (click)=\"drawer.toggle(); toggleClick = !toggleClick\">\r\n          <span [ngClass]=\"toggleClick ? 'glyphicon glyphicon-menu-right' : 'glyphicon glyphicon-menu-left'\"></span>\r\n          Cart\r\n        </button>\r\n        <app-categories class=\"categories\"></app-categories>\r\n      </div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var _1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var login_service_1 = __webpack_require__("./src/app/services/login.service.ts");
var ProductsComponent = (function () {
    function ProductsComponent(route, router, loginService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.toggleClick = true;
        this.loginService.getUser();
        this.myBtn.nativeElement.click();
    };
    return ProductsComponent;
}());
__decorate([
    core_1.ViewChild('myBtn'),
    __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
], ProductsComponent.prototype, "myBtn", void 0);
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        template: __webpack_require__("./src/app/products/products.component.html"),
        styles: [__webpack_require__("./src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof _1.ActivatedRoute !== "undefined" && _1.ActivatedRoute) === "function" && _b || Object, typeof (_c = typeof _1.Router !== "undefined" && _1.Router) === "function" && _c || Object, typeof (_d = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _d || Object])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  search works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        template: __webpack_require__("./src/app/search/search.component.html"),
        styles: [__webpack_require__("./src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "./src/app/services/cart.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.cartItems = [];
        this.totalPrice = 0;
        this.url = 'http://localhost:4500/users/cart/';
        this.addedProduct = new core_1.EventEmitter();
    }
    CartService.prototype.getTotalPrice = function () {
        var _this = this;
        this.totalPrice = 0;
        this.cartItems.forEach(function (item) {
            _this.totalPrice += item.price * item.amount;
        });
        return this.totalPrice;
    };
    CartService.prototype.getUserCart = function (userId) {
        var _this = this;
        this.http.get(this.url + userId).toPromise().then(function (res) {
            _this.cartItems = res.json();
        });
    };
    CartService.prototype.saveItemToCart = function (userId, item) {
        this.http.put(this.url + userId, item).toPromise();
    };
    CartService.prototype.updateCartItem = function (userId, item) {
        this.http.post(this.url + userId, item).toPromise();
    };
    CartService.prototype.deleteItemFromCart = function (userId, item) {
        this.http.post(this.url + 'delete/' + userId, item).toPromise();
    };
    CartService.prototype.clearCart = function () {
        this.http.delete(this.url + 'deleteAll').toPromise();
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], CartService);
exports.CartService = CartService;
var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "./src/app/services/categories.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
var CategoriesService = (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categories$$ = new Subject_1.Subject();
        this.categoryId$$ = new ReplaySubject_1.ReplaySubject(1);
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], CategoriesService);
exports.CategoriesService = CategoriesService;
var _a;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var ReplaySubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
var cart_service_1 = __webpack_require__("./src/app/services/cart.service.ts");
var LoginService = (function () {
    function LoginService(http, router, cartService) {
        this.http = http;
        this.router = router;
        this.cartService = cartService;
        this.url = 'http://localhost:4500/';
        this.loggedInUser = new ReplaySubject_1.ReplaySubject(1);
        this.errorMessage = new core_1.EventEmitter();
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
                        console.log('error');
                        return [2 /*return*/, error_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginService.prototype.postLogin = function (data) {
        var _this = this;
        this.http.post(this.url + 'login', data).toPromise().then(function (res) {
            _this.loggedInUser.next(res.json());
            _this.router.navigate(['../shopping-main']);
            if (res.json().cart.length > 0) {
                _this.cartService.cartItems = res.json().cart;
            }
        }).catch(function (err) { return _this.errorMessage.emit('Name or Password is incorrect'); });
    };
    LoginService.prototype.logout = function () {
        this.http.get(this.url + 'logout').toPromise().then(function (res) {
            window.location.href = res.url;
        });
    };
    LoginService.prototype.getUser = function () {
        var _this = this;
        this.http.get(this.url + 'users/user').toPromise().then(function (res) {
            _this.loggedInUser.next(res.json()[0]);
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof cart_service_1.CartService !== "undefined" && cart_service_1.CartService) === "function" && _c || Object])
], LoginService);
exports.LoginService = LoginService;
var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "./src/app/services/products.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.url = 'http://localhost:4500/shopping/products';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ProductsService.prototype.addProductByCategory = function (data) {
        return this.http.put(this.url, data, this.options).map(function (res) { return res.json(); });
    };
    ProductsService.prototype.updateProductByCategory = function (data) {
        return this.http.patch(this.url + '/' + data.productId, data).map(function (res) { return res.json(); });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ProductsService);
exports.ProductsService = ProductsService;
var _a;
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "./src/app/services/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var Subject_1 = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var RegisterService = (function () {
    function RegisterService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:4500/';
        this.userLoginDetails = new Subject_1.Subject();
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], RegisterService);
exports.RegisterService = RegisterService;
var _a, _b;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map