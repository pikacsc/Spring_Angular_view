import {UserService} from './user.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {Component} from '@angular/core';



@Component({
  templateUrl: './add-user.component.html'
})

export class AddUserComponent {
  user: User = new User();

  constructor(private router: Router, private userService: UserService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe(data => {
        alert('회원 가입이 성공했습니다!');
    });
  }
}
