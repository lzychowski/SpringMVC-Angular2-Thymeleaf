import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NewsRelease } from '../models/news-release';
import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class NewsService extends BaseService<NewsRelease> {
    
    private url = 'resources/data/news.json';
    
    constructor (http: Http, injector: Injector){
        super(injector);
        console.log(this.constructor.name);
    }
    
    getNews(): Promise<NewsRelease[]> {
        console.log("getNews");
        
        return this.getMany(this.url);
    }

}