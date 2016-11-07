import { NgModule }      from '@angular/core';

import { CommonModule }       from '@angular/common';

import { NewsComponent }   from '../components/news.component';
import { NewsRoutingModule } from './news-routing.module';

import { NewsService } from '../services/news.service';

@NgModule({
  imports:      [ CommonModule, NewsRoutingModule ],
  declarations: [ NewsComponent ],
  providers:    [ NewsService ]
})

export class NewsModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}
