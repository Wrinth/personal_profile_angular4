import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: "[Your abilities details here]",
    skills: [
      {
        skillName: "[Skill name]",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "[Skill name]",
        proficiency: 4 //"[5 to 0]"
      },
      {
        skillName: "[Skill name]",
        proficiency: 3 //"[5 to 0]"
      },
      {
        skillName: "[Skill name]",
        proficiency: 2 //"[5 to 0]"
      },
      {
        skillName: "[Skill name]",
        proficiency: 1 //"[5 to 0]"
      }
    ],
    languages: [
      {
        languageName: "[Language name]",
        level: "[Level here]",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "[Language name]",
        level: "[Level here]",
        proficiency: 4 //"[5 to 0]"
      },
      {
        languageName: "[Language name]",
        level: "[Level here]",
        proficiency: 3 //"[5 to 0]"
      },
      {
        languageName: "[Language name]",
        level: "[Level here]",
        proficiency: 2 //"[5 to 0]"
      },
      {
        languageName: "[Language name]",
        level: "[Level here]",
        proficiency: 1 //"[5 to 0]"
      }
    ],
    tools: [
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 4 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 3 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 2 //"[5 to 0]"
      },
      {
        toolName: "[Tool name]",
        year: "[Used Year Here]",
        proficiency: 1 //"[5 to 0]"
      }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
