import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 view:'grid' | 'list' ='list';
 sortby: 'default' | 'htl' | 'lth'= 'default';
 products:Product[] = [];
 data:boolean=true

  constructor( private activeedRoute: ActivatedRoute,
              private navigationService: NavigationService,
              private utilityService: UtilityService) { }

  ngOnInit() {
    this.activeedRoute.queryParams.subscribe((params:any)=>{
      let category = params.category;
      let subcategory = params.subcategory;

      if(category && subcategory){
          this.navigationService.getProducts(category, subcategory, 10).subscribe((res:any)=>{
            this.products = res;
            console.log('Pro', this.products);
            
          });
      }
    });
  }

  sortByPrice(sortKey: string){
    this.products.sort((a,b)=>{
      if(sortKey === 'default'){
         return a.id > b.id ? 1 : -1
      }
      if(sortKey === 'htl'){
         return this.utilityService.applyDiscount(a.price, a.offer.discount) >
         this.utilityService.applyDiscount(b.price, b.offer.discount)
         ? -1 : 1;
      }
      if(sortKey === 'lth'){
       return this.utilityService.applyDiscount(a.price, a.offer.discount) >
        this.utilityService.applyDiscount(b.price, b.offer.discount)
        ? 1 : -1;
      }
      return 0;
    });
    }

  }


