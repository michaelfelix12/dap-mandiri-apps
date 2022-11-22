import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() title: string = '';

  // @Output() counter = new EventEmitter<number>()

  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  count: number = 0

  constructor() { }

  //one-way
  // onIncrease() {
  //   this.count++;
  //   this.counter.emit(this.count);
  // }

  // onDecrease() {
  //   this.count--;
  //   this.counter.emit(this.count);
  // }

  //two-way
  onIncrease() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  onDecrease() {
    this.count--;
    this.counterChange.emit(this.count);
  }

  @Output() messageOutputParent = new EventEmitter<string>()
  messageInputShared: string = '';
  onMessageInputShared($event: any): void {
    // console.log('$event: ', $event);
    // console.log('$event.target.value: ', $event.target.value);
    const { value } = $event.target;
    this.messageInputShared = value;
    this.messageOutputParent.emit(this.messageInputShared);

    // if (value === 'mandiri') {
    //   this.messageInputShared = 'aku mandirian';
    //   this.messageOutputParent.emit(this.messageInputShared);
    // } else {
    //   this.messageInputShared = 'aku tetap mandirian';
    //   this.messageOutputParent.emit(this.messageInputShared);
    // }
  }

  ngOnInit(): void {
  }

}
