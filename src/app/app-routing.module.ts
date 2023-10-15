import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'task/edit/:id', component: EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
