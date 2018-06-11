import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll()
  {
    return this.db.list('/categories', {
      query: {
        // can determine how to sort categories here.
        // can find more info using angularfire docs on github.
        orderByChild: 'name'
      }
    });
  }
}
