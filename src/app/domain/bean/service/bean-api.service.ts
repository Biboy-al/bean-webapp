import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeanDto} from '../type/bean-dto';
import {Bean} from '../type/bean';
import * as querystring from 'node:querystring';

@Injectable({
  providedIn: 'root'
})
export class BeanApiService {

  // Change in the .env file
  url : string = 'http://localhost:8080/bean/';

  constructor(private http: HttpClient) { }

  getAllBeans(): Observable<Bean[]>{
    return this.http.get<Bean[]>(this.url);
  }

  getBean(id: number): Observable<Bean[]>{

    const queryUrl: string = this.url + "/" + id;

    return this.http.get<Bean[]>(queryUrl);
  }

  postBean(bean: BeanDto): Observable<Bean>{
    return this.http.post(this.url, bean);
  }
}
