import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private userInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
  }

}
