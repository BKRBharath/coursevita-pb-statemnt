import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(user:any){
    return this.http.post('http://localhost:4500/register',user,{'responseType':'text'as'json'})
  }
  login(logged:any){
    return this.http.post("http://localhost:4500/login",logged)
  }
}
