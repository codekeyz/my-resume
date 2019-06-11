import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Experience, Skill } from './resume.model';
import { Observable } from 'rxjs';

@Injectable()
export class ResumeService {
  constructor(private afStore: AngularFirestore) {}

  getExperiences(): Observable<Experience[]> {
    return this.afStore
      .collection<Experience>('Experience', ref =>
        ref.orderBy('rating', 'desc')
      )
      .valueChanges();
  }

  getSkills(type: String = 'Frontend'): Observable<Skill[]> {
    return this.afStore
      .collection<Skill>('Skills', ref =>
        ref.where('type', '==', type).orderBy('percent', 'desc')
      )
      .valueChanges();
  }
}
