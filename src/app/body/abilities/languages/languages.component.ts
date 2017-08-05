import { Component, OnInit } from '@angular/core';
import {UserAbilitiesService} from "../user-abilities.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  private userAbilitiesInfo;
  private arraylength;
  private languagesList1 = [];
  private languagesList2 = [];

  constructor(private userAbilitiesService: UserAbilitiesService) { }

  ngOnInit() {
    this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
    this.arraylength = this.userAbilitiesInfo['languages'].length;
    this.languagesList1 = this.userAbilitiesInfo['languages'].slice(0,this.arraylength/2);
    if(this.arraylength > 0)
      this.languagesList2 = this.userAbilitiesInfo['languages'].slice(this.arraylength/2,this.arraylength);
  }

}
