import { Component } from '@angular/core';
import {ICategory, IMail} from "../interfaces/exam.interface";
import {ExamService} from "../services/exam.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  categories: ICategory[] = [
    {
      "name": "Margaret",
      "avatar": "1.jpg"
    },
    {
      "name": "Laura",
      "avatar": "2.jpg"
    },
    {
      "name": "Robert",
      "avatar": "3.jpg"
    },
    {
      "name": "Albert",
      "avatar": "4.jpg"
    },
    {
      "name": "Michale",
      "avatar": "5.jpg"
    }
  ];
  mails: IMail[] = [
    {
      "name": "Margaret",
      "avatar": "1.jpg",
      "title": "dsd sddcdef dsfdc",
      "hiredate": "13/4/1995",
      "address": "3 efdf sdcsdc",
      "city": "pari",
      "phone": "(34)43434-343324"
    },
    {
      "name": "Laura",
      "avatar": "2.jpg",
      "title": "dsd sddcdef dsfdc",
      "hiredate": "13/4/1995",
      "address": "3 efdf sdcsdc",
      "city": "pari",
      "phone": "(34)43434-343324"
    },
    {
      "name": "Robert",
      "avatar": "3.jpg",
      "title": "dsd sddcdef dsfdc",
      "hiredate": "13/4/1995",
      "address": "3 efdf sdcsdc",
      "city": "pari",
      "phone": "(34)43434-343324"
    },
    {
      "name": "Albert",
      "avatar": "4.jpg",
      "title": "dsd sddcdef dsfdc",
      "hiredate": "13/4/1995",
      "address": "3 efdf sdcsdc",
      "city": "pari",
      "phone": "(34)43434-343324"
    },
    {
      "name": "Michale",
      "avatar": "5.jpg",
      "title": "dsd sddcdef dsfdc",
      "hiredate": "13/4/1995",
      "address": "3 efdf sdcsdc",
      "city": "pari",
      "phone": "(34)43434-343324"
    }
  ];

  // constructor(private  examService: ExamService) {
  // }
  //
  // ngOnInit(){
  //   this.examService.maillist().subscribe(value => {
  //     this.categories = value.data.categories;
  //     this.mails = value.data.mails
  //   })
  // }
  //
  // chageMails(category: string,){
  //
  // }
}
