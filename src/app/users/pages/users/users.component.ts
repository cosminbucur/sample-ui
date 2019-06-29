import { UserService } from './../../../core/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      data => { this.users = data; });
  }

}
