import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() message: string; //1

  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter(); //2 

  @ViewChild('titleField') titleField: ElementRef;

  handleButtonClick(newTitle) {
    if (newTitle) {
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value = '';
    }
  }

}
