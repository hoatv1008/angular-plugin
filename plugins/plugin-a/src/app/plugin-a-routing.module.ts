import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PluginAComponent } from './plugin-a.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forChild([
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
        RouterModule
    ]
})
export class RoutingModule {}