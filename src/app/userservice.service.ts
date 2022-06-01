import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Student} from "./student";
//import this to make http requests
import {Observable} from "rxjs";
//we've defined our base url here in the env
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getMovieList(){
    let url = "https://localhost:5001/home/getMovieList";
    let url1 = "http://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }

  getStudentsInformation(): Observable<Student[]>{
    //return this.http.get<Student[]>(`http://10.0.62.81:8080/home/getMovieList`);
    return this.http.get<Student[]>(''+environment.baseURL+environment.getMovie+'');
  }
  
  sendData(student:Student):Observable<Student[]>{
    const body=JSON.stringify(student);

    var ActivityMappingMaster = {
      "Id": student.Id,
      "Name": student.Name.toString(),
      "Actors": student.Actors.toString()
  };

  console.log("API SEND Data:  "+JSON.stringify(ActivityMappingMaster));

    return this.http.post<Student[]>(`${environment.baseURL}${environment.SendData}`,ActivityMappingMaster);
  }
}
