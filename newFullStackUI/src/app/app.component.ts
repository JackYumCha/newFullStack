import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my first Angular App';

  setMessage(value: string) {
    this.message = value;
  }

  message: string = "my secret";

  onMessageChanged(e: string){
    this.message = e;

  }

  twowayBinding: number = 20;

  mySelection: string;
}
