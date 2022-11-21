import { Component, OnInit } from '@angular/core';
import { Faqs } from './model/faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  // faqs = [
  //   {
  //     question: 'Where exactly are you located?',
  //     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     id: 1
  //   },
  //   {
  //     question: 'Where exactly are you located?',
  //     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     id: 2
  //   },
  //   {
  //     question: 'Where exactly are you located?',
  //     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     id: 3
  //   },
  //   {
  //     question: 'Where exactly are you located?',
  //     answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //     id: 4
  //   }
  // ]

  faq: Faqs[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getFaq();
  }

  //method ini sebagai isian dari properti yang dibuat
  getFaq(): void {
    const faq: Faqs[] = [
      {
        question: 'Pertanyaan',
        answer: 'Jawaban',
        id: 'one'
      },
      {
        question: 'Pertanyaan',
        answer: 'Jawaban',
        id: 'two'
      },
      {
        question: 'Pertanyaan',
        answer: 'Jawaban',
        id: 'three'
      },
      {
        question: 'Pertanyaan',
        answer: 'Jawaban',
        id: 'four'
      }
    ];

    //assign properti di atas dengan variable baris ke 22
    this.faq = faq;
  }

}
