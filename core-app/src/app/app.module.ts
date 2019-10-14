import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CompilerFactory, Compiler, COMPILER_OPTIONS, Injector, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER } from '@angular/core';

import { AppRootComponent } from './app-root.component';
import { AppRoutingModule } from './app-root-routing.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { HomeComponent } from './home/app-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppPreBootstrap } from './app-root-bootstrap';
import { AppConsts } from './app-const';

export function createCompiler(fn: CompilerFactory): Compiler {     
  return fn.createCompiler();
}
declare const SystemJS: any;

export function appInitializerFactory(
  injector: Injector,
  platformLocation: PlatformLocation,
  compiler: Compiler
  ) {
  return () => {

      return new Promise<boolean>(async (resolve, reject) => {

        // declare main routes
        AppConsts.appRoutes = [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponent },
          { path: '**', component: PageNotFoundComponent },
        ];

        // get plugins configuration from server
        AppPreBootstrap.getApplicationConfig("/assets/plugins.json", async (r) => {

          r.forEach(async (e) => {
            const module = await SystemJS.import(e.pluginResourcePath);

            compiler
            .compileModuleAsync<any>(module[e.pluginModule])
            .then((m) => {

              // declare route for each plugin
              const route = {
                path: e.pluginUrl,
                loadChildren() { return m }
              };

              AppConsts.appRoutes.unshift(route);

              resolve();
            }); 
          });

          // keep plugins in global variable
          AppConsts.plugins = r;
          
        }, resolve, reject);
      });
  };
}

export function registerRoutes(router: Router): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      // console.log(AppConsts.appRoutes);
      router.resetConfig(AppConsts.appRoutes);
      resolve();
    });
  };
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppRootComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    PageNotFoundComponent
  ],
  providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [Injector, PlatformLocation, Compiler],
      multi: true
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: registerRoutes,
      deps: [Router],
      multi: true
    },
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
