import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full'}
  { path: '', loadChildren: 'app/news/modules/news.module#NewsModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}