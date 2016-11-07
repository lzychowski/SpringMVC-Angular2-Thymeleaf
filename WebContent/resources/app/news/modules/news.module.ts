import { NgModule }      from '@angular/core';

import { NewsComponent }   from '../components/news.component';
import { NewsRoutingModule } from './news-routing.module';

import { NewsService } from '../services/news.service';

@NgModule({
  imports:      [ NewsRoutingModule ],
  declarations: [ NewsComponent ],
  providers:    [ NewsService ]
})

export class NewsModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}
