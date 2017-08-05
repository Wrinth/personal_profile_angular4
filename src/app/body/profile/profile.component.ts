import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {PageService} from "../../page.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private userInfo;
  private pageInfo;

  constructor(private userService: UserService, private pageService: PageService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.pageInfo = this.pageService.getPageInfo();
    document.getElementById("profile").style.backgroundColor = this.pageInfo['profileBackgroundColor'];
  }

}
