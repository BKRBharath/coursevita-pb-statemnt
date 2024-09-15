import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { MentorregComponent } from './mentorreg/mentorreg.component';
import { BoardComponent } from './board/board.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:'',component:DashComponent},
  {path:'student',component:StudentregisterComponent},
  {path:'mento',component:MentorregComponent},
  {path:'board',component:BoardComponent},
  {path:'studentform',component:StudentFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
