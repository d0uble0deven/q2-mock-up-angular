import { Component, Output } from '@angular/core';

// troubleshoot @output --- COMPLETED
// style
// set up ng content


// Iterating response data
// What happens when you turn your computer on
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  inputExampleParent: string = "parent checking in with child"

  outputExampleParent: any[] = []


  logOutputEventFromChild(str: string) {
    this.outputExampleParent.push(str)
    console.log('parent out', str)
  }
}
