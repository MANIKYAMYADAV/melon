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
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  user: SocialUser;

  constructor(
    private fb: FormBuilder, private router: Router, private authService: SocialAuthService, private toastr: ToastrService, private userService: UserService) {
    this.feedbackForm = this.fb.group({
      name:['',Validators.required],
      mobile:['',Validators.required],
      emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }
  
  feedBack(data){
    console.log(data);
  }

}
