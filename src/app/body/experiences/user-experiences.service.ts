import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "[Your experience here]",
    educations: [
      {
        schoolName: "[Your University's name here]",
        startDate: "[Srart Month Year]",
        endDate: "[End Month Year]",
        degreeTitle: "[Degree Title here]",
        certificationDescription: "[Certification Description here.]",
        location: "[Location here]"
      },
      {
        schoolName: "[Your High School's name here]",
        startDate: "[Srart Month Year]",
        endDate: "[End Month Year]",
        degreeTitle: "[Certification Description here.]",
        certificationDescription: "[Certification Description here.]",
        location: "[Location here]"
      }
    ],
    careers: [
      {
        companyName: "[Company's name here]",
        startDate: "[Srart Month Year]",
        endDate: "[End Month Year]	",
        jobType: "[Job type]",
        jobTitle: "[Your job's title here]",
        jobDuty: "[Your job's duty here]",
        location: "[Location]",
        companyLink: "[Company's website]"
      },
      {
        companyName: "[Company's name here]",
        startDate: "[Srart Month Year]",
        endDate: "[End Month Year]	",
        jobType: "[Job type]",
        jobTitle: "[Your job's title here]",
        jobDudty: "[Your job's duty here]",
        location: "[Location]",
        companyLink: "[Company's website]"
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
