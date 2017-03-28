import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-new-user-session',
  templateUrl: './new-user-session.component.html',
  styleUrls: ['./new-user-session.component.css']
})
export class NewUserSessionComponent implements OnInit {

  model = new User('', '', '');

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  signIn() {
    this.userService.signIn({
      email: this.model.email,
      password: this.model.password
    });
  }
}
