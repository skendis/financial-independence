import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'financial-independence-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  isLoggedIn = false;

  handleDisconenct() {
    this.authService.disconenct();
  }

  ngOnInit(): void {
    this.authService.getLoggedInState().subscribe(value => this.isLoggedIn = value);
  }

}
