import { Injectable } from '@angular/core';
import { Category } from '../Entities/category';
import { Product } from '../Entities/product';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
 private FoodProd: Product[]=[
    {id:1,name:"Banana",price:10,code:"FB01"},
    {id:2,name:"Bread",price:10,code:"FB02"},
    {id:3,name:"Appel",price:10,code:"FA03"},
    {id:4,name:"banana",price:10,code:"FB014"}, 
  ]
  private ClothesProd: Product[]=[
    {id:1,name:"T-Shirt",price:10,code:"CT01"},
    {id:2,name:"Sportswear",price:10,code:"CS02"},
    {id:3,name:"Polo Shirts",price:10,code:"CP03"},
  ]
  private BooksProd: Product[]=[
    {id:1,name:"In Search of Lost Time",price:10,code:"BS01"},
    {id:2,name:"War and Peace ",price:10,code:"BW02"},
    {id:3,name:"To the Lighthouse ",price:10,code:"BL03"},
    {id:4,name:"Heart of Darkness",price:10,code:"BH04"}, 
  ]
  private FurnitureProd: Product[]=[
    {id:1,name:"Bed",price:10,code:"FUB01"},
    {id:2,name:"Couch",price:10,code:"FUC02"},
    {id:3,name:"wardrobe",price:10,code:"FUW03"},
    {id:4,name:"Windsor chair",price:10,code:"FUCB04"}, 
  ]
  private booksCategory: Category[]= [
    {id:6,name:"facts",product:this.BooksProd},
    {id:7,name:"ddd"},
  ]

  private category: Category[]= [
    {id:1,name:"Beauty"},
    {id:2,name:"Books",category:this.booksCategory},
    {id:3,name:"Furniture", product:this.FurnitureProd},
    {id:4,name:"Toys"},
    {id:5,name:"Foods", product:this.FoodProd},
    {id:6,name:"Jewelry & Accessories"},
    {id:7,name:"Clothes" , product:this.ClothesProd},
  ]
  constructor() { }
  getAllCategories(){
    return this.category;
  }
  addCategory(AddedCategory:Category){
    this.category.push(AddedCategory);
  }
  getCategoryById(categoryId){
    return this.category.find(c=>c.id==categoryId);
  }
  getProductsOfCategory(categoryId){
    return this.category.find(c=>c.id==categoryId).product;
  }
  getSubCategories(categoryId){
    return this.category.find(c=>c.id==categoryId).category;
  }
}
