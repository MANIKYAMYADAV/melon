import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { UserService } from '../service/user.service';
import { SocialUser } from 'angularx-social-login';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: SocialUser;

  constructor(
    private fb: FormBuilder, private router: Router, private authService: SocialAuthService, private toastr: ToastrService, private userService: UserService) {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      if (res) {
        this.toastr.success("Successfully Login with Google...");
        this.router.navigate(['dashboard1']);
      }
      else {
        this.toastr.error('Error occured!');
      }
    })

  }

  signInWithFB(): void {
    // const fbLogin = this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // if (fbLogin) {
    //   this.router.navigate(['dashboard2']);
    //   this.toastr.success("Successfully Login with FaceBook...")
    // } else { 
    //   this.toastr.error('Error occured!');
    // }

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res => {
      if (res) {
        this.toastr.success("Successfully Login with FaceBook...");
        this.router.navigate(['/dashboard2']);
      }
      else {
        this.toastr.error('Error occured!');
      }
    })

  }

  signOut(): void {
    const logout = this.authService.signOut();
    if (logout) {
      this.toastr.success("Successfully Logout.!")
      this.router.navigate(['logout']);
    }
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  login(data: any) {

    // this.userService.adminLogin(data).subscribe((Response => {
    //   if (Response.data[0].status == 1) {
    //     localStorage.setItem('token', Response.data[1].token);
    //     localStorage.setItem('userId', Response.data[0].id);
    //     this.toastr.success(Response.message, "Success")
    //   }
    //   else {
    //     this.toastr.error(Response.message, "Error");
    //   }
    // }, error => {
    //   this.toastr.error(error.error.message, 'Error');
    // }
    // ))
    console.log("Login Data : ", data);
    this.router.navigate(['/melon/employee']);
    
  }

}
