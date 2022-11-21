import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  preTitle: string = 'Become a';
  title: string = 'Web Developer';
  descTitle: string = 'We focus on teaching and training our clients the fundamental and advanced programming languages that suitable for the Industry.';

  constructor() { }

  ngOnInit(): void {
  }

}
