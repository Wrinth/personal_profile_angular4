import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "../user-abilities.service";

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  private userAbilitiesInfo;
  private arraylength;
  private toolsList1 = [];
  private toolsList2 = [];

  constructor(private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['tools'].length;
    this.toolsList1 = this.userAbilitiesInfo['tools'].slice(0,this.arraylength/2);
    if(this.arraylength > 0)
      this.toolsList2 = this.userAbilitiesInfo['tools'].slice(this.arraylength/2,this.arraylength);
  }

}
