import { Component, OnInit } from '@angular/core';
import {PageService} from "../../page.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private pageInfo;

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageInfo = this.pageService.getPageInfo();
  }

}
