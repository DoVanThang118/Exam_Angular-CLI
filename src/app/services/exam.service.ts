import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IExam} from "../interfaces/exam.interface";

@Injectable({
  providedIn: 'root'
})

export class ExamService {

  constructor(private httpClient: HttpClient) {
  }

  maillist(){
    return this.httpClient.get<IExam>('http://localhost:4200/assets/exam.json');
  }

}
