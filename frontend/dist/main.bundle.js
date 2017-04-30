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
                        _this.searchFirstRow.push(result[i]);
                    else
                        _this.searchSecondRow.push(result[i]);
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
exports.push([module.i, "button {\n  cursor: pointer;\n}\n\n.clickers {\n  transition: 0.4s;\n}\n\n.clickers:hover {\n  background-color: #03422f;\n}\n\n.title {\n  font-size: 30px;\n  letter-spacing: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n\n.outline {\n  width: 10%;\n  height: 1px;\n  background-color: #03bf8d;\n  border-radius: 3px;\n  float: left;\n}\n\n.description {\n  font-size: 14px;\n  letter-spacing: 1px;\n  width: 560px;\n  margin-left: 0;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  line-height: 25px;\n}\n\n.search {\n  width: 100%;\n  background-color: #e8e8e8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 30px 27px;\n  border-radius: 3px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.search input {\n  background-color: white;\n  border: none;\n  padding: 10px;\n  height: 45px;\n  width: 80%;\n  border-radius: 3px 0 0 3px;\n}\n\n.search button{\n  width: 20%;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 0 3px 3px 0;\n  transition: 0.4s;\n  height: 45px;\n}\n.search button:hover{\n  background: #037a5e;\n}\n\n.search-result-container {\n  width: 100%;\n  margin-top: 20px;\n  background-color: #e8e8e8;\n  height: 100%;\n  border-radius: 3px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.wrapper{\n  width: 85%;\n  display: inline-block;\n}\n\n.main{\n  text-align: center;\n}\n\n.left-block{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float:left;\n  width: 65%;\n}\n\n.right-block{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  float:right;\n  width: 33%;\n}\n\n.add{\n  margin-top: 20px;\n}\n\n.blocks{\n  background-color: #e8e8e8;\n  width: 100%;\n  text-align: left;\n  padding: 20px 30px 10px 35px;\n  border-radius: 3px;\n}\n\n.blocks:last-child {\n  height: 100%;\n}\n\n.most-popular ul li{\n  list-style-type: decimal;\n\n}\n\n.most-popular ul li span:hover{\n  text-decoration: underline;\n  cursor: pointer;\n\n}\n\n.most-popular ul{\n  padding-left: 21px;\n\n}\n\nh2{\n  font-size: 18px;\n  padding: 5px 5px 5px 0;\n  font-weight: 600;\n}\n\n.add-file input {\n  background-color: white;\n  border: none;\n  padding-left: 10px;\n  margin-top: 20px;\n  height: 45px;\n  width: 80%;\n  border-radius: 3px 0 0 3px;\n}\n\n.add-file button{\n  margin-left: -4px;\n  width: 19%;\n  height: 45px;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 0 3px 3px 0;\n  transition: 0.4s;\n}\n\n.add-file button:hover{\n  background: #037a5e;\n}\n\n.delimiter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.or {\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.delimiter .outline {\n  width: 100%;\n  background-color: black;\n}\n\n.upload-file button{\n  margin-left: 1px;\n  width: 99%;\n  height: 45px;\n  background: #02bf8d;\n  border: 0;\n  color: #fff;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  transition: 0.4s;\n}\n\n.upload-file button:hover{\n  background: #037a5e;\n}\n\n.incorrect-input-message{\n  color: red;\n  max-height: 7px;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n\n.add-description-btn{\n  background: #02bf8d;\n  color: white;\n}\n\n.key-result-row{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 20px 30px;\n  box-sizing: border-box;\n}\n\n.key-result-container{\n\n  float: left;\n  text-align: left;\n  min-width: 50%;\n  min-height: 30%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-left: 15px;\n}\n\n.value-container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\ninput:hover, input:focus, input:active {\n  outline: 0 !important;\n  border: none !important;\n}\n\nbutton:hover, button:focus, button:active {\n  outline: 0 !important;\n  border: none !important;\n}\n\n.content-wrapper{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"wrapper\">\n    <h1 class=\"title\">DICTIONARY OF EARTH</h1>\n    <div class=\"outline\"></div>\n    <div align=\"left\">\n      <div class=\"description\">\n        A creative tool for science enthusiasts and scientists to share and learn the definitions of Earth-related scientific and technical terms.\n      </div>\n    </div>\n\n    <div class=\"content-wrapper\">\n      <div class=\"left-block\">\n        <div class=\"search\">\n          <input (keyup)=\"onSearchInputChanged(searchInput.value)\" placeholder=\"Type the word...\" #searchInput list=\"suggestions\"/>\n          <button (click)=\"search(searchInput.value)\" class=\"btn-search\">Search</button>\n          <datalist id=\"suggestions\">\n            <option *ngFor=\"let str of searchHelp\"><span (click)=\"search(searchInput.value)\">{{str}}</span></option>\n          </datalist>\n        </div>\n\n        <div class=\"search-result-container\">\n          <div *ngIf=\"notFound\">\n            <span>Results not found</span>\n            <br>\n            <a href=\"http://google.com\">Try to find it in Google</a>\n          </div>\n          <div class=\"key-result-row\">\n            <div class=\"key-result-container\" *ngFor=\"let sr of searchFirstRow\">\n              <span><b>{{sr.key}}</b></span>\n              <div class=\"value-container\">\n                <div class=\"value\" *ngFor=\"let value of sr.value\">\n                  <span>{{value}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n         <div class=\"key-result-row\">\n           <div class=\"key-result-container\" *ngFor=\"let sr of searchSecondRow\">\n             <span><b>{{sr.key}}</b></span>\n             <div class=\"value-container\">\n               <div class=\"value\" *ngFor=\"let value of sr.value\">\n                 <span>{{value}}</span>\n               </div>\n             </div>\n           </div>\n         </div>\n        </div>\n\n      </div>\n\n      <div class=\"right-block\">\n        <div class=\"most-popular blocks\">\n          <h2>Popular searches</h2>\n          <ul>\n            <li *ngFor=\"let str of topFive\">\n              <span (click)=\"search(str); searchInput.value = str\">{{str}}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"add blocks\">\n          <h2>Add the words</h2>\n          <span>If you want to add your own words you can add a single word or you can upload file</span>\n          <div class=\"add-file\">\n            <input [(ngModel)]=\"newKey\" placeholder=\"Type your abbreviation here\"/>\n            <button (click)=\"openModal()\" class=\"btn-search\">+</button>\n            <p *ngIf=\"incorrectInput\" class=\"incorrect-input-message\">Please, enter your abbreviation</p>\n          </div>\n\n          <div class=\"delimiter\">\n            <div class=\"outline\"></div> <div class=\"or\">or</div> <div class=\"outline\"></div>\n          </div>\n\n          <div class=\"upload-file\">\n            <button type=\"button\" class=\"btn-search\" (click)=\"openUpload()\">Upload</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template class=\"collapse\" #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add custom description</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Add your description for abbreviation '<span>{{newKey}}</span>'</p>\n    <input class=\"form-control\" [(ngModel)]=\"newValue\"/>\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px; color: red\">{{modalError}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"addNewDescription(c)\">Add</button>\n  </div>\n</ng-template>\n\n<ng-template class=\"collapse\" #content1 let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Upload file</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <pre>For success upload your file must be with txt extension and have special structure:\n      NBA    basketball association\n      word + /t + description\n    </pre>\n    <input type=\"file\" (change)=\"fileChangedEvent($event)\" class=\"btn-search\" />\n  </div>\n  <div class=\"modal-footer\">\n    <span style=\"margin-right: 10px\">{{uploadHelper}}</span>\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n    <button type=\"button\" class=\"btn add-description-btn\" (click)=\"upload(c)\">Upload</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ })

},[244]);
//# sourceMappingURL=main.bundle.js.map