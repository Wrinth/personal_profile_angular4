import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  private pageInfo;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageInfo = this.pageService.getPageInfo();
  }

}
