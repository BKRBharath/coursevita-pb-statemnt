import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../sevice/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loginform: FormGroup = new FormGroup({})
  username: any;
  password: any;

  constructor(private fb: FormBuilder, private route: Router, private service:RegisterService) {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  loggin: any;
  newuser: any;
  loggedin:any;

  checklogin(){
    this.newuser={
      username:this.loginform.value.username,
      password:this.loginform.value.password
    }
    this.username=this.loginform.value.username,
    this.password=this.loginform.value.password,
    this.loggedin={
      username:this.loginform.value.username,
      password: this.loginform.value.password
    }
    localStorage.setItem('user',JSON.stringify(this.loggedin))
    this.route.navigateByUrl('/login')
    this.service.register(this.newuser).subscribe((result:any)=>{
      alert(result)
    })
  }
  @ViewChild('myinput') myin!: ElementRef;
  checkme() {
    if (this.myin.nativeElement.type == "password") {
      this.myin.nativeElement.type = 'text'
    }
    else {
      this.myin.nativeElement.type = 'password'
    }
  }

  loginme(){
    this.route.navigateByUrl('/login')
  }


}
