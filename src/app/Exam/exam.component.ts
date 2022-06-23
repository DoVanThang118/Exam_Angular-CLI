import { Component } from '@angular/core';
import {ICategory, IMail} from "../interfaces/exam.interface";
import {ExamService} from "../services/exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  categories: ICategory[] = [];
  mails: IMail[] = [];

   constructor(private  examService: ExamService) {
   }

   ngOnInit(){
     this.examService.maillist().subscribe(value => {
       this.categories = value.data.categories;
       this.mails = value.data.mails
     })
   }

   chageMails(name: string, avatar: string){
     var new_list: IMail[] = [];
     this.examService.maillist().subscribe(value => {
       for (var i=0;i<value.data.mails.length;i++){
         if (value.data.mails[i].name == name && value.data.mails[i].avatar == avatar){
           new_list.push(value.data.mails[i]);
         }
       }
       this.mails = new_list;
     })
   }
}
