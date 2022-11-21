import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services = [
    {
      icon: 'bi bi-laptop',
      title: 'Online',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.',
      background: 'bg-dark',
      textColor: 'text-light'
    },
    {
      icon: 'bi bi-person-square',
      title: 'Hybrid',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.',
      background: 'bg-primary',
      textColor: 'text-light'
    },
    {
      icon: 'bi bi-person',
      title: 'In Person',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit non, ullam minima temporibus iste.',
      background: 'bg-dark',
      textColor: 'text-light'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
