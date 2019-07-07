import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/Entities/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:Category[];
  constructor(private service:CategoriesService) { }

  ngOnInit() {
    this.categories= this.service.getAllCategories();
  }

}
