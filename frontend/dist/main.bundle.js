webpackJsonp([2,4],{

/***/ 126:
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
    HttpService.prototype.extractSearchData = function (res) {
        return res.json();
    };
    HttpService.prototype.makeFileRequest = function (files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", _this.baseUrl + 'upload', true);
            xhr.send(formData);
        });
    };
    HttpService.prototype.getSearchResult = function (searchParam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'search';
        return this.http
            .post(url, JSON.stringify({ searchParam: searchParam }), options)
            .map(this.extractSearchData)
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
    HttpService.prototype.getSearchHelpData = function (searchParam) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'get_keys';
        return this.http
            .post(url, JSON.stringify({ searchParam: searchParam }), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpService.prototype.saveDescription = function (key, value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseUrl + 'add_word';
        return this.http
            .post(url, JSON.stringify({ key: key, value: value }), options)
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

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(100);
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
    function AppComponent(httpService, modalService) {
        this.httpService = httpService;
        this.modalService = modalService;
        this.modalError = ''; // error message for modal
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTopFive();
        this.newKey = '';
        //this.searchResult = [];
        this.searchFirstRow = [];
        this.searchSecondRow = [];
    };
    AppComponent.prototype.addNewDescription = function (close) {
        var _this = this;
        if (!this.newValue)
            return this.modalError = 'Please, input the description of word!';
        this.httpService.saveDescription(this.newKey, this.newValue)
            .subscribe(function (result) { close(); _this.newKey = ''; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.fileChangedEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AppComponent.prototype.upload = function (c) {
        this.uploadHelper = 'Загрузка...';
        this.httpService.makeFileRequest(this.filesToUpload).then(function (result) {
            c();
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    AppComponent.prototype.search = function (searchInput) {
        var _this = this;
        if (!searchInput)
            return;
        this.httpService.getSearchResult(searchInput)
            .subscribe(function (result) {
            if (result.length > 0) {
                //this.searchResult = result;
                _this.notFound = false;
                _this.searchFirstRow = new Array();
                _this.searchSecondRow = new Array();
                for (var i = 0; i < result.length; i++) {
                    if (i % 2 == 0)
                        _this.searchSecondRow.push(result[i]);
                    else
                        _this.searchFirstRow.push(result[i]);
                }
                _this.getTopFive();
            }
            else {
                _this.notFound = true;
                //this.searchResult = [];
                _this.searchSecondRow = [];
                _this.searchFirstRow = [];
            }
        }, function (error) { return console.error(error); });
    };
    ;
    AppComponent.prototype.getTopFive = function () {
        var _this = this;
        this.httpService.getTopFive()
            .subscribe(function (result) { return _this.topFive = result; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onSearchInputChanged = function (value) {
        var _this = this;
        if (value != "") {
            this.httpService.getSearchHelpData(value)
                .subscribe(function (result) { return _this.searchHelp = result; }, function (error) { return console.error(error); });
        }
    };
    AppComponent.prototype.openModal = function () {
        this.modalError = '';
        console.log('key: ' + this.newKey);
        if (this.newKey) {
            this.incorrectInput = false;
            this.modalService.open(this.content, { size: 'lg' });
        }
        else
            this.incorrectInput = true;
    };
    AppComponent.prototype.openUpload = function () {
        this.uploadHelper = '';
        this.modalService.open(this.content1, { size: 'lg' });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content1'),
    __metadata("design:type", Object)
], AppComponent.prototype, "content1", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__(126);
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
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
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
exports.push([module.i, "button {\r\n  cursor: pointer;\r\n}\r\n\r\n.clickers {\r\n  transition: 0.4s;\r\n}\r\n\r\n.clickers:hover {\r\n  background-color: #03422f;\r\n}\r\n\r\n.title {\r\n  font-size: 30px;\r\n  letter-spacing: 5px;\r\n  font-weight: 600;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.outline {\r\n  width: 10%;\r\n  height: 1px;\r\n  background-color: #03bf8d;\r\n  border-radius: 3px;\r\n  float: left;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  width: 560px;\r\n  margin-left: 0;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  line-height: 25px;\r\n}\r\n\r\n.search {\r\n  width: 100%;\r\n  background-color: #e8e8e8;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  padding: 30px 27px;\r\n  border-radius: 3px;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.search input {\r\n  background-color: white;\r\n  border: none;\r\n  padding: 10px;\r\n  height: 45px;\r\n  width: 80%;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.search button{\r\n  width: 20%;\r\n  background: #02bf8d;\r\n  border: 0;\r\n  color: #fff;\r\n  border-radius: 0 3px 3px 0;\r\n  transition: 0.4s;\r\n}\r\n.search button:hover{\r\n  background: #037a5e;\r\n}\r\n\r\n.search-result-container {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  background-color: #e8e8e8;\r\n  height: 415px;\r\n  border-radius: 3px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.wrapper{\r\n  width: 85%;\r\n  display: inline-block;\r\n}\r\n\r\n.main{\r\n  text-align: center;\r\n}\r\n\r\n.left-block{\r\n  float:left;\r\n  width: 65%;\r\n}\r\n\r\n.right-block{\r\n  float:right;\r\n  width: 33%;\r\n}\r\n\r\n.add{\r\n  margin-top: 20px;\r\n}\r\n\r\n.blocks{\r\n  background-color: #e8e8e8;\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 20px 30px 10px 35px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.most-popular ul li{\r\n  list-style-type: decimal;\r\n\r\n}\r\n\r\n.most-popular ul li span:hover{\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.most-popular ul{\r\n  padding-left: 21px;\r\n\r\n}\r\n\r\nh2{\r\n  font-size: 18px;\r\n  padding: 5px 5px 5px 0;\r\n  font-weight: 600;\r\n}\r\n\r\n.add-file input {\r\n  background-color: white;\r\n  border: none;\r\n  padding-left: 10px;\r\n  margin-top: 20px;\r\n  height: 45px;\r\n  width: 80%;\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n\r\n.add-file button{\r\n  margin-left: -4px;\r\n  width: 19%;\r\n  height: 45px;\r\n  background: #02bf8d;\r\n  border: 0;\r\n  color: #fff;\r\n  border-radius: 0 3px 3px 0;\r\n  transition: 0.4s;\r\n}\r\n\r\n.add-file button:hover{\r\n  background: #037a5e;\r\n}\r\n\r\n.delimiter {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.or {\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.delimiter .outline {\r\n  width: 100%;\r\n  background-color: black;\r\n}\r\n\r\n.upload-file button{\r\n  margin-left: 1px;\r\n  width: 99%;\r\n  height: 45px;\r\n  background: #02bf8d;\r\n  border: 0;\r\n  color: #fff;\r\n  border-radius: 3px;\r\n  margin-bottom: 10px;\r\n  transition: 0.4s;\r\n}\r\n\r\n.upload-file button:hover{\r\n  background: #037a5e;\r\n}\r\n\r\n.incorrect-input-message{\r\n  color: red;\r\n  max-height: 7px;\r\n  padding-left: 5px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.add-description-btn{\r\n  background: #02bf8d;\r\n  color: white;\r\n}\r\n\r\n.key-result-row{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  padding: 20px 30px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.key-result-container{\r\n\r\n  float: left;\r\n  text-align: left;\r\n  min-width: 50%;\r\n  min-height: 50%;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  margin-left: 15px;\r\n}\r\n\r\n.value-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"wrapper\">\r\n    <h1 class=\"title\">DICTIONARY OF EARTH</h1>\r\n    <div class=\"outline\"></div>\r\n    <div align=\"left\">\r\n      <div class=\"description\">\r\n        Develop a creative way for the public and scientists alike to learn the\r\n        definitions of Earth-related scientific and technical terms, using the\r\n        power of crowdsourcing.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"left-block\">\r\n      <div class=\"search\">\r\n        <input (keyup)=\"onSearchInputChanged(searchInput.value)\" placeholder=\"Type the word...\" #searchInput/>\r\n        <button (click)=\"search(searchInput.value)\" class=\"btn-search\">Search</button>\r\n        <div *ngIf=\"searchInput.value\">\r\n          <div *ngFor=\"let str of searchHelp\">\r\n            <span (click)=\"search(str); searchInput.value=''\">{{str}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"search-result-container\">\r\n        <div *ngIf=\"notFound\">\r\n          <span>Results not found</span>\r\n          <br>\r\n          <a href=\"http://google.com\">Try to find it in Google</a>\r\n        </div>\r\n        <div class=\"key-result-row\">\r\n          <div class=\"key-result-container\" *ngFor=\"let sr of searchFirstRow\">\r\n            <span><b>{{sr.key}}</b></span>\r\n            <div class=\"value-container\">\r\n              <div class=\"value\" *ngFor=\"let value of sr.value\">\r\n                <span>{{value}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n       <div class=\"key-result-row\">\r\n         <div class=\"key-result-container\" *ngFor=\"let sr of searchSecondRow\">\r\n           <span><b>{{sr.key}}</b></span>\r\n           <div class=\"value-container\">\r\n             <div class=\"value\" *ngFor=\"let value of sr.value\">\r\n               <span>{{value}}</span>\r\n             </div>\r\n           </div>\r\n         </div>\r\n       </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"right-block\">\r\n      <div class=\"most-popular blocks\">\r\n        <h2>Popular searches</h2>\r\n        <ul>\r\n          <li *ngFor=\"let str of topFive\">\r\n            <span (click)=\"search(str)\">{{str}}</span>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"add blocks\">\r\n        <h2>Add the words</h2>\r\n        <span>If you want to add your own words you can add a single word or you can upload file</span>\r\n        <div class=\"add-file\">\r\n          <input [(ngModel)]=\"newKey\" placeholder=\"Type your abbreviation here\"/>\r\n          <button (click)=\"openModal()\" class=\"btn-search\">+</button>\r\n          <p *ngIf=\"incorrectInput\" class=\"incorrect-input-message\">Please, enter your abbreviation</p>\r\n        </div>\r\n\r\n        <div class=\"delimiter\">\r\n          <div class=\"outline\"></div> <div class=\"or\">or</div> <div class=\"outline\"></div>\r\n        </div>\r\n\r\n        <div class=\"upload-file\">\r\n          <button type=\"button\" class=\"btn-search\" (click)=\"openUpload()\">Upload</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template class=\"collapse\" #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Add custom description</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Add your description for abbreviation '<span>{{newKey}}</span>'</p>\r\n    <input class=\"form-control\" [(ngModel)]=\"newValue\"/>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"addNewDescription(c)\">Add</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template class=\"collapse\" #content1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Upload file</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <input type=\"file\" (change)=\"fileChangedEvent($event)\" class=\"btn-search\" />\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <span style=\"margin-right: 10px\">{{uploadHelper}}</span>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"upload(c)\">Upload</button>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })

},[244]);
//# sourceMappingURL=main.bundle.js.map