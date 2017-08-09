import { Component, OnInit } from '@angular/core';
import {UserExperiencesService} from "../user-experiences.service";

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  private userCertificatesInfo;

  constructor(private userExperiencesService: UserExperiencesService) { }

  ngOnInit() {
    this.userCertificatesInfo = this.userExperiencesService.getExperiencesInfo().certificates;
  }

}
