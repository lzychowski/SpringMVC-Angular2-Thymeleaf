import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/modules/core.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';


@NgModule({
  imports:      [ HttpModule, BrowserModule, CoreModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}
