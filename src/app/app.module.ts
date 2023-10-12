import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
