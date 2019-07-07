import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/Entities/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  subCategories: Category[];
  categoryId;
  constructor(private service: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.service.getAllCategories();
  }
  getSubCategories() {
    this.route.paramMap.subscribe(param => {
      this.categoryId = param.get('id');
      this.subCategories = this.service.getSubCategories(this.categoryId);
    })
  }

}
