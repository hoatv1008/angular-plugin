(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
	(factory((global['plugin-a'] = {}),global.core,global.router,global.common));
}(this, (function (exports,core,router,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var PluginAComponent = /** @class */ (function () {
    function PluginAComponent() {
    }
    PluginAComponent = __decorate([
        core.Component({
            selector: 'plugin-a-component',
            template: "<div style=\"text-align:center; background-color:lightgray; padding: 20px;\">\n              <router-outlet></router-outlet>\n            </div>"
        })
    ], PluginAComponent);
    return PluginAComponent;
}());

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core.Component({
            selector: 'home-component',
            template: "\n  <h3>\n    Hello from Plugin A\n  </h3>\n\n  <a routerLink=\"error\">Sample Broken link</a>\n\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core.Component({
            selector: 'page-not-found',
            template: "<h3>Something went wrong (Plugin A).</h3><a routerLink=\"../\">Back</a>"
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core.NgModule({
            imports: [
                router.RouterModule.forChild([
                    {
                        path: '',
                        component: PluginAComponent,
                        children: [
                            { path: '', redirectTo: 'home', pathMatch: 'full' },
                            { path: 'home', component: HomeComponent },
                            { path: '**', component: PageNotFoundComponent }
                        ]
                    },
                ])
            ],
            exports: [
                router.RouterModule
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());

var PluginAModule = /** @class */ (function () {
    function PluginAModule() {
    }
    PluginAModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule,
                RoutingModule
            ],
            declarations: [
                PluginAComponent,
                HomeComponent,
                PageNotFoundComponent
            ],
        })
    ], PluginAModule);
    return PluginAModule;
}());

exports.PluginAModule = PluginAModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
