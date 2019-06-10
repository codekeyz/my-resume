import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ResumeModule } from './components/sections/resume/resume.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ResumeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
