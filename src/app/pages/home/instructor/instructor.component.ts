import { Component, OnInit } from '@angular/core';
import { Instructor } from './model/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  //buat di properti untuk di store ke view
  instructor: Instructor[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getInstructor();
  }

  //method ini sebagai isian dari properti yang dibuat
  getInstructor(): void {
    const instructor: Instructor[] = [
      {
        name: 'Jution CK',
        desc: 'Lorem Ipsum',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          },
        ]
      },
      {
        name: 'Jution CK',
        desc: 'Lorem Ipsum',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          },
        ]
      },
      {
        name: 'Jution CK',
        desc: 'Lorem Ipsum',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          },
        ]
      },
      {
        name: 'Jution CK',
        desc: 'Lorem Ipsum',
        img: 'https://randomuser.me/api/portraits/men/11.jpg',
        socialMedia: [
          {
            icon: 'bi bi-twitter',
            link: '',
          },
          {
            icon: 'bi bi-facebook',
            link: '',
          },
          {
            icon: 'bi bi-linkedin',
            link: '',
          },
          {
            icon: 'bi bi-instagram',
            link: '',
          },
        ]
      },

    ];

    //assign properti di atas dengan variable baris ke 22
    this.instructor = instructor;
  }

}
