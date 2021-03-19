import { TitleComponent } from './title/title/title.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-testing';

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}