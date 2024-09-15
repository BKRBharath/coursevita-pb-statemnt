import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrl: './studentregister.component.css'
})
export class StudentregisterComponent {
  // formData = {
  //   name: '',
  //   email: '',
  //   goals: '',
  //   preferredAreas: '',
  //   availability: ''
  // };
  formdata: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) {
    this.formdata = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      goals: ['', Validators.required],
      preferredAreas: ['', Validators.required],
      availability: ['', Validators.required]

    })
  }


  // constructor(private apiService: ApiService, private route:Router) { }

  register() {
    if (this.formdata.valid) {
      this.apiService.registerStudent(this.formdata.value).subscribe(response => {
        console.log('Registration successful:', response);
        alert("login successfully")
        this.route.navigateByUrl('/board')
      });

    }
    else{
        console.error('Registration error:');
      
    }
    }
  }


