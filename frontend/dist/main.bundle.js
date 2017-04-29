webpackJsonp([2,4],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    HttpService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpService.prototype.getSearchResult = function (searchParam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'search';
        return this.http
            .post(url, JSON.stringify({ searchParam: searchParam }), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.getTopFive = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'top';
        return this.http
            .get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(157);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(125);
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
    function AppComponent(httpService) {
        this.httpService = httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTopFive();
    };
    AppComponent.prototype.onSearchInputChanged = function (value) {
        this.searchHelp = new Array();
    };
    AppComponent.prototype.search = function (searchInput) {
        var _this = this;
        if (!searchInput)
            return;
        this.httpService.getSearchResult(searchInput)
            .subscribe(function (result) {
            if (result.length > 0) {
                _this.searchResult = result;
                _this.notFound = false;
                _this.getTopFive();
            }
            else {
                _this.notFound = true;
                _this.searchResult = [""];
            }
        }),
            function (error) { return console.error(error); };
    };
    ;
    AppComponent.prototype.getTopFive = function () {
        var _this = this;
        this.httpService.getTopFive()
            .subscribe(function (result) { return _this.topFive = result.reverse(); }, function (error) { return console.error(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
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

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, ".title {\n  font-size: 40px;\n  letter-spacing: 5px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  text-align: left;\n}\n\n.outline {\n  width: 105px;\n  height: 1px;\n  background-color: #03bf8d;\n  border-radius: 3px;\n  float: left;\n}\n\n.description {\n  font-size: 16px;\n  letter-spacing: 1px;\n  width: 470px;\n  text-align: justify;\n  margin-left: 0;\n  margin-bottom: 40px;\n}\n\n.search {\n\n  width: 100%;\n  background-color: #e8e8e8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 25px 23px;\n}\n\n.search input {\n  background-color: white;\n  border: none;\n  padding: 15px;\n  height: 40px;\n  width: 80%;\n}\n\n.search button{\n  width: 20%;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n}\n.search button:hover{\n\n  background: #7b7878;\n\n}\n\n.search-result{\n  text-align: left;\n  background-color: #e8e8e8;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.wrapper{\n  width: 70%;\n  display: inline-block;\n\n}\n.main{\n  text-align: center;\n}\n.left-block{\n  float:left;\n  width: 70%;\n}\n.right-block{\n  float:right;\n  width: 29%;\n}\n\n.add{\n  margin-top: 10px;\n}\n.blocks{\n  background-color: #e8e8e8;\n  width: 100%;\n  text-align: left;\n  padding: 10px;\n}\n.most-popular ul li{\n  list-style-type: decimal;\n\n}\n\n.most-popular ul{\n  padding-left: 21px;\n\n}\n\nh2{\n  font-size: 14pt;\n  padding: 5px 5px;\n  font-weight: bold;\n}\n\n.search-result-container{\n  border: 1px solid grey;\n  margin-top: 10px;\n  padding: 10px 10px;\n  width: 55%;\n  max-heigh: 400px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"wrapper\">\n    <h1 class=\"title\">DICTIONARY OF EARTH</h1>\n    <div class=\"outline\"></div>\n    <BR>\n    <div align=\"left\">\n      <div class=\"description\">\n        Develop a creative way for the public and scientists alike to learn the\n        definitions of Earth-related scientific and technical terms, using the\n        power of crowdsourcing.\n      </div>\n    </div>\n\n    <div class=\"left-block\">\n      <div class=\"search\">\n        <input (keyup)=\"onSearchInputChanged(searchInput.value)\" placeholder=\"Поиск...\" #searchInput/>\n        <button (click)=\"search(searchInput.value)\" class=\"btn-search\">Search</button>\n      </div>\n\n      <div class=\"search-result-container\">\n        <div *ngIf=\"notFound\">\n          <span>Results not found</span>\n          <br>\n          <a href=\"http://google.com\">Try to find it in Google</a>\n        </div>\n        <div *ngFor=\"let str of searchResult\">\n          <span>{{str}}</span>\n        </div>\n      </div>\n\n\n      <div class=\"top-five\">\n        <ul>\n          <li *ngFor=\"let str of topFive\">\n            <span (click)=\"search(str)\">{{str}}</span>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n\n    <div class=\"right-block\">\n      <div class=\"most-popular blocks\">\n        <h2>Popular queries</h2>\n        <!-- Ul Li elements for example -->\n        <ul>\n          <li>One</li>\n          <li>Two</li>\n        </ul>\n      </div>\n      <div class=\"add blocks\">\n        <h2>Add words</h2>\n        Lorem ipsum\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ })

},[244]);
//# sourceMappingURL=main.bundle.js.map