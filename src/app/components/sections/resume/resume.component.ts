import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience, Skill } from './providers/resume.model';
import { ResumeService } from './providers/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  expList: Observable<Experience[]>;

  fntSkillList: Observable<Skill[]>;

  backSkillList: Observable<Skill[]>;

  otherSkillList: Observable<Skill[]>;

  constructor(private rmSvc: ResumeService) {}

  ngOnInit() {
    this.expList = this.rmSvc.getExperiences();

    this.fntSkillList = this.rmSvc.getSkills();

    this.backSkillList = this.rmSvc.getSkills('Backend');

    this.otherSkillList = this.rmSvc.getSkills('Others');
  }
}
