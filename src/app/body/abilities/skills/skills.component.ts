import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "../user-abilities.service";
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  private userInfo;
  private userAbilitiesInfo;
  private arraylength;
  private skillsList1 = [];
  private skillsList2 = [];

  constructor(private userService: UserService, private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userInfo = this.userService.getUserInfo();
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['skills'].length;
    this.skillsList1 = this.userAbilitiesInfo['skills'].slice(0,this.arraylength/2);
    if(this.arraylength > 0)
      this.skillsList2 = this.userAbilitiesInfo['skills'].slice(this.arraylength/2,this.arraylength);
  }

}
