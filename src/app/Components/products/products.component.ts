import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/product';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
prod:Product[];
  constructor(private service:CategoriesService, private route : ActivatedRoute) { }

  ngOnInit() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    this.prod=this.service.getProductsOfCategory(categoryId);
  }

}
