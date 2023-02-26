import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Product, rateCount } from '../interfaces/product.interface';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

indice:number=0
product!:Product
counter:number=0

  ngOnInit():void{
this.indice=this.RouterActivated.snapshot.params['id']

this.productService.findProductForId(this.indice).pipe(
  tap(((res:Product)=>this.product=res)

  ),
  tap(
    ((res:Product)=>this.product.rating=Object.values(res.rating))
  )

).subscribe()





  }
  constructor(private RouterActivated:ActivatedRoute,private productService:productService){
  
  }

  paintStars(numberStairs:rateCount):Array<number>{
    
   let stairs=String(numberStairs)

   let array=stairs.split('.')
   
 let porcentStair=Number(array[1])/10
   const numberstairs= Number(porcentStair)<0.4?Math.floor(Number(numberStairs)):Math.ceil(Number(numberStairs))
   
   
   
   
   console.log(`numbero de estrellas ${numberstairs}`);
   let numberOfStairs=[]
   for (let index = 0; index < numberstairs; index++) {    
 
    numberOfStairs[index]=Math.random()
    console.log('entrastes');
    
   }
   
   return numberOfStairs        
  
  }


 increment(number:number):void{
this.counter+=number
 }
 decrement(number:number):void{
  if (this.counter==0){
    return
  }else if(this.counter>0){
    this.counter-=number
  }
  }
 
 }




