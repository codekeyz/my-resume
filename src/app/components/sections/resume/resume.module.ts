import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderComponent } from './widgets/header/header.component';
import { ResumeService } from './providers/resume.service';
import { SkillComponent } from './widgets/skill/skill.component';

@NgModule({
  declarations: [ResumeComponent, HeaderComponent, SkillComponent],
  imports: [CommonModule, AngularFirestoreModule],
  providers: [ResumeService]
})
export class ResumeModule {}
