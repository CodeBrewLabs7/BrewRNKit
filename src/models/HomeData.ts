

export type  ProductsData = {
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    images: [],
    thumbnail: string | undefined
  }

   export interface HomeData {
    products: HomeData[]
   }
  