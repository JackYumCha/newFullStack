import { AppComponent } from './../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit {

  @Input() message: string;

  @Output() messageChange: EventEmitter<string> = new EventEmitter<string>();

  $twoway: number;

  @Input() set twoway(value: number){
    console.log('on inbound binding update:', value);
    this.$twoway = value;
  }

  @Output() twowayChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(public app: AppComponent) { }

  ngOnInit() {
    console.log('first component init');
  }

  onImageClick() {
    let i: number = Math.random();
    //this.app.setMessage(i.toFixed(12));
    this.messageChange.emit(i.toFixed(12));
    this.twowayChange.emit(i);
  }

  arrowF = ()=>'';

}
