import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'; // can take only one value from our observable and that observable will automatically complete -- therefore don't have to unsubscribte.

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {}; //must set to empty object instead of null
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) { 
    this.categories$ = categoryService.getCategories();

    this.id =  this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p); // must subscribe to read product.
  }

  save(product){
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']); // send user back to products list.
  }

  ngOnInit() {
  }

}
