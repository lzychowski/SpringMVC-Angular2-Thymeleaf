import { NgModule }      from '@angular/core';
import { NewsDetailComponent }   from '../components/news-detail.component';

@NgModule({
  imports:      [ ],
  declarations: [ NewsDetailComponent ],
  exports:    [ NewsDetailComponent ]
})

export class NewsDetailModule {
    
    constructor () {
        console.log(this.constructor.name);
    }
}
