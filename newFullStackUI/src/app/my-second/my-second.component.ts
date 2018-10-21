import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {

  constructor(public zone: NgZone) { }

  ngOnInit() {

  }

  mapLoad = () =>  {
    this.zone.run(() => {

    });
    this.zone.runOutsideAngular(() =>{

    });
  }
}
