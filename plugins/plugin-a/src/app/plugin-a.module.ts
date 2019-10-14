import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginAComponent } from './plugin-a.component';
import { RoutingModule } from './plugin-a-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
      PluginAComponent,
      HomeComponent,
      PageNotFoundComponent
    ],
//   entryComponents: [
//       PluginAComponent
//     ],
})
export class PluginAModule {}