import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  maillist(){
    return this.httpClient.get<any>('http://localhost:4200/assets/exam.json');
  }

}
