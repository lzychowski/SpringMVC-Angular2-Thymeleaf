import { Component, OnInit } from '@angular/core';
import { DomSanitizer }  from '@angular/platform-browser'; // temporary

import { NewsRelease }   from '../models/news-release';
import { NewsService }   from '../services/news.service';

@Component({
    moduleId: module.id,
    templateUrl: '../templates/news.template.html'
    //template: '<li *ngFor="let newsRelease of newsReleases">{{newsRelease.name}}</li>'
})

export class NewsComponent implements OnInit {
    
    newsReleases: NewsRelease[];
    
    constructor (private newsService: NewsService, private domSanitizer: DomSanitizer) {
        console.log(this.constructor.name);
    }
    
    getNews(): void {
        console.log("getNews");
        
        this.newsService.getNews().then((newsReleases) => {
            console.log("newsReleases param: " + JSON.stringify(newsReleases));
            
            //this.sanitizeItemBody(newsReleases);
            
            this.newsReleases = newsReleases;
            console.log("newsReleases local: " + JSON.stringify(this.newsReleases));
        });
        
    }
    
    /*
    sanitizeItemBody(newsReleases: NewsRelease[]){
        console.log("sanitizeItemBody");
        
        for (var i = 0; i < newsReleases.length; i++){
            for (var j = 0; j < newsReleases[i].items.length; j++){
                newsReleases[i].items[j].body = this.domSanitizer.bypassSecurityTrustHtml(newsReleases[i].items[j].body);
            }
        }
    }*/
    
    ngOnInit(): void {
        console.log("ngOnInit");

        this.getNews();
    }
    
}
