import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'financial-independence-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'fnbc';

  constructor(private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
    this.authService.getLoggedInState();
  }
}
