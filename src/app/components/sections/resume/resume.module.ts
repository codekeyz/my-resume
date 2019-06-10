import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { FooterComponent } from '../../widgets/footer/footer.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ResumeComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, AngularFirestoreModule],
  providers: []
})
export class ResumeModule {}
