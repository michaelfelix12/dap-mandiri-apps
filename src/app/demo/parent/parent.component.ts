import { Component, OnInit } from '@angular/core';
import { PagesComponent } from 'src/app/pages/pages.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  title: string = 'title from parent';

  counter: number = 0;
  messageOutputParent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onChangeCounter(count: number): void {
  //   this.counter = count;
  // }

  onChangeMessage(inputMessageShared: string): void {
    this.messageOutputParent = inputMessageShared;
  }

}
