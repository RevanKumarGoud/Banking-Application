import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  user : User = {
    id : 0,
    Name :'' ,
    Email : '',
    Password :'' ,
    Contact  : 0,
}
Validate(id1: number, password1:string){
this.userservice.getuser(id1).subscribe({
  next:(data:any)=> {
    this.user = data;
    if(password1 == this.user.Password){
      alert('Your Are Validated');
      this.router.navigate(['/home'])
    }
    else{
      alert('Password not match');
    }
  },
  error:()=>{
    alert('Id Not Found')
  }
  }
)
}
 
  constructor(private userservice : UserService,private router : Router) { }

  ngOnInit(): void {
   
  }

}
