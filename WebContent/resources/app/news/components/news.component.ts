import { Component, OnInit } from '@angular/core';

import { NewsRelease }   from '../models/news-release';
import { NewsService }   from '../services/news.service';

@Component({
    moduleId: module.id,
    templateUrl: '../templates/news.template.html'
})

export class NewsComponent implements OnInit {
    
    newsReleases: NewsRelease[];
    
    constructor (private newsService: NewsService) {
        console.log(this.constructor.name);
    }
    
    getNews(): void {
        console.log("getNews");
        
        this.newsService.getNews().then(newsReleases => this.newsReleases = newsReleases);
        console.log(JSON.stringify("newsReleases: " + this.newsReleases));
    }
    
    ngOnInit(): void {
        console.log("ngOnInit");

        this.getNews();
    }
    
}
