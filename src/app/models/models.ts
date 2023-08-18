export interface SuggestedProduct{
 banerimage:string;
 category:Category;
}

export interface NavigationItem{
    category:string;
    subcategories:string[];
   }

// #region Product

export interface Offer{
    id:number;
    title:string;
    discount:number;
   }

export interface Category{
    id: number;
    category:string;
    subcategory:string;
    }

export interface Product{
        id: number;
        title:string;
        description:string;
        productCategory: Category;
        offer:Offer;
        price:number;
        quantity:number;
        imageName:string;
        }
   // endregion