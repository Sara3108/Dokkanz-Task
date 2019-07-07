import { Injectable } from '@angular/core';
import { Product } from '../Entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product: Product[]=[
  {id:1,name:"Banana",price:10,code:"FB01"},
  {id:2,name:"Bread",price:10,code:"FB02"},
  {id:3,name:"Appel",price:10,code:"FA03"},
  {id:4,name:"banana",price:10,code:"FB01"},

]
  constructor() { }
}
