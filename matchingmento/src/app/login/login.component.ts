import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../sevice/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  logged:any;
  loggedin:any
loginform:FormGroup= new FormGroup({});
constructor(private route:Router,private si:FormBuilder,private service:RegisterService){
  this.loginform=this.si.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}
ngOnInit(){
 
}

@ViewChild('myinput') myin!:ElementRef
checkme(){
  if(this.myin.nativeElement.type=="password"){
    this.myin.nativeElement.type ='text'
  }
  else{
    this.myin.nativeElement.type ='password'
  }
  
}
checklogin(){
  this.loggedin={
    username:this.loginform.value.username,
    password:this.loginform.value.password
  }
  this.service.login(this.loggedin).subscribe((result:any)=>{
    console.log(result);
    if(result.message=="user logged in successfully"){
      alert("login success")
      this.route.navigateByUrl('/admin/home')
      localStorage.setItem("user",JSON.stringify(result))
    }
    else{
      alert(result.message)
    }
    
    
  })

}
loginme(){

  this.route.navigateByUrl('/')
}


}
