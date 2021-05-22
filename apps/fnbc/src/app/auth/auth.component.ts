import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'financial-independence-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
  }

  // optional remember me feature - closed by default until implemented
  allowRememberMe = false;
  loginError: boolean = null;
  form: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  handleSubmit(isRegistered: boolean) {
    this.loginError = false;
    if (!this.form.valid) return;
    if (isRegistered) {
      this.authService.login(this.userName, this.password).subscribe(data => {
        this.authService.setLoggedInState(true);
        this.router.navigate(['goals']);
      }, (error => this.handleError(error)));
    } else {
      this.authService.register(this.userName, this.password).subscribe(data => {
        this.authService.setLoggedInState(true);
        this.router.navigate(['goals']);
      }, error => this.handleError(error));
    }
  }

  handleError(error) {
    this.loginError = !!(error.status === 401 || 404 || 400);
  }


  get userName() {
    return this.form.get('userName').value;
  }

  get password() {
    return this.form.get('password').value;
  }

  ngOnInit(): void {
  }

}
