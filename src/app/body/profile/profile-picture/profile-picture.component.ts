import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  private userInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
  }

}
