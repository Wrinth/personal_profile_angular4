import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {PageService} from "./page.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userInfo;
  private pageInfo;

  constructor(private userService: UserService, private pageService: PageService) {}

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.pageInfo = this.pageService.getPageInfo();
    document.getElementById("body").style.backgroundImage = "url('" + this.pageInfo['backgroundImage'] + "')";
  }
}
