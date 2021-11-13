import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
 { path: "to-do-list", component: ToDoListComponent },
  { path: "to-do-details", component: ToDoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
