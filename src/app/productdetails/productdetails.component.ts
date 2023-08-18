import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  imageIndex:number =1;
  constructor() { }

  ngOnInit() {
  }

}
