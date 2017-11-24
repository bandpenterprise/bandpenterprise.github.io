webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron { \n    /* background-color: #f4511e; Orange */\n    background: url(\"https://images4.alphacoders.com/839/83944.jpg\") no-repeat center;\n    background-size: cover;\n    margin-bottom: 0px;\n    color: #ffffff;\n    padding: 100px 25px;\n    font-family: Montserrat, sans-serif;\n     \n}\n.container-fluid {\n    padding: 60px 50px;\n}\n.logo-small {\n    color: #f4511e;\n    font-size: 50px;\n}\n\n  /* footer */\nfooter{\n    background-color: #f4511e;\n}\n\nfooter .glyphicon {\n    font-size: 20px;\n    margin-bottom: 20px;\n    color: white;\n}\na {\n    /* Typography declarations */\n    color: #EDEDED;\n    text-decoration: none;\n  }\n  \n  a:hover {\n    /* Layout declarations */\n    color:pink;\n    transition: all 0.2s ease;\n  }\n  \n/* Navbar*/\n\n.navbar {\n    margin-bottom: 0;\n    background-color: #f4511e;\n    z-index: 9999;\n    border: 0;\n    font-size: 12px !important;\n    line-height: 1.42857143 !important;\n    letter-spacing: 4px;\n    border-radius: 0;\n}\n.navbar li a, .navbar .navbar-brand {\n    color: #fff !important;\n}\n.navbar-nav li a:hover, .navbar-nav li.active a {\n    color: #f4511e !important;\n    background-color: #fff !important;\n}\n.navbar-default .navbar-toggle {\n    border-color: transparent;\n    color: rgb(67, 11, 139) !important;\n}\n.navbar-collapse.collapse.in { display: block!important; }\n\n\n\n.example-form {\n    width: 350px;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span> \n            </button>\n            \n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#about\">ABOUT</a></li>\n              <li><a href=\"#services\">SERVICES</a></li>\n             <li><a href=\"#contact\">CONTACT</a></li>\n             </ul>\n          </div>\n        </div>\n      </nav>\n  <div class=\"jumbotron text-center\">\n    <div class=\"container\">\n    <br><br><h1>BandP Enterprise</h1> <br><br>\n    <p>\"Love to design,implement and deliver\" <br>\n    ~~team bandP</p> \n  </div>\n  </div>\n\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid text-center\">\n  <div class=\"row\">\n      <h2>About  B&P</h2>\n       <div class=\"row col-md-12\">\n           <h4>B&P Enterprise is a website building company focused on improving the quality and functionality \n            of websites . We love to design,implement and deliver</h4><br><br>     \n        \n             <h4 class=\"text-justify\"><strong>MISSION:</strong> Design,implement and deliver. \n                Our mission is to provide the best product and services with the client satisfaction  at reasonable prices. \n                We provide innovative designs with integrity and professionalism</h4>      \n              <h4 class=\"text-justify\"><strong>OFFERING:</strong> Our Offering is a combination of design,innovation and technology</h4>\n                   \n       </div>\n       <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"glyphicon glyphicon-globe logo-small\"></span>\n        <h4>Our Philosophy</h4>\n        <p class=\"text-justify\" >Web design is full of problems looking for solutions. Unfortunately too many designers (and clients) \n            forget or ignore the problem they are trying to solve, \n            and instead focus on just the aesthetics instead of looking at the bigger picture of what the site \n            is trying to achieve. \n            This should cause us to start asking ourselves what our role as “designer” is exactly.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"glyphicon glyphicon-heart logo-small\"></span>\n        <h4>Our Purpose</h4>\n        <p class=\"text-justify\">Websites are built to sell things, promote people or businesses, provide information, \n            connect people, and store content. Each type of site has specific challenges and problems that \n            must be overcome to make the site function in the best way possible. \n           Our job is to solve these problems,\n             not just to make the problems look prettier.</p>\n      </div>\n      <div class=\"col-md-4\">\n          <span class=\"glyphicon glyphicon-user logo-small\"></span>\n          <h4>Who we are</h4>\n          <p class=\"text-justify\">We are a team of highly passionate and talented individuals with vast experience in IT .</p>\n        </div>\n       </div>\n    </div>\n\n  </div>\n  \n\n  <!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center\">\n    <h2>SERVICES</h2>\n    <h4>What we offer</h4>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-pencil logo-small\"></span>\n        <h4>Web Design</h4>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-wrench logo-small\"></span>\n        <h4>Web Development</h4>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-fire  logo-small\"></span>\n        <h4>Web Hosting</h4>\n      </div>\n    </div><br><br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-folder-open logo-small\"></span>\n        <h4>Software Development</h4>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-modal-window logo-small\"></span>\n        <h4>Platform Development</h4>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-cloud logo-small\"></span>\n        <h4>Cloud Application</h4>\n      </div>\n    </div>\n  </div>\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you asap.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Pittsburgh, USA</p>\n      <!--<p><span class=\"glyphicon glyphicon-phone\"></span> +00 1515151515</p>-->\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> bandpenterpriseusa@gmail.com</p>\n    </div>\n    <div class=\"col-sm-7 slideanim\">\n      <div class=\"row\">\n        \n        <form class=\"example-form\" #formData=\"ngForm\" (ngSubmit)=\"onSubmit(formData)\">\n          \n                    <mat-form-field class=\"example-full-width\" >\n                      <input matInput floatPlaceholder=\"auto\" placeholder=\"Name\" (ngModel)=\"name\" name=\"name\" required>\n                    </mat-form-field>\n                        \n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Enter your email\"  name=\"email\" required (ngModel)=\"email\" pattern=\"[a-zA-Z0-9.!#$% &’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\">\n                    </mat-form-field><br>\n          \n                    <mat-form-field class=\"example-full-width\" >\n                      <input matInput floatPlaceholder=\"auto\" placeholder=\"Subject\" (ngModel)=\"subject\" name=\"subject\">\n                    </mat-form-field><br>\n                        \n                    <mat-form-field class=\"example-full-width\">\n                      <textarea matInput placeholder=\"Message\" name=\"message\" (ngModel)=\"message\" required></textarea>\n                    </mat-form-field>\n                    <br>\n                    <button mat-raised-button color=\"primary\" [disabled]=\"!formData.valid\" class=\"example-full-width\" (click)=\"mess()\" >Send Message</button>\n                </form> \n      </div>\n      \n    </div>\n  </div>\n</div>\n  <!-- Footer ( -->\n  <footer class=\"container-fluid text-center\">\n      <a href=\"#myPage\" title=\"To Top\">\n        <span class=\"glyphicon glyphicon-chevron-up\"></span>\n      </a>\n      \n      <p><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n        <a href=\"https://www.facebook.com/\" target=_Blank>Facebook</a></p> \n      <p><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n        <a href=\"https://twitter.com/\" target=_Blank>Twitter</a></p> \n\n      <i class=\"fa fa-copyright\" aria-hidden=\"true\" style=\"color:white\">\n        <font color=\"white\">\n        2017 bandpenterprise.All Rights Reserved\n      </font>\n      </i>\n    </footer>\n\n  </body>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(afAuth, af, http) {
        this.afAuth = afAuth;
        this.af = af;
        this.http = http;
        //items: FirebaseListObservable<any[]>;
        this.msgVal = '';
        /**end of firebase */
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].email]);
    }
    /**firebase */
    AppComponent.prototype.sendEmail = function () {
        var url = "https://console.firebase.google.com/project/deepakwebsite-a0cd0/overview";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        params.set('to', 'bandpenterpriseusa@gmail.com@gmail.com');
        params.set('from', 'hello@gmail.com');
        params.set('subject', 'test-email');
        params.set('content', 'Hello World');
        return this.http.post(url, params, options)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    AppComponent.prototype.onSubmit = function (formData) {
        var name = formData.value.name;
        var email = formData.value.email;
        var message = formData.value.message;
        var date = Date();
        var formRequest = { name: name, email: email, message: message, date: date };
        console.log(formRequest);
        this.af.list('/messages').push(formRequest);
        formData.reset();
        formData.resetForm();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// New imports to update based on AngularFire2 version 4






var firebaseConfig = {
    apiKey: "AIzaSyCaE4ASRWuXBqueMnR5dLy0srNwYZzGzsk",
    authDomain: "bandpenterprise-1caa4.firebaseapp.com",
    databaseURL: "https://bandpenterprise-1caa4.firebaseio.com",
    projectId: "bandpenterprise-1caa4",
    storageBucket: "",
    messagingSenderId: "357278893634"
};
//NgModule for material 
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatMenuModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//material done
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                MaterialModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map