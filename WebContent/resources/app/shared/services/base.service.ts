import { Injectable, Injector } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// http://stackoverflow.com/questions/39038791/inheritance-and-dependency-injection

@Injectable()
export class BaseService<TResult> {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    
    protected http: Http;
    
    constructor (private injector: Injector){
        console.log(this.constructor.name);
        this.http = this.injector.get(Http)
    }
    
    getMany(url: string): Promise<TResult[]> {
        console.log("getNews");
        
        return this.http.get(url)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
    }
    
    private extractData(response: Response) {
        console.log("extractData");
               
        let news = response.json();
        return news || [];
    }
    
    private handleError(error: any): Promise<any> {
        console.error("handleError", error);
        
        return Promise.reject(error.message || error);
    }
    
}