import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchingComponent } from './matching/matching.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { MentorregComponent } from './mentorreg/mentorreg.component';
import { DashComponent } from './dash/dash.component';
import { BoardComponent } from './board/board.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MatchingComponent,
    StudentregisterComponent,
    MentorregComponent,
    DashComponent,
    BoardComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
