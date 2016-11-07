import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent }   from '../components/news.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'view', pathMatch: 'full'},
  { path: '', component: NewsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class NewsRoutingModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}