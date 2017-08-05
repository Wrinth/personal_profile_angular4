import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "./user-experiences.service";
import {PageService} from "../../page.service";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [UserExperiencesService]
})
export class ExperiencesComponent implements OnInit {
  private userExperiencesInfo;
  private pageInfo;

  constructor(private userExperiencesService: UserExperiencesService, private pageService: PageService) { }

  ngOnInit() {
    this.userExperiencesInfo = this.userExperiencesService.getExperiencesInfo();
    this.pageInfo = this.pageService.getPageInfo();
    document.getElementById("experiences").style.backgroundColor = this.pageInfo['experiencesBackgroundColor'];
  }

}
