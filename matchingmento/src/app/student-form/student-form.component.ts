import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {
  student: any = {};

  constructor(private studentService: ApiService) { }

  onSubmit() {
    this.studentService.getstudent().subscribe((response:any) => {
      console.log('Student created:', response);
      // Handle success (e.g., reset form, show message)
    }, (error:any) => {
      console.error('Error:', error);
      // Handle error
    });
  }
}