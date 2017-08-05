import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "../user-experiences.service";

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  private userExperiencesInfo;

  constructor(private userExperiencesService: UserExperiencesService) { }

  ngOnInit() {
    this.userExperiencesInfo = this.userExperiencesService.getExperiencesInfo();
  }

}
