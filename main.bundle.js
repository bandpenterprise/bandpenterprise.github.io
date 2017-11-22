webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron { \n    /* background-color: #f4511e; Orange */\n    background: url(\"https://images6.alphacoders.com/425/425061.jpg\") no-repeat center;\n    background-size: cover;\n    margin-bottom: 0px;\n    color: #ffffff;\n    padding: 100px 25px;\n    font-family: Montserrat, sans-serif;\n    height:500px;\n}\n.container-fluid {\n    padding: 60px 50px;\n}\n.logo-small {\n    color: #f4511e;\n    font-size: 50px;\n}\n\n  /* footer */\nfooter{\n    background-color: #f4511e;\n}\n\nfooter .glyphicon {\n    font-size: 20px;\n    margin-bottom: 20px;\n    color: white;\n}\na {\n    /* Typography declarations */\n    color: #EDEDED;\n    text-decoration: none;\n  }\n  \n  a:hover {\n    /* Layout declarations */\n    color:pink;\n    transition: all 0.2s ease;\n  }\n  \n/* Navbar*/\n\n.navbar {\n    margin-bottom: 0;\n    background-color: #f4511e;\n    z-index: 9999;\n    border: 0;\n    font-size: 12px !important;\n    line-height: 1.42857143 !important;\n    letter-spacing: 4px;\n    border-radius: 0;\n}\n.navbar li a, .navbar .navbar-brand {\n    color: #fff !important;\n}\n.navbar-nav li a:hover, .navbar-nav li.active a {\n    color: #f4511e !important;\n    background-color: #fff !important;\n}\n.navbar-default .navbar-toggle {\n    border-color: transparent;\n    color: rgb(67, 11, 139) !important;\n}\n.navbar-collapse.collapse.in { display: block!important; }\n\n\n\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n</head>\n<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"60\">\n    <nav class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span> \n            </button>\n            \n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#about\">ABOUT</a></li>\n              <li><a href=\"#services\">SERVICES</a></li>\n              <li><a href=\"#contact\">CONTACT</a></li>\n              \n            </ul>\n          </div>\n        </div>\n      </nav>\n  <div class=\"jumbotron text-center\">\n    <h1>BandP Enterprise</h1> \n    <p>\"Love to design,implement and deliver\" <br>\n    ~~team bandP</p> \n\n  </div>\n</body>\n\n<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid text-center\">\n  <div class=\"row\">\n       <div class=\"row\">\n          <!--<h2>About  B&P</h2>-->\n          <div class=\"col-md-12 container-fluid text-center\">\n            <div class=\"thumbnail\">\n                <img src=\"../assets/B&P.png\" alt=\"Logo\">\n               <!-- <p><strong>B&P: Design,implement and deliver</strong></p>-->\n           </div>\n          <h4>B&P Enterprise is a website building company focused on improving the quality and functionality \n            of websites . We love to design,implement and deliver</h4><br><br>\n          <div class=\"col-md-8\">\n             <!-- <h2>Our Values</h2>-->\n              <h4 class=\"text-justify\"><strong>MISSION:</strong> Design,implement and deliver. \n                Our mission is to provide the best product and services with the client satisfaction  at reasonable prices. \n                We provide innovative designs with integrity and professionalism</h4>      \n              <h4 class=\"text-justify\"><strong>OFFERING:</strong> Our Offering is a combination of design,innovation and technology</h4>\n            </div>\n         \n               \n            </div>\n       </div>\n       <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"glyphicon glyphicon-globe logo-small\"></span>\n        <h4>Our Philosophy</h4>\n        <p class=\"text-justify\" >Web design is full of problems looking for solutions. Unfortunately too many designers (and clients) \n            forget or ignore the problem they are trying to solve, \n            and instead focus on just the aesthetics instead of looking at the bigger picture of what the site \n            is trying to achieve. \n            This should cause us to start asking ourselves what our role as “designer” is exactly.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <span class=\"glyphicon glyphicon-heart logo-small\"></span>\n        <h4>Our Purpose</h4>\n        <p class=\"text-justify\">Websites are built to sell things, promote people or businesses, provide information, \n            connect people, and store content. Each type of site has specific challenges and problems that \n            must be overcome to make the site function in the best way possible. \n           Our job is to solve these problems,\n             not just to make the problems look prettier.</p>\n      </div>\n      <div class=\"col-md-4\">\n          <span class=\"glyphicon glyphicon-user logo-small\"></span>\n          <h4>Who we are</h4>\n          <p class=\"text-justify\">We are a team of highly passionate and talented individuals with vast experience in IT .</p>\n        </div>\n       </div>\n    </div>\n\n  </div>\n  \n\n  <!-- Container (Services Section) -->\n<div id=\"services\" class=\"container-fluid text-center\">\n    <h2>SERVICES</h2>\n    <h4>What we offer</h4>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-cloud logo-small\"></span>\n        <h4>Web Design</h4>\n        <p class=\"text-justify\">We provide creative responsive websites with the latest technologies.</p>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-wrench logo-small\"></span>\n        <h4>Web Development</h4>\n        <p class=\"text-justify\"> We Design, code and modify websites, from layout to function and according to a client's specifications.Web development comes in two flavors - front-end development and back-end development.</p>\n      </div>\n      <div class=\"col-sm-4\">\n        <span class=\"glyphicon glyphicon-folder-open logo-small\"></span>\n        <h4>Software Development</h4>\n        <p class=\"text-justify\">Our team  provides design, installation, testing and maintenance of software systems. </p>\n      </div>\n    </div>\n    \n  </div>\n\n<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contact us and we'll get back to you asap.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Chicago, US</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +00 1515151515</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> bandpenterpriseusa@gmail.com</p>\n    </div>\n    <div class=\"col-sm-7 slideanim\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Comment\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Send</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  <!-- Footer ( -->\n  <footer class=\"container-fluid text-center\">\n      <a href=\"#myPage\" title=\"To Top\">\n        <span class=\"glyphicon glyphicon-chevron-up\"></span>\n      </a>\n      \n      <p><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n        <a href=\"https://www.facebook.com/\" target=_Blank>Facebook</a></p> \n      <p><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n        <a href=\"https://twitter.com/\" target=_Blank>Twitter</a></p> \n\n      <i class=\"fa fa-copyright\" aria-hidden=\"true\" style=\"color:white\">\n        <font color=\"white\">\n        2017 bandpenterprise.All Rights Reserved\n      </font>\n      </i>\n    </footer>\n\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map