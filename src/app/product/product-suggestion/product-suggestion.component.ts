import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.service';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.css']
})
export class ProductSuggestionComponent implements OnInit {

  @Input() products: Product[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
