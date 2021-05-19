import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'financial-independence-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {


  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  handleSubmit(isRegistered:boolean) {
    if(isRegistered){
      this.authService.login(this.userName, this.password).subscribe(data => console.log(data));
    } else{
      this.authService.register(this.userName, this.password).subscribe(data => console.log(data));
    }

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
