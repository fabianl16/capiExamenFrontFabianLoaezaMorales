import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  users!: User[];

  constructor(
    private usersService: UsersService
  ){}

  ngOnInit(): void {
    this.usersService.getAllUsers()
    .subscribe( data => {
      this.users = data;
      console.log(this.users);
    })
  }
  
}
