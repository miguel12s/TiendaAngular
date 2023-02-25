export interface Product{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:rateCount[];
}




export interface rateCount{
    rate:number;
    count:number;
}