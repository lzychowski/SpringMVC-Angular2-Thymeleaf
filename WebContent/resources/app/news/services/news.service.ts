import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NewsRelease }   from '../models/news-release';

@Injectable()
export class NewsService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'resources/data/news.json';
    
    constructor (private http: Http){
        console.log(this.constructor.name);
    }
    
    getNews(): Promise<NewsRelease[]> {
        console.log("getNews");
        
        return this.http.get(this.url)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    
    private extractData(response: Response) {
        console.log("extractData");
        
        //let news: {} = JSON.parse(response._body);
        //return news || { };
        
        let news = response.json();
        return news || { };
    }
    
    private handleError(error: any): Promise<any> {
        console.error("handleError", error);
        
        return Promise.reject(error.message || error);
    }
    
}