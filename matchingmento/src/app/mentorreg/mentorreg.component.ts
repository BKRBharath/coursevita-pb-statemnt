import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-mentorreg',
  templateUrl: './mentorreg.component.html',
  styleUrl: './mentorreg.component.css'
})
export class MentorregComponent {
  formData = {
    name: '',
    email: '',
    expertise: '',
    availability: '',
    teachingStyle: ''
  };

  constructor(private apiService: ApiService) { }

  register() {
    this.apiService.registerMentor(this.formData).subscribe(response => {
      console.log('Registration successful:', response);
    }, error => {
      console.error('Registration error:', error);
    });
  }

}
