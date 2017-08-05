import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  private projectsInfo = {
    myProjects: "[Your projects details here]",
    projects: [
      {
        projectTitle: "[Project title here]",
        projectImageLink: "https://opensource.com/sites/default/files/code4.png",
        projectDescription: "[Project description here]",
        skillsList: "[List of skills]",
        projectLink: "[Project link here]"
      },
      {
        projectTitle: "[Project title here]",
        projectImageLink: "https://opensource.com/sites/default/files/code4.png",
        projectDescription: "[Project description here]",
        skillsList: "[List of skills]",
        projectLink: "[Project link here]"
      }
    ]
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
