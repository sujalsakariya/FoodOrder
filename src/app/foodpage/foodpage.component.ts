import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/models/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService, private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
          this.food = foodService.getFoodById(params['id'])
      })
    }
    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page')
    }
}
