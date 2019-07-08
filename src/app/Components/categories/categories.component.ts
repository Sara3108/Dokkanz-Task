import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/Entities/category';
import { ActivatedRoute } from '@angular/router';
import { RootCategory } from 'src/app/Entities/RootCategories';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: RootCategory[];
  subCategories:Category[];
  categoryId;
  rootCategoryId;
  constructor(private service: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.categories = this.service.getAllCategories();
  }
  getSubCategories() {

      this.subCategories = this.service.getSubCategories(this.rootCategoryId);
    
  }

}
