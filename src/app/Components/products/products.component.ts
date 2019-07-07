import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/product';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
prod:Product[];
categoryId;
  constructor(private service:CategoriesService, private route : ActivatedRoute) { }

  getProduct(){
    this.route.paramMap.subscribe(param=>{
      this.categoryId =+param.get('id');
     this.prod=this.service.getProductsOfCategory(this.categoryId);

    })
  }

  ngOnInit() {
    // let categoryId = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

}
