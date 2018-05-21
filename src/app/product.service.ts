import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
    this.db.list('/products').push(product);
  }

  // Gets the list of products from firebase.
  getAll()
  {
    return this.db.list('/products');
  }

  // Gets a specific product
  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    // have to pass ID separately.
    return this.db.object('/products/' +productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/' + productId).remove();
  }
}
