import {Component, OnInit} from '@angular/core';
import {AuthService} from '../global/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  login() {


    this.authService.login().subscribe(() => {

      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/inbox';

        // Set our navigation extras object
        // that passes on our global query params and fragment


        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }

}
