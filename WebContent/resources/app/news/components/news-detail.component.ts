import { Component } from '@angular/core';

@Component({
  selector: 'news-detail',
  template: '<h1>News Detail</h1>'
})

export class NewsDetailComponent {
    
    constructor () {
        console.log(this.constructor.name);
    }
    
}
