import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public auth: AuthService
  ) {

  }

  ngOnInit() {
  }
}
