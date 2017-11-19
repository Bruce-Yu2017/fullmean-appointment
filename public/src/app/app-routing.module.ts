import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullmeanService} from './fullmean.service';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", pathMatch: "full", component: LoginComponent},
  {path: "show", pathMatch: "full", component: ShowComponent},
  {path: "new", pathMatch: "full", component: NewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
