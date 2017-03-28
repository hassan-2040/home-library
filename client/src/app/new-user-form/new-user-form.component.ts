import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
	selector: 'app-new-user-form',
	templateUrl: './new-user-form.component.html',
	styleUrls: ['./new-user-form.component.css'],
  providers: [UserService]
})


export class NewUserFormComponent implements OnInit {

	model = new User('','','');

	constructor(private userService: UserService) {}

	ngOnInit() {
	}

	register() {
		this.userService.registerAccount({
			email: 				  this.model.email,
			password: 			  this.model.password,
			passwordConfirmation: this.model.password
		});
	}

}
