import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


interface UserDetails{
  username: FormControl<string>,
  password:FormControl<any>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Reactive Form';
  loginForm = new FormGroup<UserDetails>({
    username: new FormControl('',{nonNullable:true}),
    password: new FormControl('',Validators.required)
  })

  get user(){
    return this.loginForm.get('username');
  }

  loginUser(){
    console.log(this.loginForm.value);
  }
}
