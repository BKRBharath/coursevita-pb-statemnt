import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.css'
})
export class DashComponent {
  constructor(private route:Router){}

  register(){
    this.route.navigateByUrl('/student')
  }
  login(){
    this.route.navigateByUrl('/mento')
  }
}
