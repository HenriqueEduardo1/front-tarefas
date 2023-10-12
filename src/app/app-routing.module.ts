import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CompletedTasksComponent } from './components/pages/completed-tasks/completed-tasks.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'completedTask', component: CompletedTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
