import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { Category, NavigationItem } from "../models/models";
import { RegisterComponent } from "../register/register.component";
import { NavigationService } from "../services/navigation.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle', {static: true }) modalTitle !: ElementRef;
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  navigationList: NavigationItem[] = [
    // {
    //   category: "electronics",
    //   subcategories: ["mobiles", "laptops"],
    // },
    // {
    //   category: "furniture",
    //   subcategories: ["chairs", "tables"],
    // },
  ];
  constructor(private componentFactoryResolver: ComponentFactoryResolver, 
              private navigationService: NavigationService) {}

  ngOnInit():void {
    this.navigationService.getCategoryList().subscribe((list:Category[])=>{
      for(let item of list){
        let present = false;
        for(let navItem of this.navigationList){
             if(navItem.category === item.category){
               navItem.subcategories.push(item.subcategory);
                 present = true;
             }
        }
        if(!present){
          this.navigationList.push({
            category:item.category,
            subcategories: [item.subcategory],
          })
        }
      }
    })
  }

  openModal(name:string){
    this.container.clear();
    
    let componentType = null;
    if(name === 'login') {
      componentType = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
      this.modalTitle.nativeElement.textContent = 'Enter Login Information';
    }
    if(name === 'register'){
      componentType = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
      this.modalTitle.nativeElement.textContent = 'Enter Register Information';
    } 
    
    this.container.createComponent(componentType);
  }
}
