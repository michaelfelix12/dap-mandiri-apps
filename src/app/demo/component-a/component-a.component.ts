import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  name: string ='Millea';
  address: string = 'Bandung';
  participants: string[] = ['Bulan', ' Bintang', ' Matahari']

  languages = {
    name: 'Angular',
    status: 'Advance'
  }

  onMessage(): string {
    return 'onMessage';
  }

  onViewLanguage(): string {
    return `${this.languages.name} ${this.languages.status}`
  }

  mandiriEmployee = [
    {
      name: 'Adi',
      address: 'Bulan',
      unit: 'Keuangan'
    },
    {
      name: 'Adam',
      address: 'Matahari',
      unit: 'Audit'
    },
    {
      name: 'Rahma',
      address: 'Bintang',
      unit: 'IT'
    }
  ]

  constructor(
    // private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //   this.route.queryParams.subscribe((params) => {
    //   const { name, address } = params;
    //   this.name = name;
    //   this.address = address;
    // })
  }

}
