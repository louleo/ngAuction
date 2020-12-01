import { Injectable } from '@angular/core';


const products = [
  {
    'id':0,
    'title':'First Product',
    'price':24.99,
    'rating':4.3,
    'description':'description',
    'categories':['electronics','hardware']
  },
  {
    'id':1,
    'title':'Second Product',
    'price':24.99,
    'rating':4.3,
    'description':'description',
    'categories':['books']
  }
];

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }



  getProducts():Product[]{
    return products.map(p=> new Product(p.id,p.title,p.price,p.rating,p.description,p.categories));
  }

  getProductById(productId:number):Product{
    return products.find(p=>p.id == productId);
  }
}



export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public description:string,
    public categories: string[]
  ){}

}
