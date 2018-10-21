import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-my-second-child',
  templateUrl: './my-second-child.component.html',
  styleUrls: ['./my-second-child.component.scss']
})
export class MySecondChildComponent implements OnInit {

  idForDisplay: string;

  constructor(public router: Router) { 
    this.router.events.subscribe(this.ngNavigationEnd)

  }

  ngOnInit() {
  }

  ngNavigationEnd = (e: NavigationEnd) => {
    if(e instanceof NavigationEnd){
      var segments = e.url.split('/');
      console.trace(e);
      this.idForDisplay = segments[segments.length - 1];
    }
  }
  
}
