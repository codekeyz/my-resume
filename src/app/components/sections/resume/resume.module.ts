import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { FooterComponent } from '../../widgets/footer/footer.component';

@NgModule({
  declarations: [ResumeComponent, FooterComponent],
  imports: [CommonModule]
})
export class ResumeModule {}
