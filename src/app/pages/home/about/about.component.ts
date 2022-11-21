import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = 'Learn Angular';
  desc1: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Etimpedit error commodi sint pariatur, officia veritatisarchitecto.';
  desc2: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga excepturi laboriosam labore minus tenetur, culpabeatae obcaecati libero voluptas iusto nesciunt, dolorem sit. Quos error magni sequi nobis aliquam.';

  constructor() { }

  ngOnInit(): void {
  }

}
