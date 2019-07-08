import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
// ProductForm= new FormGroup({
//   name:new FormControl('',[Validators.required])
// })
  constructor() { }

  ngOnInit() {
  }

}
