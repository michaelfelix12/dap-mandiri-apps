import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../getter-setter/employee';

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

  canClickButton = false;

  message: string = '';
  //penerapan event binding
  showMe(): void {
    this.message = 'ah aku di klik';
  }

  messageHover: string = 'Hover aku dong';
  mouseOut() {
  this.messageHover = 'Lagi Dong';
  }
  mouseOver() {
    this.messageHover = 'Thank Sist';
  }

  messageInput: string = '';
  onMessageInput($event: any): void {
    // console.log('$event: ', $event);
    // console.log('$event.target.value: ', $event.target.value);
    const { value } = $event.target;
    if (value === 'mandiri') {
      this.messageInput = 'aku mandirian';
    } else {
      this.messageInput = 'aku tetap mandirian';
    }
  }

  constructor(
    // private readonly route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    //   this.route.queryParams.subscribe((params) => {
    //   const { name, address } = params;
    //   this.name = name;
    //   this.address = address;
    // })

    const employee: Employee = new Employee();
    employee.fullName = 'Joko';
    employee.address = 'Bali';
    console.log(employee.fullName);
    console.log(employee.address);
    console.log(employee.toString());

    setTimeout(() => {
      this.canClickButton = true;
    }, 5000);
  }
}
