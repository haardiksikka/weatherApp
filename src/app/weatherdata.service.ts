import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  getData(city: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=5d0eb2eb209b8c9339fc37663921e74c`)
  }
  getCurrentData(city: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d0eb2eb209b8c9339fc37663921e74c`)
  }
}
