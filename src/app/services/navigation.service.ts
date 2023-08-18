import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Category } from '../models/models';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
baseURL = 'https://localhost:7234/api/Shopping/';

  constructor(private http: HttpClient) { }

  getCategoryList(){
    let url= this.baseURL + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(map((categories: any[]) => 
      categories.map((category)=>{
        let mappedCategory: Category ={
             id:category.id,
             category:category.category,
             subcategory:category.subCategory
        };
        return mappedCategory;
      }))
    );
  }

  getProducts(category: string, subcategory: string, count: number) {
     // let url = 'https://localhost:7234/api/Shopping/GetProducts?category=electronics&subcategory=mobiles&count=3'
    return this.http.get<any[]>(this.baseURL + 'GetProducts', {
      params: new HttpParams()
        .set('category', category)
        .set('subcategory', subcategory)
        .set('count', count.toString()),
    });
  }
}
