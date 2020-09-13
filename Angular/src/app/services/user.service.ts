import { Injectable } from '@angular/core';

import { firestore } from 'firebase/app';
import { first, map, switchMap } from 'rxjs/operators';

const { Timestamp } = firestore;

@Injectable({
  providedIn: 'root',
})
export class ActionService {

  constructor(private afs: AngularFirestore ) {}

}