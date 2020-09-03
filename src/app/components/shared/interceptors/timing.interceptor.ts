import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // request
        let clonedRequest;
        const start = performance.now();

        if (req.url.includes('products')) {
            clonedRequest = req.clone({
                params: new HttpParams()
                    .set('ts_interceptor', Date.now().toString())
                // body: null
            });
            console.log(clonedRequest);
            console.log('request took ' + (performance.now() - start).toFixed() + ' ms');
        } else {
            clonedRequest = req;
        }

        // response
        return next.handle(clonedRequest).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpResponse<any>) => {
                if (event.url.includes('products')) {
                    console.log(event);
                    console.log('response took ' + (performance.now() - start).toFixed() + ' ms');
                }
                return event;
            })
        );
    }
}
