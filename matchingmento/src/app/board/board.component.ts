import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  constructor(private route:Router){}
  logout(){
    this.route.navigateByUrl('/');

  }


}
