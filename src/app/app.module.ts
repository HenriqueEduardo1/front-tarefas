import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { FormComponent } from './components/form/form.component';
import { PopUpService } from './services/pop-up.service';
import { FormUpdateComponent } from './components/form-update/form-update.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    HomeComponent,
    TaskCardComponent,
    FormComponent,
    FormUpdateComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
