import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() inputExampleChild

  @Output() outputExampleChild = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }


  emitOutToParent(value: string) {
    console.log('child out: ', value)

    this.outputExampleChild.emit(value)

  }

}
