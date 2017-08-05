import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "../user-experiences.service";

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  private userExperiencesInfo;

  constructor(private userExperiencesService: UserExperiencesService) { }

  ngOnInit() {
    this.userExperiencesInfo = this.userExperiencesService.getExperiencesInfo();
  }

}
