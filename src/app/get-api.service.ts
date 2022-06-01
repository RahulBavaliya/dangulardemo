import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{ Constants } from './config/constants';
@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  
  
  constructor(private http:HttpClient) { }


  apiCall(){
    return this.http.get(Constants.URL)
  }

  users() {
    return this.http.get(Constants.URL);
  }
}
