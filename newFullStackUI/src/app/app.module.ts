import { AppRouterModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyNavigationComponent } from './my-navigation/my-navigation.component';
import { MyWelcomeComponent } from './my-welcome/my-welcome.component';
import { MyFirstChildComponent } from './my-first-child/my-first-child.component';
import { MySecondChildComponent } from './my-second-child/my-second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyNavigationComponent,
    MyWelcomeComponent,
    MyFirstChildComponent,
    MySecondChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
