import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrl: './matching.component.css'
})
export class MatchingComponent {
  matches: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMatches().subscribe(response => {
      this.matches = response;
    }, error => {
      console.error('Error fetching matches:', error);
    });
  }

  scheduleSession(matchId: string) {
    this.apiService.scheduleSession(matchId).subscribe(response => {
      console.log('Session scheduled:', response);
    }, error => {
      console.error('Error scheduling session:', error);
    });
  }

}
